import Controller from '@ember/controller';

export default Controller.extend({
   
  Countries:null,

	actions:{
     accomadationAction: function(){
       
       let rec = this.store.createRecord('accomadation',{ name: this.get('name'), country: this.get('country'), city: this.get('city'), price: this.get('price'), spot: this.get('spot')})

       rec.save().then(()=> {
       	alert("successfully saved")
       	this.transitionToRoute("accomadation")
       },()=>{
       	alert("enter valid credentials")
       });
       

     },
     logout: function() {
      this.get('session').logout();
      alert("successfully logout");
      this.transitionToRoute('login');

    },
    selectCountry: function(country){

    }
   },
   

});