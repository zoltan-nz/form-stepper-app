import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('form', function() {
    this.route('details');
    this.route('last-question');
    this.route('confirm');
    this.route('done');
  });
});

export default Router;
