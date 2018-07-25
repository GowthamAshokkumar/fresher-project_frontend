import Ember from 'ember';
export default Ember.Controller.extend({
	    duration:null,
	    locations:null,
	    new_locations:null,
		init: function(){
			var id=localStorage.getItem("id");
			this.set('duration',localStorage.getItem('duration'));
			var loc=this.store.query('old_location', {id: id}).then(
			(loc)=>{
                this.set('locations',loc);
                var n=this.store.query('new_location', {id:  id})
			    this.set('new_locations',n);
			},()=>{

			});
			
			 
			return {};
		},
		actions:{
           removeLocation: function(loc){
           	 var duration=this.get('duration');
           	 if(loc.duration == 'full_day' && duration >= 1 ){
                 var lo=this.store.query('old_location', {removeid:loc.id}).then(
			     (lo)=>{
                  this.set('locations',lo);
			      var n=this.store.query('new_location', {putid:loc.id})
			      this.set('new_locations',n);
			      this.set('duration',(duration-1));
			     },()=>{
               
			     });
           	 }else if(loc.duration == 'half_day' && duration >= 0.5 ){
                 var lo=this.store.query('old_location', {removeid:loc.id}).then(
			     (lo)=>{
                  this.set('locations',lo);
			      var n=this.store.query('new_location', {putid:loc.id})
			      this.set('new_locations',n);
			      this.set('duration',(duration-0.5));
			     },()=>{
               
			     });
           	 }
             
			 
           },
           addLocation: function(loc){
           	 var duration=this.get('duration');
           	 var n=this.store.query('new_location', {removeid:loc.id}).then(
			(lo)=>{
             this.set('new_locations',lo);
           	 var l=this.store.query('old_location', {putid:loc.id})
			 this.set('locations',l);
			},()=>{
               
			});
			if(loc.duration == 'full_day'){
               this.set('duration',(duration+1));
			}else if(loc.duration == 'half_day'){
               this.set('duration',(duration+0.5));
			}
			
           }
		}
});
