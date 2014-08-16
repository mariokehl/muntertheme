config {
	doctype = html5
	xmlprologue = none
	xhtml_cleaning = all
	disablePrefixComment = 1
	meaningfulTempFilePrefix = 100
	htmlTag_setParams = class="no-js"

	# frontend adminPanel
	admPanel = {$plugin.tx_muntertheme.general.adminPanel}

	# remove inline CSS/JS to external
	removeDefaultJS = external
	inlineStyle2TempFile = 1
	compressJs = {$plugin.tx_muntertheme.assets.compress}
	compressCss = {$plugin.tx_muntertheme.assets.compress}
	concatenateJs = {$plugin.tx_muntertheme.assets.merge}
	concatenateCss = {$plugin.tx_muntertheme.assets.merge}

	# RealURL
	simulateStaticDocuments = 0
	baseURL = {$plugin.tx_muntertheme.url}
	absRefPrefix = {$plugin.tx_muntertheme.absRefPrefix}
	tx_realurl_enable = {$plugin.tx_muntertheme.extensions.realurl}
	prefixLocalAnchors = all
	prefixLocalAnchors >

	# Spam
	spamProtectEmailAddresses = -2
	spamProtectEmailAddresses_atSubst = <script type="text/javascript">document.write('@');</script>
	spamProtectEmailAddresses_lastDotSubst = <script type="text/javascript">document.write('.');</script>

	# check for valid L-params
	linkVars = L(0-50)

	# Links & content sharing across domains
	typolinkEnableLinksAcrossDomains = 1
	typolinkCheckRootline = 1
	content_from_pid_allowOutsideDomain = 1

	# Cache
	cache_clearAtMidnight = 1
	cache_period = 1200
	sendCacheHeaders = 1
}
