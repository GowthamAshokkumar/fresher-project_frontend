import DS from 'ember-data';
import attr from 'ember-data/attr';


export default DS.Model.extend({
    firstname: attr('string'),
    lastname: attr('string'),
    email: attr('string'),
    password: attr('string'),
    password_confirmation: attr('string'),
    types: attr('string'),
    
});
