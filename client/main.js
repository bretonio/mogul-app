import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';
import { Accounts } from 'meteor/accounts-base';
import { router } from './routes.js';

Vue.use(VueRouter);

vm = new Vue({
  router,
  template: '#app-template',
  data: {
    showDrawer: false
  }
}).$mount('#app');
