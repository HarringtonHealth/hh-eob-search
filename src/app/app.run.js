const run = ($http, $rootElement) => {
	'ngInject';
	const moduleId = $rootElement.data('module-id');
	const $ = window.$;
	const sf = $.ServicesFramework(moduleId);

	$http.defaults.headers.common['Content-Type'] = 'application/json';
	$http.defaults.headers.common['ModuleId'] = moduleId;
	$http.defaults.headers.common['TabId'] = sf.getTabId();
	$http.defaults.headers.common['RequestVerificationToken'] = sf.getAntiForgeryValue();
};

export default run;