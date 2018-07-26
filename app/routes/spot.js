import Route from '@ember/routing/route';

export default Route.extend({
	queryParams: {
     id: {
       refreshModel: false
     }
    },
	model:function(params){
		if(!this.get("session").getData()){
          this.transitionTo('login')
        }
        var id=localStorage.getItem("id");
        
  return Ember.RSVP.hash({
      duration: localStorage.getItem('duration'),
      locations: this.store.query('old_location', {id: id}),
       new_locations: this.store.query('new_location', {id:  id}),
    });
  },

  setupController(controller, models) {
    controller.set('duration', models.duration);
    controller.set('locations', models.locations);
    controller.set('new_locations', models.new_locations);
  }
});
