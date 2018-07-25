import Route from '@ember/routing/route';

export default Route.extend({
	
	model: function() {
    if(!this.get("session").getData()){
       this.transitionTo('login')
    }
   
    
    return  this.store.query('location',{'group':'country'});
  },
   actions: {
    
    logout: function() {
      this.get('session').logout();
      alert("successfully logout");
      this.transitionTo('login');

    }
  }

});
