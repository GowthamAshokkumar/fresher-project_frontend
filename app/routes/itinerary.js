import Route from '@ember/routing/route';

export default Route.extend({
	model:function(){
		if(!this.get("session").getData()){
          this.transitionTo('login')
        }
        var id=localStorage.getItem("id"); 
         
        return Ember.RSVP.hash({
           'locations':this.store.query('new_location', {id: id}),
           'accomadations':this.store.query('accomadation',{location_id:id})
        });
    },

    setupController(controller, models) {
      controller.set('locations', models.locations);
      controller.set('accomadations',models.accomadations);
    }
});
