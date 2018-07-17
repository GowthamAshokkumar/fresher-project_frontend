import DS from 'ember-data';
import attr from 'ember-data/attr';


export default DS.Model.extend({
    country: attr('string'),
    city: attr('string'),
    spot: attr('string')
    
});
