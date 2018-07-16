import DS from 'ember-data';
import attr from 'ember-data/attr';


export default DS.Model.extend({
    name: attr('string'),
    country: attr('string'),
    city: attr('string'),
    price: attr('string'),
    spot: attr('string'),
});
