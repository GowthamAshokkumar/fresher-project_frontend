import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
    if(!this.get("session").getData()){
       this.transitionTo('login')
    }
    return {};
  },
   actions: {
    search: function(m) {
     this.store.findAll('location');	
     this.transitionTo('search', { queryParams: { country: m.country }});
    }
  }

});
