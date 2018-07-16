import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
    console.log(this.get("session").isAuthenticated);
    return {};
  }
});
