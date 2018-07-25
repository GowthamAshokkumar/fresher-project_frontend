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
        var result=this.store.query('location',{country: params.country,group: "city"});
        // if(result.get('length')==0){
        // 	alert("result is empty")
        // 	this.transitionTo('home');
        // }
      return result
	},
	actions:{
		locationAction:function(location){
			localStorage.setItem('id',location.id);
			
		    this.transitionTo('spot',{ queryParams: { id: location.id }});

		},
		logout: function() {
         this.get('session').logout();
         alert("successfully logout");
         this.transitionTo('login');

       }
    }
});

