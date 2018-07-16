import Route from '@ember/routing/route';
 import { bind } from '@ember/runloop';


export default Route.extend({

	 model: function() {
    return {};
  },

  actions: {
    login: function(credentials) {
      this.get('session').login(credentials)
        .then(bind(this, 'authenticationDidSucceed'),
              bind(this, 'authenticationDidFail'));
    }
  },

  authenticationDidSucceed: function(res) {
  	
    var transition = this.get('controller.attemptedTransition');
    if (transition) {
      transition.retry();
    } else {
      if(res.user.types=="owner"){
       this.transitionTo('accomadation');
      }else{
      	this.transitionTo('home');
      }

    }
  },

  authenticationDidFail: function(response) {
    var message = response.responseJSON.error;
    this.set('controller.error', message);
    alert("invalid credentials");
  },

  resetController: function(controller) {
    controller.setProperties({error: null, notice: null});
  }

});
