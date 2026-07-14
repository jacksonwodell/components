# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: components.responsive.mobile.spec.ts >> Terra component mobile responsiveness >> component slider is responsive on touch mobile
- Location: tests\mobile\components.responsive.mobile.spec.ts:425:5

# Error details

```
Error: Visible component overflow for slider exceeded tolerance (2px).

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 2
Received:    9
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
          - link "Slider" [ref=e74]:
            - /url: "#"
        - listitem [ref=e75]:
          - link "Examples" [ref=e76]:
            - /url: "#examples"
        - listitem [ref=e77]:
          - link "Importing" [ref=e78]:
            - /url: "#importing"
        - listitem [ref=e79]:
          - link "Properties" [ref=e80]:
            - /url: "#properties"
      - generic [ref=e81]:
        - generic [ref=e82]:
          - heading "Slider" [level=1] [ref=e83]
          - code [ref=e85]: <terra-slider> | TerraSlider
          - generic [ref=e86]:
            - status [ref=e88]:
              - generic: Since ?
            - status [ref=e90]
        - paragraph
        - generic [ref=e91]:
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]: Year
              - generic [ref=e99]: 1920–2020
            - generic [ref=e102]:
              - slider [ref=e105]
              - slider [ref=e107]
          - generic [ref=e111]:
            - code [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]: <terra-slider
                - text: label
                - generic [ref=e115]: ="Year"
                - text: min
                - generic [ref=e116]: ="1920"
                - text: max
                - generic [ref=e117]: ="2020"
                - text: mode
                - generic [ref=e118]: ="range"
                - text: ">"
              - generic [ref=e119]:
                - generic [ref=e120]: </terra-slider
                - text: ">"
            - button [ref=e121] [cursor=pointer]:
              - button [ref=e122]:
                - generic:
                  - generic:
                    - generic:
                      - img
          - generic [ref=e123]:
            - button "Source" [expanded] [ref=e124] [cursor=pointer]:
              - text: Source
              - img [ref=e125]
            - button "Edit on CodePen" [ref=e127] [cursor=pointer]:
              - img [ref=e128]
        - heading "ExamplesDirect link to \"Examples\"" [level=2] [ref=e130]:
          - text: Examples
          - link "Direct link to \"Examples\"" [ref=e131]:
            - /url: "#examples"
            - text: "#"
        - heading "Default Behavior (Selected Values Display)Direct link to \"Default Behavior (Selected Values Display)\"" [level=3] [ref=e132]:
          - text: Default Behavior (Selected Values Display)
          - link "Direct link to \"Default Behavior (Selected Values Display)\"" [ref=e133]:
            - /url: "#default-behavior-selected-values-display"
            - text: "#"
        - paragraph [ref=e134]: By default, the slider displays the selected values in the top right corner of the component. This is the recommended HDS pattern.
        - generic [ref=e135]:
          - generic [ref=e139]:
            - generic [ref=e140]:
              - generic [ref=e141]: Year
              - generic [ref=e143]: 1920–2020
            - generic [ref=e146]:
              - slider [ref=e149]
              - slider [ref=e151]
          - generic [ref=e153]:
            - button "Source" [ref=e154] [cursor=pointer]:
              - text: Source
              - img [ref=e155]
            - button "Edit on CodePen" [ref=e157] [cursor=pointer]:
              - img [ref=e158]
        - heading "Single ValueDirect link to \"Single Value\"" [level=3] [ref=e160]:
          - text: Single Value
          - link "Direct link to \"Single Value\"" [ref=e161]:
            - /url: "#single-value"
            - text: "#"
        - generic [ref=e162]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - generic [ref=e168]: Temperature
              - generic [ref=e169]:
                - button "Clear" [ref=e170] [cursor=pointer]
                - generic [ref=e171]: "25"
            - slider [ref=e176]
          - generic [ref=e178]:
            - button "Source" [ref=e179] [cursor=pointer]:
              - text: Source
              - img [ref=e180]
            - button "Edit on CodePen" [ref=e182] [cursor=pointer]:
              - img [ref=e183]
        - heading "RangeDirect link to \"Range\"" [level=3] [ref=e185]:
          - text: Range
          - link "Direct link to \"Range\"" [ref=e186]:
            - /url: "#range"
            - text: "#"
        - generic [ref=e187]:
          - generic [ref=e191]:
            - generic [ref=e192]:
              - generic [ref=e193]: Range
              - generic [ref=e194]:
                - button "Clear" [ref=e195] [cursor=pointer]
                - generic [ref=e196]: 200–800
            - generic [ref=e199]:
              - slider [ref=e202]
              - slider [ref=e204]
          - generic [ref=e206]:
            - button "Source" [ref=e207] [cursor=pointer]:
              - text: Source
              - img [ref=e208]
            - button "Edit on CodePen" [ref=e210] [cursor=pointer]:
              - img [ref=e211]
        - heading "With TooltipsDirect link to \"With Tooltips\"" [level=3] [ref=e213]:
          - text: With Tooltips
          - link "Direct link to \"With Tooltips\"" [ref=e214]:
            - /url: "#with-tooltips"
            - text: "#"
        - paragraph [ref=e215]:
          - text: Use the
          - code [ref=e216]: has-tooltips
          - text: prop to show tooltips on the slider handles instead of displaying values in the top right. When tooltips are enabled, they automatically merge when handles get close together (e.g., “23–24” instead of two overlapping tooltips).
        - generic [ref=e217]:
          - generic [ref=e219]:
            - generic [ref=e221]:
              - generic [ref=e222]: Temperature
              - slider [ref=e227]:
                - generic [ref=e229]: "25"
            - generic [ref=e231]:
              - generic [ref=e232]: Close Range
              - generic [ref=e235]:
                - slider [ref=e238]
                - generic:
                  - slider [ref=e240]
                  - generic [ref=e242]: 23-24
          - generic [ref=e243]:
            - button "Source" [ref=e244] [cursor=pointer]:
              - text: Source
              - img [ref=e245]
            - button "Edit on CodePen" [ref=e247] [cursor=pointer]:
              - img [ref=e248]
        - heading "With LabelDirect link to \"With Label\"" [level=3] [ref=e250]:
          - text: With Label
          - link "Direct link to \"With Label\"" [ref=e251]:
            - /url: "#with-label"
            - text: "#"
        - generic [ref=e252]:
          - generic [ref=e256]:
            - generic [ref=e257]:
              - generic [ref=e258]: Temperature (°C)
              - generic [ref=e259]:
                - button "Clear" [ref=e260] [cursor=pointer]
                - generic [ref=e261]: "50"
            - slider [ref=e266]
          - generic [ref=e268]:
            - button "Source" [ref=e269] [cursor=pointer]:
              - text: Source
              - img [ref=e270]
            - button "Edit on CodePen" [ref=e272] [cursor=pointer]:
              - img [ref=e273]
        - heading "Hidden Label (Accessible)Direct link to \"Hidden Label (Accessible)\"" [level=3] [ref=e275]:
          - text: Hidden Label (Accessible)
          - link "Direct link to \"Hidden Label (Accessible)\"" [ref=e276]:
            - /url: "#hidden-label-accessible"
            - text: "#"
        - generic [ref=e277]:
          - generic [ref=e281]:
            - generic [ref=e282]:
              - generic [ref=e283]: Volume Control
              - generic [ref=e284]:
                - button "Clear" [ref=e285] [cursor=pointer]
                - generic [ref=e286]: "50"
            - slider [ref=e291]
          - generic [ref=e293]:
            - button "Source" [ref=e294] [cursor=pointer]:
              - text: Source
              - img [ref=e295]
            - button "Edit on CodePen" [ref=e297] [cursor=pointer]:
              - img [ref=e298]
        - heading "With Input FieldsDirect link to \"With Input Fields\"" [level=3] [ref=e300]:
          - text: With Input Fields
          - link "Direct link to \"With Input Fields\"" [ref=e301]:
            - /url: "#with-input-fields"
            - text: "#"
        - generic [ref=e302]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - generic [ref=e308]: Slider
              - generic [ref=e309]:
                - button "Clear" [ref=e310] [cursor=pointer]
                - generic [ref=e311]: "250"
            - generic [ref=e312]:
              - slider [ref=e316]
              - spinbutton [ref=e319]: "250"
          - generic [ref=e320]:
            - button "Source" [ref=e321] [cursor=pointer]:
              - text: Source
              - img [ref=e322]
            - button "Edit on CodePen" [ref=e324] [cursor=pointer]:
              - img [ref=e325]
        - heading "Range with Default ValuesDirect link to \"Range with Default Values\"" [level=3] [ref=e327]:
          - text: Range with Default Values
          - link "Direct link to \"Range with Default Values\"" [ref=e328]:
            - /url: "#range-with-default-values"
            - text: "#"
        - generic [ref=e329]:
          - generic [ref=e333]:
            - generic [ref=e334]:
              - generic [ref=e335]: Range
              - generic [ref=e336]:
                - button "Clear" [ref=e337] [cursor=pointer]
                - generic [ref=e338]: 200–800
            - generic [ref=e341]:
              - slider [ref=e344]
              - slider [ref=e346]
          - generic [ref=e348]:
            - button "Source" [ref=e349] [cursor=pointer]:
              - text: Source
              - img [ref=e350]
            - button "Edit on CodePen" [ref=e352] [cursor=pointer]:
              - img [ref=e353]
        - heading "Range with Input FieldsDirect link to \"Range with Input Fields\"" [level=3] [ref=e355]:
          - text: Range with Input Fields
          - link "Direct link to \"Range with Input Fields\"" [ref=e356]:
            - /url: "#range-with-input-fields"
            - text: "#"
        - generic [ref=e357]:
          - generic [ref=e361]:
            - generic [ref=e362]:
              - generic [ref=e363]: Range
              - generic [ref=e364]:
                - button "Clear" [ref=e365] [cursor=pointer]
                - generic [ref=e366]: 200–800
            - generic [ref=e367]:
              - generic [ref=e369]:
                - slider [ref=e372]
                - slider [ref=e374]
              - generic [ref=e376]:
                - spinbutton [ref=e377]: "200"
                - generic [ref=e378]: to
                - spinbutton [ref=e379]: "800"
          - generic [ref=e380]:
            - button "Source" [ref=e381] [cursor=pointer]:
              - text: Source
              - img [ref=e382]
            - button "Edit on CodePen" [ref=e384] [cursor=pointer]:
              - img [ref=e385]
        - heading "Decimal StepsDirect link to \"Decimal Steps\"" [level=3] [ref=e387]:
          - text: Decimal Steps
          - link "Direct link to \"Decimal Steps\"" [ref=e388]:
            - /url: "#decimal-steps"
            - text: "#"
        - generic [ref=e389]:
          - generic [ref=e393]:
            - generic [ref=e394]:
              - generic [ref=e395]: Slider
              - generic [ref=e396]:
                - button "Clear" [ref=e397] [cursor=pointer]
                - generic [ref=e398]: "2.4"
            - generic [ref=e399]:
              - slider [ref=e403]
              - spinbutton [ref=e406]: "2.4"
          - generic [ref=e407]:
            - button "Source" [ref=e408] [cursor=pointer]:
              - text: Source
              - img [ref=e409]
            - button "Edit on CodePen" [ref=e411] [cursor=pointer]:
              - img [ref=e412]
        - heading "Custom Step SizeDirect link to \"Custom Step Size\"" [level=3] [ref=e414]:
          - text: Custom Step Size
          - link "Direct link to \"Custom Step Size\"" [ref=e415]:
            - /url: "#custom-step-size"
            - text: "#"
        - generic [ref=e416]:
          - generic [ref=e420]:
            - generic [ref=e421]:
              - generic [ref=e422]: Slider
              - generic [ref=e423]:
                - button "Clear" [ref=e424] [cursor=pointer]
                - generic [ref=e425]: "25"
            - generic [ref=e426]:
              - slider [ref=e430]
              - spinbutton [ref=e433]: "25"
          - generic [ref=e434]:
            - button "Source" [ref=e435] [cursor=pointer]:
              - text: Source
              - img [ref=e436]
            - button "Edit on CodePen" [ref=e438] [cursor=pointer]:
              - img [ref=e439]
        - heading "DisabledDirect link to \"Disabled\"" [level=3] [ref=e441]:
          - text: Disabled
          - link "Direct link to \"Disabled\"" [ref=e442]:
            - /url: "#disabled"
            - text: "#"
        - generic [ref=e443]:
          - generic [ref=e447]:
            - generic [ref=e448]:
              - generic [ref=e449]: Slider
              - generic [ref=e450]:
                - button "Clear" [ref=e451] [cursor=pointer]
                - generic [ref=e452]: "4"
            - slider [ref=e457]
          - generic [ref=e459]:
            - button "Source" [ref=e460] [cursor=pointer]:
              - text: Source
              - img [ref=e461]
            - button "Edit on CodePen" [ref=e463] [cursor=pointer]:
              - img [ref=e464]
        - heading "Display ModesDirect link to \"Display Modes\"" [level=3] [ref=e466]:
          - text: Display Modes
          - link "Direct link to \"Display Modes\"" [ref=e467]:
            - /url: "#display-modes"
            - text: "#"
        - paragraph [ref=e468]: "The slider supports two display modes for showing selected values:"
        - paragraph [ref=e469]:
          - strong [ref=e470]: "Default (Selected Values in Header):"
        - list [ref=e471]:
          - listitem [ref=e472]: Selected values are displayed in the top right corner of the component
          - listitem [ref=e473]: This is the recommended HDS pattern and provides a clean, unobtrusive display
          - listitem [ref=e474]:
            - text: "Example:"
            - code [ref=e475]: <terra-slider label="Year" min="1920" max="2020" mode="range"></terra-slider>
        - paragraph [ref=e476]:
          - strong [ref=e477]: "Tooltips:"
        - list [ref=e478]:
          - listitem [ref=e479]:
            - text: Use the
            - code [ref=e480]: has-tooltips
            - text: prop to show tooltips on the slider handles
          - listitem [ref=e481]: Tooltips automatically merge when handles get close together (within 15% proximity)
          - listitem [ref=e482]:
            - text: "Example:"
            - code [ref=e483]: <terra-slider has-tooltips mode="range" min="0" max="100"></terra-slider>
        - heading "Default ValuesDirect link to \"Default Values\"" [level=3] [ref=e484]:
          - text: Default Values
          - link "Direct link to \"Default Values\"" [ref=e485]:
            - /url: "#default-values"
            - text: "#"
        - paragraph [ref=e486]:
          - strong [ref=e487]: "Single Mode:"
        - list [ref=e488]:
          - listitem [ref=e489]:
            - text: If no
            - code [ref=e490]: value
            - text: is provided, defaults to
            - code [ref=e491]: min
            - text: value
          - listitem [ref=e492]:
            - text: "Example:"
            - code [ref=e493]: <terra-slider min="0" max="100"></terra-slider>
            - text: starts at 0
        - paragraph [ref=e494]:
          - strong [ref=e495]: "Range Mode:"
        - list [ref=e496]:
          - listitem [ref=e497]:
            - text: If no
            - code [ref=e498]: start-value
            - text: is provided, defaults to
            - code [ref=e499]: min
            - text: value
          - listitem [ref=e500]:
            - text: If no
            - code [ref=e501]: end-value
            - text: is provided, defaults to
            - code [ref=e502]: max
            - text: value
          - listitem [ref=e503]:
            - text: "Example:"
            - code [ref=e504]: <terra-slider mode="range" min="0" max="100"></terra-slider>
            - text: starts at [0, 100]
        - heading "Listen for changesDirect link to \"Listen for changes\"" [level=3] [ref=e505]:
          - text: Listen for changes
          - link "Direct link to \"Listen for changes\"" [ref=e506]:
            - /url: "#listen-for-changes"
            - text: "#"
        - generic [ref=e507]:
          - code [ref=e508]:
            - generic [ref=e509]:
              - generic [ref=e510]: <terra-slider
              - text: id
              - generic [ref=e511]: ="s1"
              - text: min
              - generic [ref=e512]: ="0"
              - text: max
              - generic [ref=e513]: ="100"
              - text: value
              - generic [ref=e514]: ="40"
              - text: ">"
            - generic [ref=e515]:
              - generic [ref=e516]: </terra-slider
              - text: ">"
            - generic [ref=e517]:
              - generic [ref=e518]: <script
              - text: ">"
            - text: "const s1 = document.getElementById('s1'); s1.addEventListener('terra-slider-change', (e) => { // Single mode: e.detail.value // Range mode: e.detail.startValue, e.detail.endValue console.log('slider change', e.detail); }); <\\/script>"
          - button [ref=e519] [cursor=pointer]:
            - button [ref=e520]:
              - generic:
                - generic:
                  - generic:
                    - img
        - paragraph [ref=e521]: "[component-metadata:terra-slider]"
        - heading "ImportingDirect link to \"Importing\"" [level=2] [ref=e522]:
          - text: Importing
          - link "Direct link to \"Importing\"" [ref=e523]:
            - /url: "#importing"
            - text: "#"
        - paragraph [ref=e524]:
          - text: If you’re using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to use any of the following snippets to
          - link "cherry pick" [ref=e525]:
            - /url: /getting-started/installation#cherry-picking
          - text: this component.
        - tablist [ref=e530]:
          - generic:
            - generic:
              - tab "Script" [ref=e531]:
                - generic [ref=e532] [cursor=pointer]:
                  - generic: Script
              - tab "Import" [ref=e533]:
                - generic [ref=e534] [cursor=pointer]:
                  - generic: Import
              - tab "Bundler" [ref=e535]:
                - generic [ref=e536] [cursor=pointer]:
                  - generic: Bundler
              - tab "React" [ref=e537]:
                - generic [ref=e538] [cursor=pointer]:
                  - generic: React
        - heading "PropertiesDirect link to \"Properties\"" [level=2] [ref=e539]:
          - text: Properties
          - link "Direct link to \"Properties\"" [ref=e540]:
            - /url: "#properties"
            - text: "#"
        - table [ref=e542]:
          - rowgroup [ref=e543]:
            - row "Name Description Reflects Type Default" [ref=e544]:
              - columnheader "Name" [ref=e545]
              - columnheader "Description" [ref=e546]
              - columnheader "Reflects" [ref=e547]
              - columnheader "Type" [ref=e548]
              - columnheader "Default" [ref=e549]
          - rowgroup [ref=e550]:
            - row "mode The slider mode - either ‘single’ for one value or ‘range’ for selecting a range. yes SliderMode 'single'" [ref=e551]:
              - cell "mode" [ref=e552]:
                - code [ref=e553]: mode
              - cell "The slider mode - either ‘single’ for one value or ‘range’ for selecting a range." [ref=e554]
              - cell "yes" [ref=e555]:
                - img "yes" [ref=e556]:
                  - img [ref=e557]
              - cell "SliderMode" [ref=e559]:
                - code [ref=e560]: SliderMode
              - cell "'single'" [ref=e561]:
                - code [ref=e562]: "'single'"
            - row "min The minimum value of the slider. number 0" [ref=e563]:
              - cell "min" [ref=e564]:
                - code [ref=e565]: min
              - cell "The minimum value of the slider." [ref=e566]
              - cell [ref=e567]
              - cell "number" [ref=e568]:
                - code [ref=e569]: number
              - cell "0" [ref=e570]:
                - code [ref=e571]: "0"
            - row "max The maximum value of the slider. number 100" [ref=e572]:
              - cell "max" [ref=e573]:
                - code [ref=e574]: max
              - cell "The maximum value of the slider." [ref=e575]
              - cell [ref=e576]
              - cell "number" [ref=e577]:
                - code [ref=e578]: number
              - cell "100" [ref=e579]:
                - code [ref=e580]: "100"
            - row "step The step size for the slider. Use integers (1, 2, 5) for whole numbers or decimals (0.1, 0.2, 0.5) for fractional steps. number 1" [ref=e581]:
              - cell "step" [ref=e582]:
                - code [ref=e583]: step
              - cell "The step size for the slider. Use integers (1, 2, 5) for whole numbers or decimals (0.1, 0.2, 0.5) for fractional steps." [ref=e584]
              - cell [ref=e585]
              - cell "number" [ref=e586]:
                - code [ref=e587]: number
              - cell "1" [ref=e588]:
                - code [ref=e589]: "1"
            - row "disabled Disables the slider. yes boolean false" [ref=e590]:
              - cell "disabled" [ref=e591]:
                - code [ref=e592]: disabled
              - cell "Disables the slider." [ref=e593]
              - cell "yes" [ref=e594]:
                - img "yes" [ref=e595]:
                  - img [ref=e596]
              - cell "boolean" [ref=e598]:
                - code [ref=e599]: boolean
              - cell "false" [ref=e600]:
                - code [ref=e601]: "false"
            - row "hasPips has-pips Shows tick marks and labels on the slider. yes boolean false" [ref=e602]:
              - cell "hasPips has-pips" [ref=e603]:
                - code [ref=e604]: hasPips
                - code [ref=e607]: has-pips
              - cell "Shows tick marks and labels on the slider." [ref=e608]
              - cell "yes" [ref=e609]:
                - img "yes" [ref=e610]:
                  - img [ref=e611]
              - cell "boolean" [ref=e613]:
                - code [ref=e614]: boolean
              - cell "false" [ref=e615]:
                - code [ref=e616]: "false"
            - row "hasTooltips has-tooltips Shows tooltips on the slider handles. When false (default), selected values are shown in the top right instead. yes boolean false" [ref=e617]:
              - cell "hasTooltips has-tooltips" [ref=e618]:
                - code [ref=e619]: hasTooltips
                - code [ref=e622]: has-tooltips
              - cell "Shows tooltips on the slider handles. When false (default), selected values are shown in the top right instead." [ref=e623]
              - cell "yes" [ref=e624]:
                - img "yes" [ref=e625]:
                  - img [ref=e626]
              - cell "boolean" [ref=e628]:
                - code [ref=e629]: boolean
              - cell "false" [ref=e630]:
                - code [ref=e631]: "false"
            - row "showInputs show-inputs Shows input fields below the slider for precise value entry. yes boolean false" [ref=e632]:
              - cell "showInputs show-inputs" [ref=e633]:
                - code [ref=e634]: showInputs
                - code [ref=e637]: show-inputs
              - cell "Shows input fields below the slider for precise value entry." [ref=e638]
              - cell "yes" [ref=e639]:
                - img "yes" [ref=e640]:
                  - img [ref=e641]
              - cell "boolean" [ref=e643]:
                - code [ref=e644]: boolean
              - cell "false" [ref=e645]:
                - code [ref=e646]: "false"
            - row "value The current value for single mode sliders. number | undefined -" [ref=e647]:
              - cell "value" [ref=e648]:
                - code [ref=e649]: value
              - cell "The current value for single mode sliders." [ref=e650]
              - cell [ref=e651]
              - cell "number | undefined" [ref=e652]:
                - code [ref=e653]: number | undefined
              - cell "-" [ref=e654]
            - row "startValue start-value The start value for range mode sliders. number | undefined -" [ref=e655]:
              - cell "startValue start-value" [ref=e656]:
                - code [ref=e657]: startValue
                - code [ref=e660]: start-value
              - cell "The start value for range mode sliders." [ref=e661]
              - cell [ref=e662]
              - cell "number | undefined" [ref=e663]:
                - code [ref=e664]: number | undefined
              - cell "-" [ref=e665]
            - row "endValue end-value The end value for range mode sliders. number | undefined -" [ref=e666]:
              - cell "endValue end-value" [ref=e667]:
                - code [ref=e668]: endValue
                - code [ref=e671]: end-value
              - cell "The end value for range mode sliders." [ref=e672]
              - cell [ref=e673]
              - cell "number | undefined" [ref=e674]:
                - code [ref=e675]: number | undefined
              - cell "-" [ref=e676]
            - row "label The label text for the slider. string 'Slider'" [ref=e677]:
              - cell "label" [ref=e678]:
                - code [ref=e679]: label
              - cell "The label text for the slider." [ref=e680]
              - cell [ref=e681]
              - cell "string" [ref=e682]:
                - code [ref=e683]: string
              - cell "'Slider'" [ref=e684]:
                - code [ref=e685]: "'Slider'"
            - row "hideLabel hide-label Hide the slider’s label text. When hidden, still presents to screen readers. boolean false" [ref=e686]:
              - cell "hideLabel hide-label" [ref=e687]:
                - code [ref=e688]: hideLabel
                - code [ref=e691]: hide-label
              - cell "Hide the slider’s label text. When hidden, still presents to screen readers." [ref=e692]
              - cell [ref=e693]
              - cell "boolean" [ref=e694]:
                - code [ref=e695]: boolean
              - cell "false" [ref=e696]:
                - code [ref=e697]: "false"
            - row "updateComplete A read-only promise that resolves when the component has finished updating." [ref=e698]:
              - cell "updateComplete" [ref=e699]:
                - code [ref=e700]: updateComplete
              - cell "A read-only promise that resolves when the component has finished updating." [ref=e701]:
                - text: A read-only promise that resolves when the component has
                - link "finished updating" [ref=e702]:
                  - /url: /getting-started/usage?#component-rendering-and-updating
                - text: .
              - cell [ref=e703]
              - cell [ref=e704]
              - cell [ref=e705]
        - paragraph [ref=e706]:
          - emphasis [ref=e707]:
            - text: Learn more about
            - link "attributes and properties" [ref=e708]:
              - /url: /getting-started/usage#attributes-and-properties
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
      |     ^ Error: Visible component overflow for slider exceeded tolerance (2px).
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