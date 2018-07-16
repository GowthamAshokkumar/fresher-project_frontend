import Controller from '@ember/controller';

export default Controller.extend({
   

	actions:{
     accomadationAction: function(){
       
       let rec = this.store.createRecord('accomadation',{ name: this.get('name'), country: this.get('country'), city: this.get('city'), price: this.get('price'), spot: this.get('spot')})

       rec.save();
       

     }
   },
   

});