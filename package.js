Npm.depends({'fbgraph': '1.4.4'});

Package.describe({
	name: "btafel:fbgraph",
	summary: "Node.js module to access the Facebook graph api.",
	version: "2.2.0",
	git: "https://github.com/btafel/meteor-fbgraph.git"
});

Package.onUse(function(api) {
	api.use('meteorhacks:async@1.0.0');
	api.use('underscore@1.0.8');

	api.addFiles('fbgraph.js', 'server');
	api.export('FBGraph', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('service-configuration');
	api.use('btafel:fbgraph');
	api.addFiles('tests/fbgraph_test.js');
});
