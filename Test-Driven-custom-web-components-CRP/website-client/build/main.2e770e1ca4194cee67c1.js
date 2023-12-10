(()=>{"use strict";var n={372:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n\n/* Document\n   ========================================================================== */\n\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n\n/* Sections\n     ========================================================================== */\n\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n\n/* Grouping content\n     ========================================================================== */\n\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n\n/* Text-level semantics\n     ========================================================================== */\n\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n\n/* Embedded content\n     ========================================================================== */\n\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n\n/* Forms\n     ========================================================================== */\n\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n    -webkit-appearance: button;\n}\n\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n\n/* Interactive\n     ========================================================================== */\n\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n\n/* Misc\n     ========================================================================== */\n\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}',""]);const s=a},890:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),s=t(667),p=t.n(s),l=new URL(t(783),t.b),c=new URL(t(84),t.b),d=new URL(t(685),t.b),f=a()(i()),h=p()(l),u=p()(c),m=p()(d);f.push([n.id,`body {\n  background-color: #fff;\n  font: normal 16px "Source Sans Pro", sans-serif, Arial;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton {\n  font-family: "Oswald", sans-serif;\n}\n\nmain {\n  background-color: #f9f9f9;\n}\n\n#app-container {\n  max-width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n\n.app-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.app-logo {\n  width: 64px;\n  height: 64px;\n  object-fit: contain;\n}\n\n.app-logo--small {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.app-title {\n  font-size: 3.25rem;\n  line-height: 3.2rem;\n  text-align: center;\n}\n\n.app-subtitle {\n  font-size: 1.5rem;\n  line-height: 1.625rem;\n  font-weight: 300;\n  text-align: center;\n  font-family: "Source Sans Pro", sans-serif, Arial;\n}\n\n.app-section__button {\n  background-color: #55c2d8;\n  border: none;\n  color: white;\n  cursor: pointer;\n  outline: none;\n}\n\n.app-header {\n  background-color: transparent;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 64px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n  padding: 0 140px;\n}\n\n.app-header__logo {\n  color: white;\n  justify-self: flex-start;\n  align-self: flex-end;\n  font-size: initial;\n  letter-spacing: 2.4px;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.app-header__nav {\n  display: inline-block;\n}\n\n.app-header__nav-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 32px;\n  justify-items: center;\n  padding: 0;\n  margin: 55px 0 0 0;\n  list-style: none;\n}\n\n.app-header__nav-list-item {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 2.4px;\n}\n\n.app-header__nav-list-item a:hover {\n  text-decoration: underline;\n}\n\n.app-header__nav-list-item a {\n  color: white;\n  text-decoration: none;\n}\n\n.app-header__nav-menu-button {\n  display: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-sizing: content-box;\n  color: white;\n  cursor: pointer;\n  font-size: 0;\n  transition: all 0.25s ease-out;\n  outline: none;\n  padding: 6px;\n  position: relative;\n  user-select: none;\n}\n\n.app-header__nav-menu-button-icon {\n  width: 28px;\n  height: 18px;\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.app-header__nav-menu-button-icon span {\n  background-color: white;\n  position: absolute;\n  border-radius: 2px;\n  transition: transform 0.5s ease-in-out;\n  width: 100%;\n  height: 2px;\n  left: 0;\n  transform: rotate(0);\n}\n\n.app-header__nav-menu-button-icon span:nth-child(1) {\n  top: 0;\n}\n\n.app-header__nav-menu-button-icon span:nth-child(2) {\n  top: 8px;\n  visibility: visible;\n}\n\n.app-header__nav-menu-button-icon span:nth-child(3) {\n  bottom: 0;\n}\n\n.app-section--image-peak {\n  background: linear-gradient(\n      to top,\n      rgba(65, 65, 65, 0.5),\n      rgba(65, 65, 65, 0.5)\n    ),\n    url(${h}) no-repeat center/cover;\n  height: 800px;\n  max-width: 100%;\n  color: white;\n}\n\n.app-section__article {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 90px;\n  margin: 0 140px;\n}\n\n.app-section__button--read-more {\n  border-radius: 26px;\n  font-size: 14px;\n  height: 46px;\n  letter-spacing: 1.2px;\n  margin: 60px auto 108px;\n  text-transform: uppercase;\n  width: 135px;\n}\n\n.app-section_community {\n  background-color: #fff;\n  width: 100%;\n  height: 800px;\n}\n\n.app-section_cards {\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  flex-shrink: 0;\n  gap: 20px;\n}\n\n.app-section_cards_card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 330px;\n  height: 400px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  background: #fff;\n  transition: 300ms;\n  cursor: pointer;\n}\n\n.app-section_cards_card:hover {\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);\n  transition: 300ms;\n}\n\n.app-section_cards_card--img {\n  width: 150px;\n  height: 150px;\n  flex-shrink: 0;\n  background: rgb(255, 252, 252) 0px 0px / 100% 100% no-repeat;\n}\n\n.app-section_cards_card--p {\n  width: 234px;\n  height: 75px;\n  flex-shrink: 0;\n  color: #666;\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.app-section_cards_card--aut {\n  width: 128px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #464547;\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 17.5px;\n  /* 145.833% */\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin-top: 20px;\n}\n\n.app-section_cards_card--info {\n  width: 108px;\n  height: 30px;\n  flex-shrink: 0;\n  color: #666;\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  /* 133.333% */\n}\n\n.app-section_wps {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 531px;\n  flex-shrink: 0;\n  background: #1a9cb0;\n}\n\n.app-section_wps_head {\n  display: flex;\n  /* flex-direction: row; */\n  justify-content: center;\n  align-items: center;\n  gap: 312px;\n  margin-bottom: 60px;\n  margin-top: -150px;\n  /* margin: 50px; */\n}\n\n.app-section_wps_head--header {\n  margin-left: 340px;\n  width: 151px;\n  height: 14px;\n  flex-shrink: 0;\n  color: #fff;\n  font-family: Source Sans Pro;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  /* 112.5% */\n  letter-spacing: 1.6px;\n}\n\n.app-section_wps_head--see {\n  width: 47px;\n  height: 14px;\n  flex-shrink: 0;\n  color: #fff;\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  /* 150% */\n  letter-spacing: 1.2px;\n  text-decoration-line: underline;\n}\n\n.app-section_wps_info {\n  display: flex;\n  justify-content: center;\n  gap: 83px;\n}\n\n.app-section_wps_info--quote {\n  width: 35%;\n  height: 159px;\n  flex-shrink: 0;\n\n  color: #fff;\n  font-family: Source Sans Pro;\n  font-size: 34px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 42px;\n  /* 123.529% */\n  letter-spacing: -0.51px;\n}\n\n.app-section_wps_info--quote1 {\n  width: 40%;\n  height: 159px;\n  flex-shrink: 0;\n  color: #fff;\n  font-family: Source Sans Pro;\n  font-size: 34px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 42px;\n  /* 123.529% */\n  letter-spacing: -0.51px;\n}\n\n.hr {\n  margin-top: 49px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.quote-aut {\n  width: 143px;\n  height: 14px;\n  flex-shrink: 0;\n  color: #fff;\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n  /* 128.571% */\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n}\n\n.aut-info {\n  width: 344px;\n  height: 14px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  /* 128.571% */\n}\n\n.app-section_jointeam {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  min-height: 515px;\n  flex-shrink: 0;\n  background: #eee;\n  align-items: center;\n}\n\n.app-section_jointeam--img {\n  width: 334px;\n  height: 334px;\n  flex-shrink: 0;\n  background: lightgray 50% / cover no-repeat;\n  border-radius: 50%;\n}\n\n.join-team-title {\n  width: 262px;\n  height: 125px;\n  flex-shrink: 0;\n  color: #464547;\n  font-family: Oswald;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 64px;\n  /* 133.333% */\n}\n\n.join-team-info {\n  width: 441px;\n  height: 127px;\n  flex-shrink: 0;\n  color: #666;\n  font-family: Source Sans Pro;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n  /* 133.333% */\n}\n\n.join-team-btn {\n  width: 144px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 18px;\n  background: #55c2d8;\n  color: #fff;\n  text-align: center;\n  font-family: Oswald;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 26px;\n  /* 185.714% */\n  letter-spacing: 1.4px;\n  border: none;\n  cursor: pointer;\n}\n\n.dna {\n  background: #fff;\n}\n\n.app-section_heart {\n  width: 100%;\n  height: 652px;\n  background: #fff;\n}\n\n.app-section_heart_main {\n  width: 441px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.app-section_heart_main--img {\n  width: 150px;\n  height: 150px;\n  flex-shrink: 0;\n  fill: #39c2d7;\n}\n\n#join-our-program {\n  width: 100%;\n  height: 436px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(\n      to top,\n      rgba(5, 17, 18, 0.5),\n      rgba(5, 17, 18, 0.5)\n    ),\n    url(${u}) no-repeat center/cover;\n  background-position: center;\n  box-sizing: border-box;\n}\n\n#join-our-program > h2 {\n  width: 480px;\n  height: 47px;\n  flex-shrink: 0;\n  color: #fff;\n  text-align: center;\n  font-family: Oswald;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 64px;\n  /* 133.333% */\n}\n\n#join-our-program > h3 {\n  width: 452px;\n  height: 54px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n  /* 133.333% */\n}\n\n#join-form > input {\n  width: 400px;\n  height: 36px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  outline: none;\n  border-radius: 10px;\n}\n\n::placeholder {\n  color: white;\n}\n\n.app-section_heart {\n  height: 400px;\n}\n\n.app-section_heart_main-info {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n}\n.heart-double {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 100px;\n}\n.main-info-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.main-info-card--head {\n  width: 115px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #464547;\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17.5px;\n  letter-spacing: 1.4px;\n}\n\n.main-info-card--content {\n  width: 151px;\n  height: 34px;\n  flex-shrink: 0;\n  color: #666;\n  text-align: center;\n  font-family: Source Sans Pro;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin-top: auto;\n}\n\n.app-section--image-culture {\n  background: linear-gradient(\n      to top,\n      rgba(65, 65, 65, 0.7),\n      rgba(65, 65, 65, 0.7)\n    ),\n    url(${m}) no-repeat center/cover;\n  height: 698px;\n  max-width: 100%;\n  color: white;\n}\n\n#join-form > input {\n  padding-left: 5px;\n  color: #fff;\n}\n.app-section__button--our-culture {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin: 64px auto;\n  padding: 0;\n  font-size: 4rem;\n}\n\n.app-footer {\n  background-color: #3b3d40;\n  color: white;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 0 0;\n  grid-template-areas: "logo logo address address . . ." ". . email email rights rights rights";\n  align-items: flex-start;\n  padding: 42px 140px 0;\n  min-height: 148px;\n}\n\n.app-footer__logo {\n  grid-area: logo;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.app-footer__address {\n  grid-area: address;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.app-footer__email {\n  grid-area: email;\n  color: rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n}\n\n.app-footer__rights {\n  grid-area: rights;\n  justify-self: flex-end;\n  color: rgba(255, 255, 255, 0.3);\n  letter-spacing: 0.75px;\n  margin: 0;\n}\n\n@media only screen and (max-width: 768px) {\n  .app-header {\n    grid-template-columns: 1fr 1fr;\n    padding: 0 32px;\n  }\n\n  .app-header__nav-menu-button {\n    display: inline-block;\n    justify-self: flex-end;\n    align-self: flex-end;\n  }\n\n  .app-header__nav {\n    display: none;\n  }\n\n  .app-section--image-peak {\n    height: 648px;\n  }\n\n  .app-section--image-culture {\n    height: 698px;\n  }\n\n  .app-section__button--our-culture {\n    width: 70px;\n    height: 70px;\n    margin: 32px auto;\n    font-size: 2rem;\n  }\n\n  .app-section__article {\n    grid-template-columns: 1fr;\n    gap: 0 0;\n    margin: 0 16px;\n  }\n\n  .app-section__button--read-more {\n    margin: 24px auto 48px;\n  }\n\n  .app-footer {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(9, 1fr);\n    grid-template-areas: "." "logo" "." "address" "address" "email" "." "." "rights";\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n    padding: 0 32px 0;\n  }\n\n  .app-footer__rights {\n    justify-self: center;\n  }\n  .app-section_cards {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .app-section_cards_card:nth-child(1),\n  .app-section_cards_card:nth-child(2) {\n    display: none;\n  }\n  .app-footer__logo {\n    display: block;\n  }\n\n  .app-section_wps_head {\n    gap: 120px;\n  }\n\n  .app-section_wps_info {\n    display: flex;\n    justify-content: start;\n  }\n  .app-section_wps_head--header {\n    margin-left: unset;\n    width: unset;\n    height: unset;\n  }\n  .app-section_wps_info--quote {\n    flex-wrap: nowrap;\n    text-align: center;\n    width: 95%;\n  }\n\n  .app-section_wps_info--quote1 {\n    display: none;\n  }\n  #join-our-program {\n    margin-top: 100px;\n  }\n\n  .join-team-info {\n    width: 95%;\n    text-align: center;\n  }\n\n  .join-team-title {\n    width: 100%;\n    text-align: center;\n  }\n\n  .app-section_jointeam {\n    height: 100vh;\n    gap: 20px;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .btn-join {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n  }\n  .btn-join > .order2 {\n    order: 1;\n  }\n\n  .join-order1 {\n    order: -1;\n  }\n\n  .app-section_heart_main {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    width: 95%;\n  }\n  .app-section_heart_main-info {\n    gap: 10px;\n  }\n  #join-our-program {\n    margin-top: 200px;\n  }\n\n  #join-our-program > h2 {\n    width: 95%;\n    font-size: 40px;\n  }\n\n  #join-our-program > h3 {\n    width: 95%;\n    font-size: 20px;\n  }\n\n  #join-form > input {\n    display: flex;\n    padding-left: 5px;\n    width: 360px;\n    color: #fff;\n  }\n\n  #subscribe {\n    display: flex;\n    justify-content: center;\n    margin: 20px auto auto auto;\n  }\n\n  #join-form {\n    display: flex;\n    flex-direction: column;\n    text-align: center; /* Center the form elements */\n  }\n\n  #inp {\n    width: 100%; /* Make the input field take the full width */\n    margin-bottom: 10px;\n  }\n\n\n  .join-team-btn {\n    /* Make the button take the full width */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    margin: auto;\n    margin-top: 20px;\n    /* text-align: center; */\n    /* align-items: center; */\n  }\n  .hr {\n    width: 50%;\n  }\n  .app-section_heart_main-info {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n`,""]);const g=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var p=n[s],l=o.base?p[0]+o.base:p[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var f=t(d),h={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var u=i(h,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var p=o(n,i),l=0;l<r.length;l++){var c=t(r[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=p}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},84:(n,e,t)=>{n.exports=t.p+"b7a3fa9512554141a10c.webp"},783:(n,e,t)=>{n.exports=t.p+"981921dfa4c72351eb34.webp"},685:(n,e,t)=>{n.exports=t.p+"58646cf9833e7700e925.webp"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(n){const e=["gmail.com","outlook.com","yandex.ru"];for(const t of e)if(n.endsWith(t))return!0;return!1}const e=function(){const e=(e,t)=>{const o=document.createElement("section");o.id="join-our-program",o.innerHTML=`\n      <h2>${e}</h2>\n      <h3>Sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.</h3>\n      <form id="join-form">\n        <input type="email" name="email" placeholder="Enter your email" required />\n        <button id="subbtn" class="join-team-btn" type="submit">${t}</button>\n      </form>\n    `;const i=o.querySelector("#join-form"),r=o.querySelector(".join-team-btn"),a=i.querySelector('input[name="email"]');i.addEventListener("submit",(async function(e){e.preventDefault();const t=a.value;if(console.log("Entered email:",t),n(t))try{r.disabled=!0,r.style.opacity=.5;const n=await fetch("http://localhost:3000/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});if(n.ok)a.style.display="none",r.textContent="Unsubscribe",localStorage.setItem("isSubscribed","true"),localStorage.setItem("subscriptionEmail",t);else{const e=await n.json();422===n.status&&e.error?alert("Error: "+e.error):alert("Server error: "+e.message)}}catch(n){console.error("Error sending email to server:",n),alert("An error occurred while sending email to the server.")}finally{r.disabled=!1,r.style.opacity=1}else alert("Invalid email. Please enter a valid email address.");a.value=""})),r.addEventListener("click",(async function(){if("Unsubscribe"===r.textContent&&!r.disabled)try{r.disabled=!0,r.style.opacity=.5;const n=await fetch("http://localhost:3000/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value})});if(n.ok)i.style.display="flex",a.style.display="block",r.textContent="Subscribe",localStorage.removeItem("isSubscribed"),localStorage.removeItem("subscriptionEmail");else{const e=await n.json();422===n.status&&e.error?alert("Error: "+e.error):alert("Server error: "+e.message)}}catch(n){console.error("Error unsubscribing:",n),alert("An error occurred while unsubscribing.")}finally{r.disabled=!1,r.style.opacity=1}}));const s=localStorage.getItem("subscriptionEmail");s&&(a.value=s);return"true"===localStorage.getItem("isSubscribed")&&(a.style.display="none",r.textContent="Unsubscribe",i.style.display="flex"),{section:o,removeSection:function(){o.remove()}}};return{createStandardSection:function(){return e("Join Our Program","Subscribe")},createAdvancedSection:function(){return e("Join Our Advanced Program","Subscribe to Advanced Program")}}}();var o=t(379),i=t.n(o),r=t(795),a=t.n(r),s=t(569),p=t.n(s),l=t(565),c=t.n(l),d=t(216),f=t.n(d),h=t(589),u=t.n(h),m=t(890),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=p().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f();i()(m.Z,g);m.Z&&m.Z.locals&&m.Z.locals;var x=t(372),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=p().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f();i()(x.Z,b);x.Z&&x.Z.locals&&x.Z.locals;document.addEventListener("DOMContentLoaded",(async function(){const n=e.createStandardSection();document.body.appendChild(n.section);document.getElementById("heart-section").insertAdjacentElement("afterend",n.section);const t=document.querySelector(".app-section_cards");try{const n=await fetch("http://localhost:3000/community");(await n.json()).forEach((n=>{const e=document.createElement("div");e.classList.add("app-section_cards_card"),e.innerHTML=`\n        <img class="app-section_cards_card--img" src="${n.avatar}" alt="" />\n        <p class="app-section_cards_card--p">\n        Aliquip ex ea commodo consequat. Duis aute irure dolor in\n        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n        nulla pariatur.\n        </p>\n        <author class="app-section_cards_card--aut">${n.firstName} ${n.lastName}</author>\n        <p class="app-section_cards_card--info">\n          ${n.position}\n        </p>\n      `,t.appendChild(e)}))}catch(n){console.error("Error fetching data:",n)}}))})()})();