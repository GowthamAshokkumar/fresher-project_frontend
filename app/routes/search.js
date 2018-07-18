import Route from '@ember/routing/route';
export default Route.extend({
    queryParams: {
     country: {
       refreshModel: true
     }
    },
	model:function(params){
		if(!this.get("session").getData()){
          this.transitionTo('login')
        }
        var result=this.store.peekAll('location').filterBy('country', params.country);
        console.log(result);
        if(result.get('length')==0){
        	alert("result is empty")
        	this.transitionTo('home');
        }
      return result
	},
	actions:{
		locationAction:function(location){
			console.log(location.id);
			this.store.findAll('location');	
		    this.transitionTo('spot',{ queryParams: { id: location.id }});

		}
	}
});
