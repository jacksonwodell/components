# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: components.responsive.mobile.spec.ts >> Terra component mobile responsiveness >> component stepper is responsive on touch mobile
- Location: tests\mobile\components.responsive.mobile.spec.ts:425:5

# Error details

```
Error: Visible component overflow for stepper exceeded tolerance (2px).

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 2
Received:    44
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
          - link "Stepper" [ref=e74]:
            - /url: "#"
        - listitem [ref=e75]:
          - link "Examples" [ref=e76]:
            - /url: "#examples"
        - listitem [ref=e77]:
          - link "Usage Guidelines" [ref=e78]:
            - /url: "#usage-guidelines"
        - listitem [ref=e79]:
          - link "Importing" [ref=e80]:
            - /url: "#importing"
        - listitem [ref=e81]:
          - link "Slots" [ref=e82]:
            - /url: "#slots"
        - listitem [ref=e83]:
          - link "Properties" [ref=e84]:
            - /url: "#properties"
        - listitem [ref=e85]:
          - link "Parts" [ref=e86]:
            - /url: "#parts"
      - generic [ref=e87]:
        - generic [ref=e88]:
          - heading "Stepper" [level=1] [ref=e89]
          - code [ref=e91]: <terra-stepper> | TerraStepper
          - generic [ref=e92]:
            - status [ref=e94]:
              - generic: Since 1.0
            - status [ref=e96]:
              - generic: stable
        - paragraph [ref=e97]: Steppers display a visitor’s progress through linear workflows and experiences with multiple steps.
        - generic [ref=e98]:
          - generic [ref=e102]:
            - generic:
              - generic "Background" [ref=e103]:
                - generic [ref=e106]:
                  - generic [ref=e107]:
                    - img [ref=e109]
                    - text: Background
                  - generic [ref=e111]:
                    - generic: Curation and Production
              - generic "Contact Information" [ref=e112]:
                - generic [ref=e116]: Contact Information
              - generic "Event Details" [ref=e117]:
                - generic [ref=e121]: Event Details
              - generic "Documents" [ref=e122]:
                - generic [ref=e126]: Documents
          - generic [ref=e127]:
            - button "Source" [ref=e128] [cursor=pointer]:
              - text: Source
              - img [ref=e129]
            - button "HTML" [ref=e131] [cursor=pointer]
            - button "React" [ref=e132] [cursor=pointer]
            - button "Edit on CodePen" [ref=e133] [cursor=pointer]:
              - img [ref=e134]
        - heading "ExamplesDirect link to \"Examples\"" [level=2] [ref=e136]:
          - text: Examples
          - link "Direct link to \"Examples\"" [ref=e137]:
            - /url: "#examples"
            - text: "#"
        - heading "Default VariantDirect link to \"Default Variant\"" [level=3] [ref=e138]:
          - text: Default Variant
          - link "Direct link to \"Default Variant\"" [ref=e139]:
            - /url: "#default-variant"
            - text: "#"
        - paragraph [ref=e140]: The default stepper includes a color-coded bar with a title for each step and an optional caption. It should be used when the steps are clearly defined and different.
        - generic [ref=e141]:
          - generic [ref=e145]:
            - generic:
              - generic "Background" [ref=e146]:
                - generic [ref=e149]:
                  - generic [ref=e150]:
                    - img [ref=e152]
                    - text: Background
                  - generic [ref=e154]:
                    - generic: Curation and Production
              - generic "Contact Information" [ref=e155]:
                - generic [ref=e159]: Contact Information
              - generic "Event Details" [ref=e160]:
                - generic [ref=e164]: Event Details
              - generic "Documents" [ref=e165]:
                - generic [ref=e169]: Documents
          - generic [ref=e170]:
            - button "Source" [ref=e171] [cursor=pointer]:
              - text: Source
              - img [ref=e172]
            - button "HTML" [ref=e174] [cursor=pointer]
            - button "React" [ref=e175] [cursor=pointer]
            - button "Edit on CodePen" [ref=e176] [cursor=pointer]:
              - img [ref=e177]
        - heading "Condensed VariantDirect link to \"Condensed Variant\"" [level=3] [ref=e179]:
          - text: Condensed Variant
          - link "Direct link to \"Condensed Variant\"" [ref=e180]:
            - /url: "#condensed-variant"
            - text: "#"
        - paragraph [ref=e181]: The condensed version uses colored bars to represent each step. It can be used when space is a concern, there are many steps, or when the titles of each step aren’t descriptive (for example a quiz with numbered steps).
        - generic [ref=e182]:
          - generic [ref=e217]: Step 3 of 10
          - generic [ref=e218]:
            - button "Source" [ref=e219] [cursor=pointer]:
              - text: Source
              - img [ref=e220]
            - button "Edit on CodePen" [ref=e222] [cursor=pointer]:
              - img [ref=e223]
        - heading "Step StatesDirect link to \"Step States\"" [level=3] [ref=e225]:
          - text: Step States
          - link "Direct link to \"Step States\"" [ref=e226]:
            - /url: "#step-states"
            - text: "#"
        - paragraph [ref=e227]:
          - text: "Each step can be in one of three states:"
          - code [ref=e228]: completed
          - text: ","
          - code [ref=e229]: current
          - text: ", or"
          - code [ref=e230]: upcoming
          - text: .
        - generic [ref=e231]:
          - generic [ref=e235]:
            - generic:
              - generic "Completed" [ref=e236]:
                - generic [ref=e239]:
                  - generic [ref=e240]:
                    - img [ref=e242]
                    - text: Completed
                  - generic [ref=e244]:
                    - generic: Done
              - generic "Current" [ref=e245]:
                - generic [ref=e248]:
                  - generic [ref=e249]: Current
                  - generic [ref=e250]:
                    - generic: In Progress
              - generic "Upcoming" [ref=e251]:
                - generic [ref=e254]:
                  - generic [ref=e255]: Upcoming
                  - generic [ref=e256]:
                    - generic: Not Started
          - generic [ref=e257]:
            - button "Source" [ref=e258] [cursor=pointer]:
              - text: Source
              - img [ref=e259]
            - button "Edit on CodePen" [ref=e261] [cursor=pointer]:
              - img [ref=e262]
        - heading "With CaptionsDirect link to \"With Captions\"" [level=3] [ref=e264]:
          - text: With Captions
          - link "Direct link to \"With Captions\"" [ref=e265]:
            - /url: "#with-captions"
            - text: "#"
        - paragraph [ref=e266]: Steps can include optional captions to provide additional context.
        - generic [ref=e267]:
          - generic [ref=e271]:
            - generic:
              - generic "Background" [ref=e272]:
                - generic [ref=e275]:
                  - generic [ref=e276]:
                    - img [ref=e278]
                    - text: Background
                  - generic [ref=e280]:
                    - generic: Curation and Production
              - generic "Contact Information" [ref=e281]:
                - generic [ref=e284]:
                  - generic [ref=e285]: Contact Information
                  - generic [ref=e286]:
                    - generic: Your details
              - generic "Event Details" [ref=e287]:
                - generic [ref=e290]:
                  - generic [ref=e291]: Event Details
                  - generic [ref=e292]:
                    - generic: Event information
          - generic [ref=e293]:
            - button "Source" [ref=e294] [cursor=pointer]:
              - text: Source
              - img [ref=e295]
            - button "Edit on CodePen" [ref=e297] [cursor=pointer]:
              - img [ref=e298]
        - heading "Equal Width DistributionDirect link to \"Equal Width Distribution\"" [level=3] [ref=e300]:
          - text: Equal Width Distribution
          - link "Direct link to \"Equal Width Distribution\"" [ref=e301]:
            - /url: "#equal-width-distribution"
            - text: "#"
        - paragraph [ref=e302]: The stepper automatically distributes space evenly among all steps using flexbox. Each step takes an equal portion of the available width.
        - generic [ref=e303]:
          - generic [ref=e307]:
            - generic:
              - generic "Step 1" [ref=e308]:
                - generic [ref=e312]:
                  - img [ref=e314]
                  - text: Step 1
              - generic "Step 2" [ref=e316]:
                - generic [ref=e320]:
                  - img [ref=e322]
                  - text: Step 2
              - generic "Step 3" [ref=e324]:
                - generic [ref=e328]: Step 3
              - generic "Step 4" [ref=e329]:
                - generic [ref=e333]: Step 4
          - generic [ref=e334]:
            - button "Source" [ref=e335] [cursor=pointer]:
              - text: Source
              - img [ref=e336]
            - button "HTML" [ref=e338] [cursor=pointer]
            - button "React" [ref=e339] [cursor=pointer]
            - button "Edit on CodePen" [ref=e340] [cursor=pointer]:
              - img [ref=e341]
        - heading "Usage GuidelinesDirect link to \"Usage Guidelines\"" [level=2] [ref=e343]:
          - text: Usage Guidelines
          - link "Direct link to \"Usage Guidelines\"" [ref=e344]:
            - /url: "#usage-guidelines"
            - text: "#"
        - list [ref=e345]:
          - listitem [ref=e346]:
            - strong [ref=e347]: Step titles
            - text: should be as short as possible, preferably 1–2 words
          - listitem [ref=e348]: The titles included in the stepper are not meant to serve as the main page header, which can appear below the stepper
          - listitem [ref=e349]: The stepper is not meant to be interactive. Links or buttons to navigate between steps can be included separately if necessary
          - listitem [ref=e350]: Consider another approach for long forms with conditional logic (if the number of steps might change due to user input), or experiences with nonlinear progression (where steps might be completed in any order)
          - listitem [ref=e351]: If a form or process has fewer than three sections, don’t use a stepper
          - listitem [ref=e352]: The condensed stepper style is also the mobile version of the default stepper
        - paragraph [ref=e353]: "[component-metadata:terra-stepper]"
        - heading "ImportingDirect link to \"Importing\"" [level=2] [ref=e354]:
          - text: Importing
          - link "Direct link to \"Importing\"" [ref=e355]:
            - /url: "#importing"
            - text: "#"
        - paragraph [ref=e356]:
          - text: If you’re using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to use any of the following snippets to
          - link "cherry pick" [ref=e357]:
            - /url: /getting-started/installation#cherry-picking
          - text: this component.
        - tablist [ref=e362]:
          - generic:
            - generic:
              - tab "Script" [ref=e363]:
                - generic [ref=e364] [cursor=pointer]:
                  - generic: Script
              - tab "Import" [ref=e365]:
                - generic [ref=e366] [cursor=pointer]:
                  - generic: Import
              - tab "Bundler" [ref=e367]:
                - generic [ref=e368] [cursor=pointer]:
                  - generic: Bundler
              - tab "React" [ref=e369]:
                - generic [ref=e370] [cursor=pointer]:
                  - generic: React
        - heading "SlotsDirect link to \"Slots\"" [level=2] [ref=e371]:
          - text: Slots
          - link "Direct link to \"Slots\"" [ref=e372]:
            - /url: "#slots"
            - text: "#"
        - table [ref=e374]:
          - rowgroup [ref=e375]:
            - row "Name Description" [ref=e376]:
              - columnheader "Name" [ref=e377]
              - columnheader "Description" [ref=e378]
          - rowgroup [ref=e379]:
            - row "(default) One or more <terra-stepper-step> elements to display in the stepper." [ref=e380]:
              - cell "(default)" [ref=e381]
              - cell "One or more <terra-stepper-step> elements to display in the stepper." [ref=e382]:
                - text: One or more
                - code [ref=e383]: <terra-stepper-step>
                - text: elements to display in the stepper.
        - paragraph [ref=e384]:
          - emphasis [ref=e385]:
            - text: Learn more about
            - link "using slots" [ref=e386]:
              - /url: /getting-started/usage#slots
            - text: .
        - heading "PropertiesDirect link to \"Properties\"" [level=2] [ref=e387]:
          - text: Properties
          - link "Direct link to \"Properties\"" [ref=e388]:
            - /url: "#properties"
            - text: "#"
        - table [ref=e390]:
          - rowgroup [ref=e391]:
            - row "Name Description Reflects Type Default" [ref=e392]:
              - columnheader "Name" [ref=e393]
              - columnheader "Description" [ref=e394]
              - columnheader "Reflects" [ref=e395]
              - columnheader "Type" [ref=e396]
              - columnheader "Default" [ref=e397]
          - rowgroup [ref=e398]:
            - row "variant The stepper’s variant. The default variant includes titles and optional captions for each step. The condensed variant uses colored bars to represent each step and is useful when space is a concern. yes 'default' | 'condensed' 'default'" [ref=e399]:
              - cell "variant" [ref=e400]:
                - code [ref=e401]: variant
              - cell "The stepper’s variant. The default variant includes titles and optional captions for each step. The condensed variant uses colored bars to represent each step and is useful when space is a concern." [ref=e402]
              - cell "yes" [ref=e403]:
                - img "yes" [ref=e404]:
                  - img [ref=e405]
              - cell "'default' | 'condensed'" [ref=e407]:
                - code [ref=e408]: "'default' | 'condensed'"
              - cell "'default'" [ref=e409]:
                - code [ref=e410]: "'default'"
            - row "updateComplete A read-only promise that resolves when the component has finished updating." [ref=e411]:
              - cell "updateComplete" [ref=e412]:
                - code [ref=e413]: updateComplete
              - cell "A read-only promise that resolves when the component has finished updating." [ref=e414]:
                - text: A read-only promise that resolves when the component has
                - link "finished updating" [ref=e415]:
                  - /url: /getting-started/usage?#component-rendering-and-updating
                - text: .
              - cell [ref=e416]
              - cell [ref=e417]
              - cell [ref=e418]
        - paragraph [ref=e419]:
          - emphasis [ref=e420]:
            - text: Learn more about
            - link "attributes and properties" [ref=e421]:
              - /url: /getting-started/usage#attributes-and-properties
            - text: .
        - heading "PartsDirect link to \"Parts\"" [level=2] [ref=e422]:
          - text: Parts
          - link "Direct link to \"Parts\"" [ref=e423]:
            - /url: "#parts"
            - text: "#"
        - table [ref=e425]:
          - rowgroup [ref=e426]:
            - row "Name Description" [ref=e427]:
              - columnheader "Name" [ref=e428]
              - columnheader "Description" [ref=e429]
          - rowgroup [ref=e430]:
            - row "base The component’s base wrapper." [ref=e431]:
              - cell "base" [ref=e432]:
                - code [ref=e433]: base
              - cell "The component’s base wrapper." [ref=e434]
        - paragraph [ref=e435]:
          - emphasis [ref=e436]:
            - text: Learn more about
            - link "customizing CSS parts" [ref=e437]:
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
      |     ^ Error: Visible component overflow for stepper exceeded tolerance (2px).
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