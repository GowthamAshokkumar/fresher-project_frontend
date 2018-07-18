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
      return this.store.query('accomadation', {id:params.id});
	},
});
