lib.nav = COA
lib.nav {
    10 = HMENU
    10 {
        1 = TMENU
        1 {
            expAll = 1

            NO = 1
            NO {
                wrapItemAndSub = <li data-slide="{field:nav_title}" class="col-12 col-sm-2">|</li>
                wrapItemAndSub.insertData = 1

                doNotLinkIt = 1

                stdWrap.cObject = CASE
                stdWrap.cObject {
                key.field = doktype
                default = TEXT
                default {
                        typolink.parameter = #{field:css_id}
                        typolink.parameter.insertData = 1

                        field = title
                        stdWrap.htmlSpecialChars = 1
                        # transform to Uppercase
                        stdWrap.case = upper
                        typolink.title {
                            cObject = TEXT
                            cObject {
                                data = LLL:EXT:muntertheme/Resources/Private/Language/locallang.xml:next_section
                            }
                        }

                        typolink.ATagBeforeWrap=1
                        typolink.wrap=<span class="fa {field:menu_icon}"></span> <span class="text">|</span>
                        typolink.wrap.insertData = 1
                    }
				    # External URL
                    3 = TEXT
                    3 {
                        field = title
                        typolink.parameter.field = url
                        typolink.extTarget.field = target
                        stdWrap.htmlSpecialChars = 1
                    }
                }
            }
            wrap = <ul class="nav row">|</ul>
        }
    }
}