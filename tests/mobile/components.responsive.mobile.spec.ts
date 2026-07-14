import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';

type InteractionRule = {
  selectors: string[];
  action: 'tap' | 'fill';
  scope?: 'preview' | 'page';
  fillValue?: string;
};

const TAP_CANDIDATE_LIMIT = 100;
const FILL_CANDIDATE_LIMIT = 20;
const MIN_INTERACTIVE_DIMENSION_PX = 2;

const interactiveComponentNames = new Set([
  'accordion',
  'button',
  'button-group',
  'checkbox',
  'combobox',
  'data-access',
  'data-grid',
  'date-picker',
  'date-range-slider',
  'dialog',
  'dropdown',
  'earthdata-login',
  'file-upload',
  'input',
  'login',
  'menu',
  'menu-item',
  'pagination',
  'popup',
  'radio',
  'radio-group',
  'select',
  'site-header',
  'site-navigation',
  'slider',
  'spatial-picker',
  'stepper',
  'tabs',
  'tab',
  'textarea',
  'time-average-map',
  'time-series',
  'toggle',
  'tooltip',
  'variable-combobox',
  'variable-keyword-search',
]);

const previewSelector = 'div.code-preview__preview-content[data-flavor="html"]';
const defaultOverflowTolerancePx = 2;
const defaultBoundsTolerancePx = 8;
const maybeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
const parsedVisualAllowanceMultiplier = Number(maybeEnv?.MOBILE_VISUAL_ALLOWANCE_MULTIPLIER ?? '1');
const visualAllowanceMultiplier = Number.isFinite(parsedVisualAllowanceMultiplier)
  ? parsedVisualAllowanceMultiplier
  : 1;

const componentNames = [...interactiveComponentNames].sort((a, b) => a.localeCompare(b));

const visualOverflowAllowancePx: Partial<Record<string, number>> = {
  // Keep this list intentionally minimal. Add an override only for clearly intentional horizontal scrolling.
};

const componentInteractionRules: Record<string, InteractionRule> = {
  accordion: {
    selectors: ['terra-accordion summary', 'terra-accordion [slot="summary"]', 'terra-accordion button'],
    action: 'tap',
  },
  button: {
    selectors: ['terra-button', 'button'],
    action: 'tap',
  },
  'button-group': {
    selectors: ['terra-button-group terra-button', 'terra-button-group button'],
    action: 'tap',
  },
  checkbox: {
    selectors: ['terra-checkbox', 'terra-checkbox [role="checkbox"]'],
    action: 'tap',
  },
  combobox: {
    selectors: ['terra-combobox [role="combobox"]', 'terra-combobox input'],
    action: 'tap',
  },
  'date-picker': {
    selectors: ['terra-date-picker input', 'terra-date-picker [role="textbox"]'],
    action: 'tap',
  },
  'date-range-slider': {
    selectors: ['terra-date-range-slider [role="slider"]', 'terra-date-range-slider'],
    action: 'tap',
  },
  dialog: {
    selectors: ['terra-dialog [slot="trigger"]', 'terra-dialog button'],
    action: 'tap',
  },
  dropdown: {
    selectors: ['terra-dropdown [slot="trigger"]', 'terra-dropdown [role="button"]'],
    action: 'tap',
  },
  'earthdata-login': {
    selectors: ['terra-earthdata-login button', 'terra-earthdata-login [role="button"]'],
    action: 'tap',
  },
  'file-upload': {
    selectors: ['terra-file-upload [role="button"]', 'terra-file-upload button'],
    action: 'tap',
  },
  input: {
    selectors: ['terra-input input', 'input[type="text"]'],
    action: 'fill',
    fillValue: 'mobile test input',
  },
  login: {
    selectors: ['terra-login button', 'terra-login [role="button"]'],
    action: 'tap',
  },
  menu: {
    selectors: ['terra-menu terra-menu-item', 'terra-menu [role="menuitem"]'],
    action: 'tap',
  },
  'menu-item': {
    selectors: ['terra-menu-item', '[role="menuitem"]'],
    action: 'tap',
  },
  pagination: {
    selectors: ['terra-pagination button', 'terra-pagination [role="button"]'],
    action: 'tap',
  },
  popup: {
    selectors: ['terra-popup [slot="anchor"]', 'terra-popup button', 'terra-popup [role="button"]'],
    action: 'tap',
  },
  radio: {
    selectors: ['terra-radio', 'terra-radio [role="radio"]'],
    action: 'tap',
  },
  'radio-group': {
    selectors: ['terra-radio-group terra-radio', 'terra-radio-group [role="radio"]'],
    action: 'tap',
  },
  select: {
    selectors: ['terra-select [slot="trigger"]', 'terra-select [role="combobox"]'],
    action: 'tap',
  },
  'site-header': {
    selectors: ['terra-site-header button', 'terra-site-header [role="button"]'],
    action: 'tap',
    scope: 'page',
  },
  'site-navigation': {
    selectors: ['terra-site-navigation button', 'terra-site-navigation [role="button"]'],
    action: 'tap',
    scope: 'page',
  },
  slider: {
    selectors: ['terra-slider [role="slider"]', 'terra-slider'],
    action: 'tap',
  },
  'spatial-picker': {
    selectors: ['terra-spatial-picker terra-input input', 'terra-spatial-picker button', 'terra-spatial-picker'],
    action: 'tap',
  },
  stepper: {
    selectors: [
      'terra-stepper-step',
      'terra-stepper [role="tab"]',
      'terra-stepper a',
      'terra-stepper [part*="step"]',
      'terra-stepper',
    ],
    action: 'tap',
  },
  tab: {
    selectors: ['terra-tab', '[role="tab"]'],
    action: 'tap',
  },
  tabs: {
    selectors: ['terra-tabs [role="tab"]', 'terra-tab'],
    action: 'tap',
  },
  textarea: {
    selectors: ['terra-textarea textarea', 'textarea'],
    action: 'fill',
    fillValue: 'mobile test textarea',
  },
  'time-average-map': {
    selectors: [
      'role=button[name="Earthdata Login"]',
      'terra-time-average-map button',
      'terra-time-average-map [role="button"]',
      'terra-time-average-map',
    ],
    action: 'tap',
    scope: 'page',
  },
  'time-series': {
    selectors: [
      'role=button[name="Earthdata Login"]',
      'terra-time-series button',
      'terra-time-series [role="button"]',
      'terra-time-series',
    ],
    action: 'tap',
    scope: 'page',
  },
  toggle: {
    selectors: ['terra-toggle', 'terra-toggle [role="switch"]'],
    action: 'tap',
  },
  tooltip: {
    selectors: ['terra-tooltip [slot="trigger"]', 'terra-tooltip button', 'terra-tooltip [role="button"]'],
    action: 'tap',
  },
  'variable-combobox': {
    selectors: ['terra-variable-combobox [role="combobox"]', 'terra-variable-combobox input'],
    action: 'tap',
  },
  'variable-keyword-search': {
    selectors: ['terra-variable-keyword-search input', 'terra-variable-keyword-search [role="textbox"]'],
    action: 'fill',
    fillValue: 'temperature',
  },
};

