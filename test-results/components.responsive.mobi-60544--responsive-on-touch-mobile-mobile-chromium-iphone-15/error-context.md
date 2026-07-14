# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: components.responsive.mobile.spec.ts >> Terra component mobile responsiveness >> component date-range-slider is responsive on touch mobile
- Location: tests\mobile\components.responsive.mobile.spec.ts:425:5

# Error details

```
Error: Visible component overflow for date-range-slider exceeded tolerance (2px).

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 2
Received:    63
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2]:
    - /url: "#main-content"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - img [ref=e8]
      - generic [ref=e22]: Terra UI
    - generic [ref=e24]:
      - generic [ref=e26]:
        - button "About" [ref=e28] [cursor=pointer]:
          - button "About" [ref=e29]:
            - generic: About
            - img [ref=e32]
        - menu:
          - generic:
            - menuitem "Project Overview":
              - generic:
                - generic:
                  - link "Project Overview":
                    - /url: /
            - menuitem "Contributing":
              - generic:
                - generic:
                  - link "Contributing":
                    - /url: /about/contributing
      - generic [ref=e35]:
        - button "Getting Started" [ref=e37] [cursor=pointer]:
          - button "Getting Started" [ref=e38]:
            - generic: Getting Started
            - img [ref=e41]
        - menu:
          - generic:
            - menuitem "Installation":
              - generic:
                - generic:
                  - link "Installation":
                    - /url: /getting-started/installation
            - menuitem "Usage":
              - generic:
                - generic:
                  - link "Usage":
                    - /url: /getting-started/usage
            - menuitem "Themes":
              - generic:
                - generic:
                  - link "Themes":
                    - /url: /getting-started/themes
            - menuitem "Customizing":
              - generic:
                - generic:
                  - link "Customizing":
                    - /url: /getting-started/customizing
      - generic [ref=e44]:
        - button "Frameworks" [ref=e46] [cursor=pointer]:
          - button "Frameworks" [ref=e47]:
            - generic: Frameworks
            - img [ref=e50]
        - menu:
          - generic:
            - menuitem "React":
              - generic:
                - generic:
                  - link "React":
                    - /url: /frameworks/react
            - menuitem "Vue":
              - generic:
                - generic:
                  - link "Vue":
                    - /url: /frameworks/vue
            - menuitem "Angular":
              - generic:
                - generic:
                  - link "Angular":
                    - /url: /frameworks/angular
      - button "Search" [ref=e52] [cursor=pointer]:
        - img [ref=e54]
      - link "GitHub" [ref=e56]:
        - /url: https://github.com/nasa/terra-ui-components
        - img "GitHub" [ref=e57]
      - generic [ref=e60]:
        - button "Press \\ to toggle" [ref=e62] [cursor=pointer]:
          - button "Press \\ to toggle" [ref=e63]:
            - generic:
              - generic:
                - img
            - img [ref=e66]
        - menu:
          - generic:
            - menuitemcheckbox "Light":
              - generic:
                - generic: Light
            - menuitemcheckbox "Dark":
              - generic:
                - generic: Dark
            - separator
            - menuitemcheckbox "System" [checked]:
              - generic:
                - generic: System
  - main [ref=e69]:
    - article [ref=e70]:
      - list [ref=e72]:
        - listitem [ref=e73]:
          - link "Date Range Slider" [ref=e74]:
            - /url: "#"
        - listitem [ref=e75]:
          - link "Examples" [ref=e76]:
            - /url: "#examples"
        - listitem [ref=e77]:
          - link "Importing" [ref=e78]:
            - /url: "#importing"
        - listitem [ref=e79]:
          - link "Slots" [ref=e80]:
            - /url: "#slots"
        - listitem [ref=e81]:
          - link "Properties" [ref=e82]:
            - /url: "#properties"
        - listitem [ref=e83]:
          - link "Custom Properties" [ref=e84]:
            - /url: "#custom-properties"
        - listitem [ref=e85]:
          - link "Parts" [ref=e86]:
            - /url: "#parts"
      - generic [ref=e87]:
        - generic [ref=e88]:
          - heading "Date Range Slider" [level=1] [ref=e89]
          - code [ref=e91]: <terra-date-range-slider> | TerraDateRangeSlider
          - generic [ref=e92]:
            - status [ref=e94]:
              - generic: Since 1.0
            - status [ref=e96]:
              - generic: stable
        - paragraph [ref=e97]: Short summary of the component’s intended use.
        - generic [ref=e98]:
          - generic [ref=e103]:
            - generic [ref=e104]:
              - generic:
                - slider [ref=e107]
                - generic [ref=e109]: 1986-03-31 19:00
              - generic:
                - slider [ref=e110]
                - generic [ref=e112]: 2021-01-02 18:59
            - generic [ref=e113]:
              - generic [ref=e115]: 1980-12-31 19:00
              - generic [ref=e117]: 2024-01-01 18:59
          - generic [ref=e118]:
            - button "Source" [ref=e119] [cursor=pointer]:
              - text: Source
              - img [ref=e120]
            - button "Edit on CodePen" [ref=e122] [cursor=pointer]:
              - img [ref=e123]
        - heading "ExamplesDirect link to \"Examples\"" [level=2] [ref=e125]:
          - text: Examples
          - link "Direct link to \"Examples\"" [ref=e126]:
            - /url: "#examples"
            - text: "#"
        - heading "First ExampleDirect link to \"First Example\"" [level=3] [ref=e127]:
          - text: First Example
          - link "Direct link to \"First Example\"" [ref=e128]:
            - /url: "#first-example"
            - text: "#"
        - paragraph [ref=e129]: TODO
        - heading "Second ExampleDirect link to \"Second Example\"" [level=3] [ref=e130]:
          - text: Second Example
          - link "Direct link to \"Second Example\"" [ref=e131]:
            - /url: "#second-example"
            - text: "#"
        - paragraph [ref=e132]: TODO
        - paragraph [ref=e133]: "[component-metadata:terra-date-range-slider]"
        - heading "ImportingDirect link to \"Importing\"" [level=2] [ref=e134]:
          - text: Importing
          - link "Direct link to \"Importing\"" [ref=e135]:
            - /url: "#importing"
            - text: "#"
        - paragraph [ref=e136]:
          - text: If you’re using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to use any of the following snippets to
          - link "cherry pick" [ref=e137]:
            - /url: /getting-started/installation#cherry-picking
          - text: this component.
        - tablist [ref=e142]:
          - generic:
            - generic:
              - tab "Script" [ref=e143]:
                - generic [ref=e144] [cursor=pointer]:
                  - generic: Script
              - tab "Import" [ref=e145]:
                - generic [ref=e146] [cursor=pointer]:
                  - generic: Import
              - tab "Bundler" [ref=e147]:
                - generic [ref=e148] [cursor=pointer]:
                  - generic: Bundler
              - tab "React" [ref=e149]:
                - generic [ref=e150] [cursor=pointer]:
                  - generic: React
        - heading "SlotsDirect link to \"Slots\"" [level=2] [ref=e151]:
          - text: Slots
          - link "Direct link to \"Slots\"" [ref=e152]:
            - /url: "#slots"
            - text: "#"
        - table [ref=e154]:
          - rowgroup [ref=e155]:
            - row "Name Description" [ref=e156]:
              - columnheader "Name" [ref=e157]
              - columnheader "Description" [ref=e158]
          - rowgroup [ref=e159]:
            - row "(default) The default slot." [ref=e160]:
              - cell "(default)" [ref=e161]
              - cell "The default slot." [ref=e162]
            - row "example An example slot." [ref=e163]:
              - cell "example" [ref=e164]:
                - code [ref=e165]: example
              - cell "An example slot." [ref=e166]
        - paragraph [ref=e167]:
          - emphasis [ref=e168]:
            - text: Learn more about
            - link "using slots" [ref=e169]:
              - /url: /getting-started/usage#slots
            - text: .
        - heading "PropertiesDirect link to \"Properties\"" [level=2] [ref=e170]:
          - text: Properties
          - link "Direct link to \"Properties\"" [ref=e171]:
            - /url: "#properties"
            - text: "#"
        - table [ref=e173]:
          - rowgroup [ref=e174]:
            - row "Name Description Reflects Type Default" [ref=e175]:
              - columnheader "Name" [ref=e176]
              - columnheader "Description" [ref=e177]
              - columnheader "Reflects" [ref=e178]
              - columnheader "Type" [ref=e179]
              - columnheader "Default" [ref=e180]
          - rowgroup [ref=e181]:
            - row "startDate start-date The start date for the time series plot. string -" [ref=e182]:
              - cell "startDate start-date" [ref=e183]:
                - code [ref=e184]: startDate
                - code [ref=e187]: start-date
              - cell "The start date for the time series plot." [ref=e188]
              - cell [ref=e189]
              - cell "string" [ref=e190]:
                - code [ref=e191]: string
              - cell "-" [ref=e192]
            - row "updateComplete A read-only promise that resolves when the component has finished updating." [ref=e193]:
              - cell "updateComplete" [ref=e194]:
                - code [ref=e195]: updateComplete
              - cell "A read-only promise that resolves when the component has finished updating." [ref=e196]:
                - text: A read-only promise that resolves when the component has
                - link "finished updating" [ref=e197]:
                  - /url: /getting-started/usage?#component-rendering-and-updating
                - text: .
              - cell [ref=e198]
              - cell [ref=e199]
              - cell [ref=e200]
        - paragraph [ref=e201]:
          - emphasis [ref=e202]:
            - text: Learn more about
            - link "attributes and properties" [ref=e203]:
              - /url: /getting-started/usage#attributes-and-properties
            - text: .
        - heading "Custom PropertiesDirect link to \"Custom Properties\"" [level=2] [ref=e204]:
          - text: Custom Properties
          - link "Direct link to \"Custom Properties\"" [ref=e205]:
            - /url: "#custom-properties"
            - text: "#"
        - table [ref=e207]:
          - rowgroup [ref=e208]:
            - row "Name Description Default" [ref=e209]:
              - columnheader "Name" [ref=e210]
              - columnheader "Description" [ref=e211]
              - columnheader "Default" [ref=e212]
          - rowgroup [ref=e213]:
            - row "--example An example CSS custom property." [ref=e214]:
              - cell "--example" [ref=e215]:
                - code [ref=e216]: "--example"
              - cell "An example CSS custom property." [ref=e217]
              - cell [ref=e218]
        - paragraph [ref=e219]:
          - emphasis [ref=e220]:
            - text: Learn more about
            - link "customizing CSS custom properties" [ref=e221]:
              - /url: /getting-started/usage#custom-properties
            - text: .
        - heading "PartsDirect link to \"Parts\"" [level=2] [ref=e222]:
          - text: Parts
          - link "Direct link to \"Parts\"" [ref=e223]:
            - /url: "#parts"
            - text: "#"
        - table [ref=e225]:
          - rowgroup [ref=e226]:
            - row "Name Description" [ref=e227]:
              - columnheader "Name" [ref=e228]
              - columnheader "Description" [ref=e229]
          - rowgroup [ref=e230]:
            - row "base The component’s base wrapper." [ref=e231]:
              - cell "base" [ref=e232]:
                - code [ref=e233]: base
              - cell "The component’s base wrapper." [ref=e234]
        - paragraph [ref=e235]:
          - emphasis [ref=e236]:
            - text: Learn more about
            - link "customizing CSS parts" [ref=e237]:
              - /url: /getting-started/customizing/#css-parts
            - text: .
```

