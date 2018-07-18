import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
    if(!this.get("session").getData()){
       this.transitionTo('login')
    }
    this.store.findAll('location');	
    return {};
  },
   actions: {
    search: function(m) {
     this.transitionTo('search', { queryParams: { country: m.country }});
    }
  }

});