const getVisiblePreview = (page: Page) => {
  return page
    .locator(previewSelector)
    .filter({ has: page.locator(':scope > *') })
    .filter({ visible: true })
    .first();
};

const tapCenter = async (page: Page, locator: Locator) => {
  try {
    await locator.scrollIntoViewIfNeeded({ timeout: 500 });
  } catch {
    // Ignore scroll failures and let bounding box checks handle non-interactable elements.
  }

  const box = await locator.boundingBox();
  if (!box) {
    return false;
  }

  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  return true;
};

const getFirstMatchedLocator = async (
  root: Locator,
  selectors: string[],
  maxCandidatesPerSelector: number,
  predicate: (candidate: Locator) => Promise<boolean>
) => {
  for (const selector of selectors) {
    const candidates = root.locator(selector);
    const count = await candidates.count();
    const limit = Math.min(count, maxCandidatesPerSelector);
    for (let i = 0; i < limit; i += 1) {
      const candidate = candidates.nth(i);
      if (await predicate(candidate)) {
        return candidate;
      }
    }
  }

  return null;
};

const getFirstTappableLocator = async (page: Page, root: Locator, selectors: string[]) => {
  return getFirstMatchedLocator(root, selectors, TAP_CANDIDATE_LIMIT, (candidate) => {
    return tapCenter(page, candidate);
  });
};

const getFirstFillableLocator = async (root: Locator, selectors: string[]) => {
  return getFirstMatchedLocator(root, selectors, FILL_CANDIDATE_LIMIT, async (candidate) => {
    const box = await candidate.boundingBox();
    return !!box && box.width >= MIN_INTERACTIVE_DIMENSION_PX && box.height >= MIN_INTERACTIVE_DIMENSION_PX;
  });
};

const verifyDefinedPreviewComponent = async (page: Page, componentName: string) => {
  const contentBody = page.locator('article#content .content__body').first();
  await expect(contentBody).toBeVisible();

  const tagName = `terra-${componentName}`;
  const componentMatches = contentBody.locator(tagName);
  const componentCount = await componentMatches.count();
  if (componentCount) {
    await expect(componentMatches.first()).toBeAttached();
  }

  const preview = getVisiblePreview(page);
  const previewCount = await preview.count();
  if (previewCount) {
    await expect(preview).toBeVisible();
  }

  return previewCount ? preview : contentBody;
};

const getHorizontalOverflowPx = async (locator: Locator) => {
  return locator.evaluate((element) => {
    const target = element as HTMLElement;
    return Math.max(0, target.scrollWidth - target.clientWidth);
  });
};

const getPrimaryComponentLocator = (container: Locator, componentName: string) => {
  const componentTag = `terra-${componentName}`;
  return container.locator(componentTag).filter({ visible: true }).first();
};

