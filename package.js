Package.describe({
  name: 'meteorhacks:flow-router',
  summary: 'Carefully Designed Client Side Router for Meteor',
  version: '1.3.0',
  git: 'https://github.com/meteorhacks/flow-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('underscore');
  api.use('tracker');
  api.use('reactive-dict');

  api.use('meteorhacks:fast-render@2.0.0', ['client', 'server'], {weak: true});

  api.addFiles('client/vendor/page.js', 'client');
  api.addFiles('client/vendor/query.js', 'client');
  api.addFiles('client/router.js', 'client');
  api.addFiles('client/group.js', 'client');
  api.addFiles('client/route.js', 'client');
  api.addFiles('client/_init.js', 'client');
  api.addFiles('server/router.js', 'server');
  api.addFiles('server/group.js', 'server');
  api.addFiles('server/route.js', 'server');
  api.addFiles('server/_init.js', 'server');

  api.addFiles('server/plugins/fast-render.js', 'server');

  api.export('FlowRouter');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteorhacks:flow-router');
  api.use('practicalmeteor:sinon');

  api.addFiles('test/client/_helpers.js', 'client');
  api.addFiles('test/server/_helpers.js', 'server');

  api.addFiles('test/client/loader.spec.js', 'client');
  api.addFiles('test/client/router.spec.js', 'client');
  api.addFiles('test/client/router.subs_ready.spec.js', 'client');
  api.addFiles('test/client/router.naming.spec.js', 'client');
  api.addFiles('test/client/route.test.js', 'client');
  api.addFiles('test/client/route.spec.js', 'client');

  api.addFiles('test/client/group.spec.js', 'client');
});
