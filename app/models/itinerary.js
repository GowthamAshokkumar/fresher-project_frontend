import DS from 'ember-data';
import attr from 'ember-data/attr';


export default DS.Model.extend({
    
    location_id: attr('integer'),
    accomadation_id: attr('integer'),
   
});
