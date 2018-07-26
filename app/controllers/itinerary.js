import Controller from '@ember/controller';
import $ from 'jquery';

var ajax = $.ajax;

export default Controller.extend({
	accomadation_id:null,
	days: Ember.computed('locations.@each', function(){
       var that = this;
       var a=0;
       var flag=false;
       var flag1=false;
       var t=0;
       return this.get('locations').map(function(location){
          flag=false;
       	  if(location.duration == "full_day"){
       	  	 flag1=true;
             a+=1;
       	  }else if(location.duration == "half_day"){
       	  	 flag1=false;
             a+=0.5;
       	  }
       	  console.log(a,flag,t);
       	  if(Math.ceil(a)!=t){
       	  	t=Math.ceil(a);
       	  	flag=true
       	  }
          return {
          	'isfullday':flag1,
          	'flag':flag,
            'location': location,
            'day': Math.ceil(a),
          };
      });
}),
 actions:{
 	setAccomadation:function(accomadation_id){
 		this.set('accomadation_id',accomadation_id)
 	}
 }	
});
