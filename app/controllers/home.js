import Ember from 'ember';
export default Ember.Controller.extend({
	    country: null,
	    duration:null,
		init: function(){
			
			return {};
		},
		actions:{

			setSelection: function(data){
               this.set('country',data);
			},
			setDuration: function(data){
               this.set('duration',data);
			},

			search: function(m) {
			  localStorage.setItem('country',this.get('country'));
			  localStorage.setItem('duration',this.get('duration'));
              this.transitionToRoute('search', { queryParams: { country: this.get('country') ,duration: this.get('duration')}});
            },

		}
});
