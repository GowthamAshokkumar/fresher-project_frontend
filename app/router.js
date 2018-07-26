import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login',{ path: '/' })
  this.route('signup');
  this.route('login');
  this.route('accomadation');
  this.route('home');
  this.route('search');
  this.route('spot');
  this.route('itinerary');
});



export default Router;
