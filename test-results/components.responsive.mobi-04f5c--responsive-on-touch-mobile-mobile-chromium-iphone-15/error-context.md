# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: components.responsive.mobile.spec.ts >> Terra component mobile responsiveness >> component pagination is responsive on touch mobile
- Location: tests\mobile\components.responsive.mobile.spec.ts:425:5

# Error details

```
Error: Visible component overflow for pagination exceeded tolerance (2px).

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 2
Received:    8
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
          - link "Pagination" [ref=e74]:
            - /url: "#"
        - listitem [ref=e75]:
          - link "Usage" [ref=e76]:
            - /url: "#usage"
        - listitem [ref=e77]:
          - link "Variants" [ref=e78]:
            - /url: "#variants"
        - listitem [ref=e79]:
          - link "Examples" [ref=e80]:
            - /url: "#examples"
        - listitem [ref=e81]:
          - link "Events" [ref=e82]:
            - /url: "#events"
        - listitem [ref=e83]:
          - link "Customization" [ref=e84]:
            - /url: "#customization"
        - listitem [ref=e85]:
          - link "Importing" [ref=e86]:
            - /url: "#importing"
        - listitem [ref=e87]:
          - link "Slots" [ref=e88]:
            - /url: "#slots"
        - listitem [ref=e89]:
          - link "Properties" [ref=e90]:
            - /url: "#properties"
        - listitem [ref=e91]:
          - link "Events" [ref=e92]:
            - /url: "#events-1"
        - listitem [ref=e93]:
          - link "Custom Properties" [ref=e94]:
            - /url: "#custom-properties"
        - listitem [ref=e95]:
          - link "Parts" [ref=e96]:
            - /url: "#parts"
        - listitem [ref=e97]:
          - link "Dependencies" [ref=e98]:
            - /url: "#dependencies"
      - generic [ref=e99]:
        - generic [ref=e100]:
          - heading "Pagination" [level=1] [ref=e101]
          - code [ref=e103]: <terra-pagination> | TerraPagination
          - generic [ref=e104]:
            - status [ref=e106]:
              - generic: Since 1.0
            - status [ref=e108]:
              - generic: stable
        - paragraph [ref=e109]: Pagination is a navigational element that allows users to navigate between content or pages.
        - heading "UsageDirect link to \"Usage\"" [level=2] [ref=e110]:
          - text: Usage
          - link "Direct link to \"Usage\"" [ref=e111]:
            - /url: "#usage"
            - text: "#"
        - paragraph [ref=e112]: Pagination is used when you cannot fit the entire content on the screen. Pagination navigates through content but keeps the user on the same page. In some instances, users can choose how much content is displayed per page through a filter. This will ultimately increase or decrease the total number of pages.
        - heading "VariantsDirect link to \"Variants\"" [level=2] [ref=e113]:
          - text: Variants
          - link "Direct link to \"Variants\"" [ref=e114]:
            - /url: "#variants"
            - text: "#"
        - heading "Centered PaginationDirect link to \"Centered Pagination\"" [level=3] [ref=e115]:
          - text: Centered Pagination
          - link "Direct link to \"Centered Pagination\"" [ref=e116]:
            - /url: "#centered-pagination"
            - text: "#"
        - paragraph [ref=e117]: Centered pagination displays the full pagination controls in the center of the container. This is useful when pagination is the primary focus.
        - generic [ref=e118]:
          - navigation [ref=e123]:
            - button "Previous page" [ref=e124] [cursor=pointer]:
              - img [ref=e126]
            - button "Page 1" [ref=e128] [cursor=pointer]: "1"
            - generic [ref=e129]: …
            - button "Page 9" [ref=e130] [cursor=pointer]: "9"
            - button "Page 10" [disabled] [ref=e131]: "10"
            - button "Page 11" [ref=e132] [cursor=pointer]: "11"
            - generic [ref=e133]: …
            - button "Page 20" [ref=e134] [cursor=pointer]: "20"
            - button "Next page" [ref=e135] [cursor=pointer]:
              - img [ref=e137]
          - generic [ref=e139]:
            - button "Source" [ref=e140] [cursor=pointer]:
              - text: Source
              - img [ref=e141]
            - button "HTML" [ref=e143] [cursor=pointer]
            - button "React" [ref=e144] [cursor=pointer]
            - button "Edit on CodePen" [ref=e145] [cursor=pointer]:
              - img [ref=e146]
        - heading "Left-Aligned Pagination with SlotDirect link to \"Left-Aligned Pagination with Slot\"" [level=3] [ref=e148]:
          - text: Left-Aligned Pagination with Slot
          - link "Direct link to \"Left-Aligned Pagination with Slot\"" [ref=e149]:
            - /url: "#left-aligned-pagination-with-slot"
            - text: "#"
        - paragraph [ref=e150]: Left-aligned pagination displays pagination controls on the left and provides a slot on the right for additional content (such as a rows per page dropdown).
        - generic [ref=e151]:
          - generic [ref=e155]:
            - navigation [ref=e156]:
              - button "Previous page" [ref=e157] [cursor=pointer]:
                - img [ref=e159]
              - button "Page 1" [ref=e161] [cursor=pointer]: "1"
              - generic [ref=e162]: …
              - button "Page 4" [ref=e163] [cursor=pointer]: "4"
              - button "Page 5" [disabled] [ref=e164]: "5"
              - button "Page 6" [ref=e165] [cursor=pointer]: "6"
              - generic [ref=e166]: …
              - button "Page 20" [ref=e167] [cursor=pointer]: "20"
              - button "Next page" [ref=e168] [cursor=pointer]:
                - img [ref=e170]
            - generic [ref=e174]:
              - button "10 per page" [ref=e176] [cursor=pointer]:
                - button "10 per page" [ref=e177]:
                  - generic: 10 per page
                  - img [ref=e180]
              - menu:
                - generic:
                  - menuitem "10 per page":
                    - generic:
                      - generic: 10 per page
                  - menuitem "25 per page":
                    - generic:
                      - generic: 25 per page
                  - menuitem "50 per page":
                    - generic:
                      - generic: 50 per page
          - generic [ref=e182]:
            - button "Source" [ref=e183] [cursor=pointer]:
              - text: Source
              - img [ref=e184]
            - button "HTML" [ref=e186] [cursor=pointer]
            - button "React" [ref=e187] [cursor=pointer]
            - button "Edit on CodePen" [ref=e188] [cursor=pointer]:
              - img [ref=e189]
        - heading "Prev/Next OnlyDirect link to \"Prev/Next Only\"" [level=3] [ref=e191]:
          - text: Prev/Next Only
          - link "Direct link to \"Prev/Next Only\"" [ref=e192]:
            - /url: "#prevnext-only"
            - text: "#"
        - paragraph [ref=e193]: For mobile pagination where the number of pages doesn’t exceed 5 pages, a simplified pagination can be used without numbers.
        - generic [ref=e194]:
          - navigation [ref=e199]:
            - button "Previous page" [ref=e200] [cursor=pointer]:
              - img [ref=e202]
              - generic [ref=e204]: Previous
            - button "Next page" [ref=e205] [cursor=pointer]:
              - generic [ref=e206]: Next
              - img [ref=e208]
          - generic [ref=e210]:
            - button "Source" [ref=e211] [cursor=pointer]:
              - text: Source
              - img [ref=e212]
            - button "HTML" [ref=e214] [cursor=pointer]
            - button "React" [ref=e215] [cursor=pointer]
            - button "Edit on CodePen" [ref=e216] [cursor=pointer]:
              - img [ref=e217]
        - heading "ExamplesDirect link to \"Examples\"" [level=2] [ref=e219]:
          - text: Examples
          - link "Direct link to \"Examples\"" [ref=e220]:
            - /url: "#examples"
            - text: "#"
        - heading "First PageDirect link to \"First Page\"" [level=3] [ref=e221]:
          - text: First Page
          - link "Direct link to \"First Page\"" [ref=e222]:
            - /url: "#first-page"
            - text: "#"
        - generic [ref=e223]:
          - navigation [ref=e228]:
            - button "Previous page" [disabled] [ref=e229]:
              - img [ref=e231]
            - button "Page 1" [disabled] [ref=e233]: "1"
            - button "Page 2" [ref=e234] [cursor=pointer]: "2"
            - button "Page 3" [ref=e235] [cursor=pointer]: "3"
            - button "Page 4" [ref=e236] [cursor=pointer]: "4"
            - button "Page 5" [ref=e237] [cursor=pointer]: "5"
            - generic [ref=e238]: …
            - button "Page 20" [ref=e239] [cursor=pointer]: "20"
            - button "Next page" [ref=e240] [cursor=pointer]:
              - img [ref=e242]
          - generic [ref=e244]:
            - button "Source" [ref=e245] [cursor=pointer]:
              - text: Source
              - img [ref=e246]
            - button "Edit on CodePen" [ref=e248] [cursor=pointer]:
              - img [ref=e249]
        - heading "Middle PageDirect link to \"Middle Page\"" [level=3] [ref=e251]:
          - text: Middle Page
          - link "Direct link to \"Middle Page\"" [ref=e252]:
            - /url: "#middle-page"
            - text: "#"
        - generic [ref=e253]:
          - navigation [ref=e258]:
            - button "Previous page" [ref=e259] [cursor=pointer]:
              - img [ref=e261]
            - button "Page 1" [ref=e263] [cursor=pointer]: "1"
            - generic [ref=e264]: …
            - button "Page 9" [ref=e265] [cursor=pointer]: "9"
            - button "Page 10" [disabled] [ref=e266]: "10"
            - button "Page 11" [ref=e267] [cursor=pointer]: "11"
            - generic [ref=e268]: …
            - button "Page 20" [ref=e269] [cursor=pointer]: "20"
            - button "Next page" [ref=e270] [cursor=pointer]:
              - img [ref=e272]
          - generic [ref=e274]:
            - button "Source" [ref=e275] [cursor=pointer]:
              - text: Source
              - img [ref=e276]
            - button "Edit on CodePen" [ref=e278] [cursor=pointer]:
              - img [ref=e279]
        - heading "Last PageDirect link to \"Last Page\"" [level=3] [ref=e281]:
          - text: Last Page
          - link "Direct link to \"Last Page\"" [ref=e282]:
            - /url: "#last-page"
            - text: "#"
        - generic [ref=e283]:
          - navigation [ref=e288]:
            - button "Previous page" [ref=e289] [cursor=pointer]:
              - img [ref=e291]
            - button "Page 1" [ref=e293] [cursor=pointer]: "1"
            - generic [ref=e294]: …
            - button "Page 16" [ref=e295] [cursor=pointer]: "16"
            - button "Page 17" [ref=e296] [cursor=pointer]: "17"
            - button "Page 18" [ref=e297] [cursor=pointer]: "18"
            - button "Page 19" [ref=e298] [cursor=pointer]: "19"
            - button "Page 20" [disabled] [ref=e299]: "20"
            - button "Next page" [disabled] [ref=e300]:
              - img [ref=e302]
          - generic [ref=e304]:
            - button "Source" [ref=e305] [cursor=pointer]:
              - text: Source
              - img [ref=e306]
            - button "Edit on CodePen" [ref=e308] [cursor=pointer]:
              - img [ref=e309]
        - heading "Many Pages (with Ellipsis)Direct link to \"Many Pages (with Ellipsis)\"" [level=3] [ref=e311]:
          - text: Many Pages (with Ellipsis)
          - link "Direct link to \"Many Pages (with Ellipsis)\"" [ref=e312]:
            - /url: "#many-pages-with-ellipsis"
            - text: "#"
        - paragraph [ref=e313]: When there are many pages, ellipsis are shown to indicate skipped pages.
        - generic [ref=e314]:
          - navigation [ref=e319]:
            - button "Previous page" [ref=e320] [cursor=pointer]:
              - img [ref=e322]
            - button "Page 1" [ref=e324] [cursor=pointer]: "1"
            - generic [ref=e325]: …
            - button "Page 49" [ref=e326] [cursor=pointer]: "49"
            - button "Page 50" [disabled] [ref=e327]: "50"
            - button "Page 51" [ref=e328] [cursor=pointer]: "51"
            - generic [ref=e329]: …
            - button "Page 100" [ref=e330] [cursor=pointer]: "100"
            - button "Next page" [ref=e331] [cursor=pointer]:
              - img [ref=e333]
          - generic [ref=e335]:
            - button "Source" [ref=e336] [cursor=pointer]:
              - text: Source
              - img [ref=e337]
            - button "Edit on CodePen" [ref=e339] [cursor=pointer]:
              - img [ref=e340]
        - heading "Few Pages (No Ellipsis)Direct link to \"Few Pages (No Ellipsis)\"" [level=3] [ref=e342]:
          - text: Few Pages (No Ellipsis)
          - link "Direct link to \"Few Pages (No Ellipsis)\"" [ref=e343]:
            - /url: "#few-pages-no-ellipsis"
            - text: "#"
        - paragraph [ref=e344]: When there are 7 or fewer pages, all page numbers are shown.
        - generic [ref=e345]:
          - navigation [ref=e350]:
            - button "Previous page" [ref=e351] [cursor=pointer]:
              - img [ref=e353]
            - button "Page 1" [ref=e355] [cursor=pointer]: "1"
            - button "Page 2" [ref=e356] [cursor=pointer]: "2"
            - button "Page 3" [disabled] [ref=e357]: "3"
            - button "Page 4" [ref=e358] [cursor=pointer]: "4"
            - button "Page 5" [ref=e359] [cursor=pointer]: "5"
            - button "Page 6" [ref=e360] [cursor=pointer]: "6"
            - button "Page 7" [ref=e361] [cursor=pointer]: "7"
            - button "Next page" [ref=e362] [cursor=pointer]:
              - img [ref=e364]
          - generic [ref=e366]:
            - button "Source" [ref=e367] [cursor=pointer]:
              - text: Source
              - img [ref=e368]
            - button "Edit on CodePen" [ref=e370] [cursor=pointer]:
              - img [ref=e371]
        - heading "EventsDirect link to \"Events\"" [level=2] [ref=e373]:
          - text: Events
          - link "Direct link to \"Events\"" [ref=e374]:
            - /url: "#events"
            - text: "#"
        - paragraph [ref=e375]:
          - text: Listen for the
          - code [ref=e376]: terra-page-change
          - text: "event to handle page changes:"
        - generic [ref=e377]:
          - navigation [ref=e382]:
            - button "Previous page" [ref=e383] [cursor=pointer]:
              - img [ref=e385]
            - button "Page 1" [ref=e387] [cursor=pointer]: "1"
            - generic [ref=e388]: …
            - button "Page 4" [ref=e389] [cursor=pointer]: "4"
            - button "Page 5" [disabled] [ref=e390]: "5"
            - button "Page 6" [ref=e391] [cursor=pointer]: "6"
            - generic [ref=e392]: …
            - button "Page 20" [ref=e393] [cursor=pointer]: "20"
            - button "Next page" [ref=e394] [cursor=pointer]:
              - img [ref=e396]
          - generic [ref=e398]:
            - button "Source" [ref=e399] [cursor=pointer]:
              - text: Source
              - img [ref=e400]
            - button "HTML" [ref=e402] [cursor=pointer]
            - button "React" [ref=e403] [cursor=pointer]
            - button "Edit on CodePen" [ref=e404] [cursor=pointer]:
              - img [ref=e405]
        - heading "CustomizationDirect link to \"Customization\"" [level=2] [ref=e407]:
          - text: Customization
          - link "Direct link to \"Customization\"" [ref=e408]:
            - /url: "#customization"
            - text: "#"
        - paragraph [ref=e409]: "You can customize pagination appearance using CSS custom properties:"
        - generic [ref=e410]:
          - code [ref=e411]: "terra-pagination { --terra-pagination-button-color: var(--terra-color-carbon-90); --terra-pagination-button-background-color: var(--terra-color-spacesuit-white); --terra-pagination-button-border-color: var(--terra-color-carbon-20); --terra-pagination-button-color-current: var(--terra-color-spacesuit-white); --terra-pagination-button-background-color-current: var(--terra-color-nasa-blue); }"
          - button [ref=e412] [cursor=pointer]:
            - button [ref=e413]:
              - generic:
                - generic:
                  - generic:
                    - img
        - heading "Design TokensDirect link to \"Design Tokens\"" [level=3] [ref=e414]:
          - text: Design Tokens
          - link "Direct link to \"Design Tokens\"" [ref=e415]:
            - /url: "#design-tokens"
            - text: "#"
        - paragraph [ref=e416]: "The following design tokens are available for customization:"
        - list [ref=e417]:
          - listitem [ref=e418]:
            - code [ref=e419]: "--terra-pagination-button-color"
            - text: ": Text color of page buttons (default:"
            - code [ref=e420]: "--terra-color-carbon-90"
            - text: in light mode,
            - code [ref=e421]: "--terra-color-carbon-60"
            - text: in dark mode)
          - listitem [ref=e422]:
            - code [ref=e423]: "--terra-pagination-button-background-color"
            - text: ": Background color of page buttons (default:"
            - code [ref=e424]: "--terra-color-spacesuit-white"
            - text: in light mode,
            - code [ref=e425]: "--terra-color-carbon-10"
            - text: in dark mode)
          - listitem [ref=e426]:
            - code [ref=e427]: "--terra-pagination-button-border-color"
            - text: ": Border color of page buttons (default:"
            - code [ref=e428]: "--terra-color-carbon-20"
            - text: )
          - listitem [ref=e429]:
            - code [ref=e430]: "--terra-pagination-button-color-hover"
            - text: ": Text color of page buttons on hover (default:"
            - code [ref=e431]: "--terra-color-carbon-90"
            - text: in light mode,
            - code [ref=e432]: "--terra-color-carbon-80"
            - text: in dark mode)
          - listitem [ref=e433]:
            - code [ref=e434]: "--terra-pagination-button-background-color-hover"
            - text: ": Background color of page buttons on hover (default:"
            - code [ref=e435]: "--terra-color-carbon-5"
            - text: )
          - listitem [ref=e436]:
            - code [ref=e437]: "--terra-pagination-button-border-color-hover"
            - text: ": Border color of page buttons on hover (default:"
            - code [ref=e438]: "--terra-color-carbon-30"
            - text: )
          - listitem [ref=e439]:
            - code [ref=e440]: "--terra-pagination-button-color-current"
            - text: ": Text color of the current page button (default:"
            - code [ref=e441]: "--terra-color-spacesuit-white"
            - text: )
          - listitem [ref=e442]:
            - code [ref=e443]: "--terra-pagination-button-background-color-current"
            - text: ": Background color of the current page button (default:"
            - code [ref=e444]: "--terra-color-nasa-blue"
            - text: in light mode,
            - code [ref=e445]: "--terra-color-nasa-blue-tint"
            - text: in dark mode)
          - listitem [ref=e446]:
            - code [ref=e447]: "--terra-pagination-button-border-color-current"
            - text: ": Border color of the current page button (default:"
            - code [ref=e448]: "--terra-color-nasa-blue"
            - text: in light mode,
            - code [ref=e449]: "--terra-color-nasa-blue-tint"
            - text: in dark mode)
        - paragraph [ref=e450]: All tokens automatically adapt to dark mode when dark mode is active.
        - paragraph [ref=e451]: "[component-metadata:terra-pagination]"
        - heading "ImportingDirect link to \"Importing\"" [level=2] [ref=e452]:
          - text: Importing
          - link "Direct link to \"Importing\"" [ref=e453]:
            - /url: "#importing"
            - text: "#"
        - paragraph [ref=e454]:
          - text: If you’re using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to use any of the following snippets to
          - link "cherry pick" [ref=e455]:
            - /url: /getting-started/installation#cherry-picking
          - text: this component.
        - tablist [ref=e460]:
          - generic:
            - generic:
              - tab "Script" [ref=e461]:
                - generic [ref=e462] [cursor=pointer]:
                  - generic: Script
              - tab "Import" [ref=e463]:
                - generic [ref=e464] [cursor=pointer]:
                  - generic: Import
              - tab "Bundler" [ref=e465]:
                - generic [ref=e466] [cursor=pointer]:
                  - generic: Bundler
              - tab "React" [ref=e467]:
                - generic [ref=e468] [cursor=pointer]:
                  - generic: React
        - heading "SlotsDirect link to \"Slots\"" [level=2] [ref=e469]:
          - text: Slots
          - link "Direct link to \"Slots\"" [ref=e470]:
            - /url: "#slots"
            - text: "#"
        - table [ref=e472]:
          - rowgroup [ref=e473]:
            - row "Name Description" [ref=e474]:
              - columnheader "Name" [ref=e475]
              - columnheader "Description" [ref=e476]
          - rowgroup [ref=e477]:
            - row "(default) Content to display on the right side (e.g., rows per page dropdown). Only visible when variant is “left”." [ref=e478]:
              - cell "(default)" [ref=e479]
              - cell "Content to display on the right side (e.g., rows per page dropdown). Only visible when variant is “left”." [ref=e480]
        - paragraph [ref=e481]:
          - emphasis [ref=e482]:
            - text: Learn more about
            - link "using slots" [ref=e483]:
              - /url: /getting-started/usage#slots
            - text: .
        - heading "PropertiesDirect link to \"Properties\"" [level=2] [ref=e484]:
          - text: Properties
          - link "Direct link to \"Properties\"" [ref=e485]:
            - /url: "#properties"
            - text: "#"
        - table [ref=e487]:
          - rowgroup [ref=e488]:
            - row "Name Description Reflects Type Default" [ref=e489]:
              - columnheader "Name" [ref=e490]
              - columnheader "Description" [ref=e491]
              - columnheader "Reflects" [ref=e492]
              - columnheader "Type" [ref=e493]
              - columnheader "Default" [ref=e494]
          - rowgroup [ref=e495]:
            - row "current The current page number (1-indexed). number 1" [ref=e496]:
              - cell "current" [ref=e497]:
                - code [ref=e498]: current
              - cell "The current page number (1-indexed)." [ref=e499]
              - cell [ref=e500]
              - cell "number" [ref=e501]:
                - code [ref=e502]: number
              - cell "1" [ref=e503]:
                - code [ref=e504]: "1"
            - row "total The total number of pages. number 1" [ref=e505]:
              - cell "total" [ref=e506]:
                - code [ref=e507]: total
              - cell "The total number of pages." [ref=e508]
              - cell [ref=e509]
              - cell "number" [ref=e510]:
                - code [ref=e511]: number
              - cell "1" [ref=e512]:
                - code [ref=e513]: "1"
            - row "variant The pagination variant. yes 'full' | 'simple' 'full'" [ref=e514]:
              - cell "variant" [ref=e515]:
                - code [ref=e516]: variant
              - cell "The pagination variant." [ref=e517]
              - cell "yes" [ref=e518]:
                - img "yes" [ref=e519]:
                  - img [ref=e520]
              - cell "'full' | 'simple'" [ref=e522]:
                - code [ref=e523]: "'full' | 'simple'"
              - cell "'full'" [ref=e524]:
                - code [ref=e525]: "'full'"
            - row "centered Whether the pagination is centered. boolean false" [ref=e526]:
              - cell "centered" [ref=e527]:
                - code [ref=e528]: centered
              - cell "Whether the pagination is centered." [ref=e529]
              - cell [ref=e530]
              - cell "boolean" [ref=e531]:
                - code [ref=e532]: boolean
              - cell "false" [ref=e533]:
                - code [ref=e534]: "false"
            - row "updateComplete A read-only promise that resolves when the component has finished updating." [ref=e535]:
              - cell "updateComplete" [ref=e536]:
                - code [ref=e537]: updateComplete
              - cell "A read-only promise that resolves when the component has finished updating." [ref=e538]:
                - text: A read-only promise that resolves when the component has
                - link "finished updating" [ref=e539]:
                  - /url: /getting-started/usage?#component-rendering-and-updating
                - text: .
              - cell [ref=e540]
              - cell [ref=e541]
              - cell [ref=e542]
        - paragraph [ref=e543]:
          - emphasis [ref=e544]:
            - text: Learn more about
            - link "attributes and properties" [ref=e545]:
              - /url: /getting-started/usage#attributes-and-properties
            - text: .
        - heading "EventsDirect link to \"Events\"" [level=2] [ref=e546]:
          - text: Events
          - link "Direct link to \"Events\"" [ref=e547]:
            - /url: "#events-1"
            - text: "#"
        - table [ref=e549]:
          - rowgroup [ref=e550]:
            - row "Name Description Event Detail" [ref=e551]:
              - columnheader "Name" [ref=e552]
              - columnheader "Description" [ref=e553]
              - columnheader "Event Detail" [ref=e554]
          - rowgroup [ref=e555]:
            - row "terra-page-change Emitted when the page changes. -" [ref=e556]:
              - cell "terra-page-change" [ref=e557]:
                - code [ref=e558]: terra-page-change
              - cell "Emitted when the page changes." [ref=e559]
              - cell "-" [ref=e560]
        - paragraph [ref=e561]:
          - emphasis [ref=e562]:
            - text: Learn more about
            - link "events" [ref=e563]:
              - /url: /getting-started/usage#events
            - text: .
        - heading "Custom PropertiesDirect link to \"Custom Properties\"" [level=2] [ref=e564]:
          - text: Custom Properties
          - link "Direct link to \"Custom Properties\"" [ref=e565]:
            - /url: "#custom-properties"
            - text: "#"
        - table [ref=e567]:
          - rowgroup [ref=e568]:
            - row "Name Description Default" [ref=e569]:
              - columnheader "Name" [ref=e570]
              - columnheader "Description" [ref=e571]
              - columnheader "Default" [ref=e572]
          - rowgroup [ref=e573]:
            - row "--terra-pagination-button-color The text color of page buttons." [ref=e574]:
              - cell "--terra-pagination-button-color" [ref=e575]:
                - code [ref=e576]: "--terra-pagination-button-color"
              - cell "The text color of page buttons." [ref=e577]
              - cell [ref=e578]
            - row "--terra-pagination-button-background-color The background color of page buttons." [ref=e579]:
              - cell "--terra-pagination-button-background-color" [ref=e580]:
                - code [ref=e581]: "--terra-pagination-button-background-color"
              - cell "The background color of page buttons." [ref=e582]
              - cell [ref=e583]
            - row "--terra-pagination-button-color-hover The text color of page buttons on hover." [ref=e584]:
              - cell "--terra-pagination-button-color-hover" [ref=e585]:
                - code [ref=e586]: "--terra-pagination-button-color-hover"
              - cell "The text color of page buttons on hover." [ref=e587]
              - cell [ref=e588]
            - row "--terra-pagination-button-background-color-hover The background color of page buttons on hover." [ref=e589]:
              - cell "--terra-pagination-button-background-color-hover" [ref=e590]:
                - code [ref=e591]: "--terra-pagination-button-background-color-hover"
              - cell "The background color of page buttons on hover." [ref=e592]
              - cell [ref=e593]
            - row "--terra-pagination-button-color-current The text color of the current page button." [ref=e594]:
              - cell "--terra-pagination-button-color-current" [ref=e595]:
                - code [ref=e596]: "--terra-pagination-button-color-current"
              - cell "The text color of the current page button." [ref=e597]
              - cell [ref=e598]
            - row "--terra-pagination-button-background-color-current The background color of the current page button." [ref=e599]:
              - cell "--terra-pagination-button-background-color-current" [ref=e600]:
                - code [ref=e601]: "--terra-pagination-button-background-color-current"
              - cell "The background color of the current page button." [ref=e602]
              - cell [ref=e603]
        - paragraph [ref=e604]:
          - emphasis [ref=e605]:
            - text: Learn more about
            - link "customizing CSS custom properties" [ref=e606]:
              - /url: /getting-started/usage#custom-properties
            - text: .
        - heading "PartsDirect link to \"Parts\"" [level=2] [ref=e607]:
          - text: Parts
          - link "Direct link to \"Parts\"" [ref=e608]:
            - /url: "#parts"
            - text: "#"
        - table [ref=e610]:
          - rowgroup [ref=e611]:
            - row "Name Description" [ref=e612]:
              - columnheader "Name" [ref=e613]
              - columnheader "Description" [ref=e614]
          - rowgroup [ref=e615]:
            - row "base The component’s base wrapper." [ref=e616]:
              - cell "base" [ref=e617]:
                - code [ref=e618]: base
              - cell "The component’s base wrapper." [ref=e619]
            - row "nav The navigation container." [ref=e620]:
              - cell "nav" [ref=e621]:
                - code [ref=e622]: nav
              - cell "The navigation container." [ref=e623]
            - row "button The page button elements." [ref=e624]:
              - cell "button" [ref=e625]:
                - code [ref=e626]: button
              - cell "The page button elements." [ref=e627]
            - row "button-current The current page button." [ref=e628]:
              - cell "button-current" [ref=e629]:
                - code [ref=e630]: button-current
              - cell "The current page button." [ref=e631]
            - row "ellipsis The ellipsis element." [ref=e632]:
              - cell "ellipsis" [ref=e633]:
                - code [ref=e634]: ellipsis
              - cell "The ellipsis element." [ref=e635]
            - row "prev The previous button." [ref=e636]:
              - cell "prev" [ref=e637]:
                - code [ref=e638]: prev
              - cell "The previous button." [ref=e639]
            - row "next The next button." [ref=e640]:
              - cell "next" [ref=e641]:
                - code [ref=e642]: next
              - cell "The next button." [ref=e643]
            - row "slot The right-side slot container." [ref=e644]:
              - cell "slot" [ref=e645]:
                - code [ref=e646]: slot
              - cell "The right-side slot container." [ref=e647]
        - paragraph [ref=e648]:
          - emphasis [ref=e649]:
            - text: Learn more about
            - link "customizing CSS parts" [ref=e650]:
              - /url: /getting-started/customizing/#css-parts
            - text: .
        - heading "DependenciesDirect link to \"Dependencies\"" [level=2] [ref=e651]:
          - text: Dependencies
          - link "Direct link to \"Dependencies\"" [ref=e652]:
            - /url: "#dependencies"
            - text: "#"
        - paragraph [ref=e653]: This component automatically imports the following dependencies.
        - list [ref=e654]:
          - listitem [ref=e655]:
            - code [ref=e656]: <terra-icon>
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
      |     ^ Error: Visible component overflow for pagination exceeded tolerance (2px).
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