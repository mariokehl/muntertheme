page = PAGE
page {
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

            # Default template
			default = TEXT
			default.value = {$plugin.tx_muntertheme.filepaths.templates}main.html

            # Number equals the UID of the backend layout
			1 = TEXT
			1.value = {$plugin.tx_muntertheme.filepaths.templates}main.html
		}
		partialRootPath = {$plugin.tx_muntertheme.filepaths.templates}Partials/
		layoutRootPath = {$plugin.tx_muntertheme.filepaths.templates}Layouts/
		variables {
			# Insert variables here
		}
	}

	# FavIcon
	shortcutIcon = {$plugin.tx_muntertheme.filepaths.images}icons/favicon.ico

	# Include CSS Files
	includeCSS {
        bootstrap = {$plugin.tx_muntertheme.filepaths.css}bootstrap.min.css
        fancybox = {$plugin.tx_muntertheme.filepaths.javascript}fancybox/jquery.fancybox-v=2.1.5.css
        fontAwesome = {$plugin.tx_muntertheme.filepaths.css}font-awesome.min.css
		style = {$plugin.tx_muntertheme.filepaths.css}style.css
        googleWebFont = http://fonts.googleapis.com/css?family=Titillium+Web:400,600,300,200&subset=latin,latin-ext
        googleWebFont.external = 1
	}

    headerData.555 = TEXT
    headerData.555.insertData = 1
    headerData.555.data = PATH:EXT:muntertheme/Resources/Public/images/zoom.png
    headerData.555.wrap = <link rel="prefetch" href="|">

	includeJSFooter {
		html5shiv = {$plugin.tx_muntertheme.filepaths.javascript}html5shiv.min.js
        jquery = {$plugin.tx_muntertheme.filepaths.javascript}jquery-1.11.1.min.js
        migrate = {$plugin.tx_muntertheme.filepaths.javascript}jquery-migrate-1.2.1.min.js
        bootstrap = {$plugin.tx_muntertheme.filepaths.javascript}bootstrap.min.js
        easing = {$plugin.tx_muntertheme.filepaths.javascript}jquery.easing.1.3.js
        fancybox = {$plugin.tx_muntertheme.filepaths.javascript}fancybox/jquery.fancybox.pack-v=2.1.5.js
        myscript = {$plugin.tx_muntertheme.filepaths.javascript}script.js
	}

    footerData.555 = TEXT
    footerData.555.wrap (
    <!-- fancybox init -->
    <script>
        $(document).ready(function(e) {
            var lis = $('.nav > li');
            menu_focus( lis[0], 1 );

            $(".fancybox").fancybox({
                padding: 10,
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });
        });
    </script>
    )

	# Meta
	meta {
		viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no
	}

}

## CE
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = layout

	default = TEXT
	default.value = <div class="container">|</div>

}
