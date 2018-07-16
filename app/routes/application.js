import Route from '@ember/routing/route';
 import { bind } from '@ember/runloop';


export default Route.extend({


  actions: {
    logout: function() {
      this.get('session').logout();
      alert("successfully logout");
      this.transitionTo('login');

    }
  }
  });