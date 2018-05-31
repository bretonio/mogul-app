import { Vue } from 'meteor/meteormogul:vue-dist';

Vue.component('fm-footer',
{
  name: 'fm-footer',
  template: '#fm-footer-template',
  data: function () {
    return {
      version: 'muddy 0.0.1'
    }
  }
});