# Test source

```ts
  265 |     for (let i = 0; i < limit; i += 1) {
  266 |       const candidate = candidates.nth(i);
  267 |       if (await predicate(candidate)) {
  268 |         return candidate;
  269 |       }
  270 |     }
  271 |   }
  272 | 
  273 |   return null;
  274 | };
  275 | 
  276 | const getFirstTappableLocator = async (page: Page, root: Locator, selectors: string[]) => {
  277 |   return getFirstMatchedLocator(root, selectors, TAP_CANDIDATE_LIMIT, (candidate) => {
  278 |     return tapCenter(page, candidate);
  279 |   });
  280 | };
  281 | 
  282 | const getFirstFillableLocator = async (root: Locator, selectors: string[]) => {
  283 |   return getFirstMatchedLocator(root, selectors, FILL_CANDIDATE_LIMIT, async (candidate) => {
  284 |     const box = await candidate.boundingBox();
  285 |     return !!box && box.width >= MIN_INTERACTIVE_DIMENSION_PX && box.height >= MIN_INTERACTIVE_DIMENSION_PX;
  286 |   });
  287 | };
  288 | 
  289 | const verifyDefinedPreviewComponent = async (page: Page, componentName: string) => {
  290 |   const contentBody = page.locator('article#content .content__body').first();
  291 |   await expect(contentBody).toBeVisible();
  292 | 
  293 |   const tagName = `terra-${componentName}`;
  294 |   const componentMatches = contentBody.locator(tagName);
  295 |   const componentCount = await componentMatches.count();
  296 |   if (componentCount) {
  297 |     await expect(componentMatches.first()).toBeAttached();
  298 |   }
  299 | 
  300 |   const preview = getVisiblePreview(page);
  301 |   const previewCount = await preview.count();
  302 |   if (previewCount) {
  303 |     await expect(preview).toBeVisible();
  304 |   }
  305 | 
  306 |   return previewCount ? preview : contentBody;
  307 | };
  308 | 
  309 | const getHorizontalOverflowPx = async (locator: Locator) => {
  310 |   return locator.evaluate((element) => {
  311 |     const target = element as HTMLElement;
  312 |     return Math.max(0, target.scrollWidth - target.clientWidth);
  313 |   });
  314 | };
  315 | 
  316 | const getPrimaryComponentLocator = (container: Locator, componentName: string) => {
  317 |   const componentTag = `terra-${componentName}`;
  318 |   return container.locator(componentTag).filter({ visible: true }).first();
  319 | };
  320 | 
  321 | const getFallbackVisibleTerraComponentLocator = (container: Locator) => {
  322 |   return container.locator('xpath=.//*[starts-with(local-name(), "terra-")]').filter({ visible: true }).first();
  323 | };
  324 | 
  325 | const getFallbackVisualTargetLocator = (container: Locator) => {
  326 |   return container.locator(':scope *').filter({ visible: true }).first();
  327 | };
  328 | 
  329 | const getFirstVisibleTarget = async (locators: Locator[]) => {
  330 |   for (const locator of locators) {
  331 |     if ((await locator.count()) > 0) {
  332 |       return locator;
  333 |     }
  334 |   }
  335 | 
  336 |   return null;
  337 | };
  338 | 
  339 | const verifyVisualResponsiveness = async (page: Page, container: Locator, componentName: string) => {
  340 |   const baseOverflowAllowance = visualOverflowAllowancePx[componentName] ?? defaultOverflowTolerancePx;
  341 |   const overflowAllowance = Math.max(0, Math.floor(baseOverflowAllowance * visualAllowanceMultiplier));
  342 | 
  343 |   const viewportSize = page.viewportSize();
  344 |   const viewportWidth = viewportSize?.width ?? (await page.evaluate(() => window.innerWidth));
  345 | 
  346 |   // Prefer the exact component host, then visible Terra descendants, then any visible fallback.
  347 |   const targetComponent = await getFirstVisibleTarget([
  348 |     getPrimaryComponentLocator(container, componentName),
  349 |     getFallbackVisibleTerraComponentLocator(container),
  350 |     getFallbackVisualTargetLocator(container),
  351 |   ]);
  352 |   const targetCount = targetComponent ? 1 : 0;
  353 |   expect(
  354 |     targetCount,
  355 |     `Expected a visible visual target (terra host or scoped fallback) in the visual test container for ${componentName}.`
  356 |   ).toBeGreaterThan(0);
  357 |   if (!targetCount || !targetComponent) {
  358 |     return;
  359 |   }
  360 | 
  361 |   const targetScrollOverflow = await getHorizontalOverflowPx(targetComponent);
  362 |   expect(
  363 |     targetScrollOverflow,
  364 |     `Visible component overflow for ${componentName} exceeded tolerance (${overflowAllowance}px).`
> 365 |   ).toBeLessThanOrEqual(overflowAllowance);
      |     ^ Error: Visible component overflow for date-range-slider exceeded tolerance (2px).
  366 | 
  367 |   const box = await targetComponent.boundingBox();
  368 |   expect(box, `No visible bounding box for a component host in ${componentName} visual checks.`).not.toBeNull();
  369 |   if (!box) {
  370 |     return;
  371 |   }
  372 | 
  373 |   expect(
  374 |     box.width,
  375 |     `terra-${componentName} width exceeds viewport by more than ${defaultBoundsTolerancePx}px.`
  376 |   ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
  377 |   expect(
  378 |     box.x,
  379 |     `terra-${componentName} starts too far left of viewport.`
  380 |   ).toBeGreaterThanOrEqual(-defaultBoundsTolerancePx);
  381 |   expect(
  382 |     box.x + box.width,
  383 |     `terra-${componentName} extends too far right of viewport.`
  384 |   ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
  385 | };
  386 | 
  387 | const exerciseComponentBehavior = async (
  388 |   page: Page,
  389 |   preview: Locator,
  390 |   componentName: string
  391 | ) => {
  392 |   if (!interactiveComponentNames.has(componentName)) {
  393 |     return;
  394 |   }
  395 | 
  396 |   const rule = componentInteractionRules[componentName];
  397 |   if (!rule) {
  398 |     return;
  399 |   }
  400 | 
  401 |   const root = rule.scope === 'page' ? page.locator('body') : preview;
  402 | 
  403 |   if (rule.action === 'fill') {
  404 |     const field = await getFirstFillableLocator(root, rule.selectors);
  405 |     expect(field, `No fillable control found for component ${componentName}`).not.toBeNull();
  406 |     if (!field) {
  407 |       return;
  408 |     }
  409 | 
  410 |     const value = rule.fillValue || 'mobile test';
  411 |     await field.click();
  412 |     await field.fill(value);
  413 |     await expect(field).toHaveValue(value);
  414 |     return;
  415 |   }
  416 | 
  417 |   const tapped = await getFirstTappableLocator(page, root, rule.selectors);
  418 |   expect(tapped, `No tappable control found for component ${componentName}`).not.toBeNull();
  419 | };
  420 | 
  421 | test.describe('Terra component mobile responsiveness', () => {
  422 |   test.describe.configure({ mode: 'parallel' });
  423 | 
  424 |   for (const componentName of componentNames) {
  425 |     test(`component ${componentName} is responsive on touch mobile`, async ({ page, isMobile }) => {
  426 |       test.skip(!isMobile, 'This suite is intended to run on a mobile device profile.');
  427 | 
  428 |       await page.goto(`/components/${componentName}/`, {
  429 |         waitUntil: 'domcontentloaded',
  430 |       });
  431 | 
  432 |       await expect(page.locator('main').first()).toBeVisible();
  433 |       await expect(page.locator('article#content')).toBeVisible();
  434 |       await expect(page.locator('h1').first()).toBeVisible();
  435 | 
  436 |       const preview = await verifyDefinedPreviewComponent(page, componentName);
  437 | 
  438 |       const pageErrors: string[] = [];
  439 |       page.on('pageerror', (error) => {
  440 |         pageErrors.push(error.message);
  441 |       });
  442 | 
  443 |       await page.evaluate(() => {
  444 |         window.scrollBy(0, Math.min(window.innerHeight, 320));
  445 |       });
  446 | 
  447 |       // Use touch gestures to more closely mirror mobile interaction before probing controls.
  448 |       await page.touchscreen.tap(24, 24);
  449 |       await page.touchscreen.tap(100, 220);
  450 | 
  451 |       await verifyVisualResponsiveness(page, preview, componentName);
  452 | 
  453 |       await exerciseComponentBehavior(page, preview, componentName);
  454 | 
  455 |       const isKnownLoginComponent = componentName === 'login' || componentName === 'earthdata-login';
  456 |       const unexpectedErrors = pageErrors.filter(
  457 |         (message) => !(isKnownLoginComponent && /setImmediate/i.test(message))
  458 |       );
  459 |       expect(unexpectedErrors).toEqual([]);
  460 |     });
  461 |   }
  462 | });
  463 | 
```