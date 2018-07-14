 import { bind } from '@ember/runloop'
import { computed } from '@ember/object'
import { Promise } from 'rsvp'
import $ from 'jquery';
import Service from '@ember/service'
var ajax = $.ajax;
var ajaxPrefilter = $.ajaxPrefilter;

export default Service.extend({
  sessionData: null,
  isAuthenticated: computed.alias('sessionData'),

  login: function(credentials) {
    return ajax({type: 'POST', url: 'login', data: credentials})
      .then(bind(this, 'authenticationDidSucceed'));
  },

  logout: function() {
    return ajax({type: 'DELETE', url: 'logout'})
      .then(bind(this, 'logoutDidSucceed'));
  },

  fetch: function() {
    return new Promise(function(resolve, reject) {
      if (this.get('sessionData')) {
        resolve();
      } else {
        ajax({type: 'GET', url: 'session'})
          .then(bind(this, 'authenticationDidSucceed'))
          .then(resolve, reject);
      }
    }.bind(this));
  },

  authenticationDidSucceed: function(response) {
    this.set('sessionData', response);
    var token = response.csrf_token;
    ajaxPrefilter(function(options, originalOptions, jqXHR) {
      return jqXHR.setRequestHeader('X-CSRF-Token', token);
    });
  },

  logoutDidSucceed: function() {
    this.set('sessionData', null);
  }
});