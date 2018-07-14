import Controller from '@ember/controller';

export default Controller.extend({
   
	actions:{
     createThing: function(){

       let rec = this.store.createRecord('user',{ firstname: this.get('firstname'), lastname: this.get('lastname'), email: this.get('email'), password: this.get('password'), password_confirmation: this.get('password_confirmation'), types: this.get('types')})

       rec.save();
       

     }
   }

});