const getFallbackVisibleTerraComponentLocator = (container: Locator) => {
  return container.locator('xpath=.//*[starts-with(local-name(), "terra-")]').filter({ visible: true }).first();
};

const getFallbackVisualTargetLocator = (container: Locator) => {
  return container.locator(':scope *').filter({ visible: true }).first();
};

const getFirstVisibleTarget = async (locators: Locator[]) => {
  for (const locator of locators) {
    if ((await locator.count()) > 0) {
      return locator;
    }
  }

  return null;
};

const verifyVisualResponsiveness = async (page: Page, container: Locator, componentName: string) => {
  const baseOverflowAllowance = visualOverflowAllowancePx[componentName] ?? defaultOverflowTolerancePx;
  const overflowAllowance = Math.max(0, Math.floor(baseOverflowAllowance * visualAllowanceMultiplier));

  const viewportSize = page.viewportSize();
  const viewportWidth = viewportSize?.width ?? (await page.evaluate(() => window.innerWidth));

  // Prefer the exact component host, then visible Terra descendants, then any visible fallback.
  const targetComponent = await getFirstVisibleTarget([
    getPrimaryComponentLocator(container, componentName),
    getFallbackVisibleTerraComponentLocator(container),
    getFallbackVisualTargetLocator(container),
  ]);
  const targetCount = targetComponent ? 1 : 0;
  expect(
    targetCount,
    `Expected a visible visual target (terra host or scoped fallback) in the visual test container for ${componentName}.`
  ).toBeGreaterThan(0);
  if (!targetCount || !targetComponent) {
    return;
  }

  const targetScrollOverflow = await getHorizontalOverflowPx(targetComponent);
  expect(
    targetScrollOverflow,
    `Visible component overflow for ${componentName} exceeded tolerance (${overflowAllowance}px).`
  ).toBeLessThanOrEqual(overflowAllowance);

  const box = await targetComponent.boundingBox();
  expect(box, `No visible bounding box for a component host in ${componentName} visual checks.`).not.toBeNull();
  if (!box) {
    return;
  }

  expect(
    box.width,
    `terra-${componentName} width exceeds viewport by more than ${defaultBoundsTolerancePx}px.`
  ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
  expect(
    box.x,
    `terra-${componentName} starts too far left of viewport.`
  ).toBeGreaterThanOrEqual(-defaultBoundsTolerancePx);
  expect(
    box.x + box.width,
    `terra-${componentName} extends too far right of viewport.`
  ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
};

const exerciseComponentBehavior = async (
  page: Page,
  preview: Locator,
  componentName: string
) => {
  if (!interactiveComponentNames.has(componentName)) {
    return;
  }

  const rule = componentInteractionRules[componentName];
  if (!rule) {
    return;
  }

  const root = rule.scope === 'page' ? page.locator('body') : preview;

  if (rule.action === 'fill') {
    const field = await getFirstFillableLocator(root, rule.selectors);
    expect(field, `No fillable control found for component ${componentName}`).not.toBeNull();
    if (!field) {
      return;
    }

    const value = rule.fillValue || 'mobile test';
    await field.click();
    await field.fill(value);
    await expect(field).toHaveValue(value);
    return;
  }

  const tapped = await getFirstTappableLocator(page, root, rule.selectors);
  expect(tapped, `No tappable control found for component ${componentName}`).not.toBeNull();
};

test.describe('Terra component mobile responsiveness', () => {
  test.describe.configure({ mode: 'parallel' });

  for (const componentName of componentNames) {
    test(`component ${componentName} is responsive on touch mobile`, async ({ page, isMobile }) => {
      test.skip(!isMobile, 'This suite is intended to run on a mobile device profile.');

      await page.goto(`/components/${componentName}/`, {
        waitUntil: 'domcontentloaded',
      });

      await expect(page.locator('main').first()).toBeVisible();
      await expect(page.locator('article#content')).toBeVisible();
      await expect(page.locator('h1').first()).toBeVisible();

      const preview = await verifyDefinedPreviewComponent(page, componentName);

      const pageErrors: string[] = [];
      page.on('pageerror', (error) => {
        pageErrors.push(error.message);
      });

      await page.evaluate(() => {
        window.scrollBy(0, Math.min(window.innerHeight, 320));
      });

      // Use touch gestures to more closely mirror mobile interaction before probing controls.
      await page.touchscreen.tap(24, 24);
      await page.touchscreen.tap(100, 220);

      await verifyVisualResponsiveness(page, preview, componentName);

      await exerciseComponentBehavior(page, preview, componentName);

      const isKnownLoginComponent = componentName === 'login' || componentName === 'earthdata-login';
      const unexpectedErrors = pageErrors.filter(
        (message) => !(isKnownLoginComponent && /setImmediate/i.test(message))
      );
      expect(unexpectedErrors).toEqual([]);
    });
  }
});
