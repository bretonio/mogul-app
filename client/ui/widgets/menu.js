import { Vue } from 'meteor/meteormogul:vue-dist';

Vue.component('fm-menu',
{
  name: 'fm-menu',
  template: '#fm-menu-template',
  data () {
    return {
      items:
      [
          {
            title: 'Action Plan',
            items:
            [
              {
                title: 'Meal',
                route: '/foo'
              },
              {
                title: 'Event',
                route: '/bar'
              },
              {
                title: 'Household',
                route: '/foo'
              },
              {
                title: 'Organization',
                route: '/bar'
              },
              {
                title: 'Community',
                route: '/foo'
              }
            ]
          },
          {
            title: 'Observations',
            items:
            [
              {
                title: 'Commend',
                route: '/foo'
              },
              {
                title: 'Recommend',
                route: '/bar'
              }
            ]
          },
          {
            title: 'Sustainability 101',
            items:
            [
              {
                title: 'Process',
                route: '/foo'
              },
              {
                title: 'Benchmarks',
                route: '/bar'
              },
              {
                title: 'Pathways',
                route: '/foo'
              },
              {
                title: 'References',
                route: '/bar'
              }
            ]
          },
          {
            title: 'Directory',
            items:
            [
              {
                title: 'People',
                route: '/foo'
              },
              {
                title: 'Organizations',
                route: '/bar'
              },
              {
                title: 'Agencies',
                route: '/foo'
              },
              {
                title: 'Projects',
                route: '/foo'
              },
              {
                title: 'Products',
                route: '/bar'
              },
              {
                title: 'Services',
                route: '/foo'
              }
            ]
          },
          {
            title: 'Policy',
            items:
            [
              {
                title: 'Incentives',
                route: '/foo'
              },
              {
                title: 'Ordinances',
                route: '/bar'
              },
              {
                title: 'Regulations',
                route: '/foo'
              },
              {
                title: 'Laws',
                route: '/bar'
              },
              {
                title: 'Proposals',
                route: '/foo'
              }
            ]
          },
          {
            title: 'Resources',
            items:
            [
              {
                title: 'Handbook',
                route: '/foo'
              },
              {
                title: 'Forum',
                route: '/bar'
              },
              {
                title: 'Newsletter',
                route: '/foo'
              },
              {
                title: 'Events',
                route: '/bar'
              },
              {
                title: 'Seminars',
                route: '/bar'
              }
            ]
          },
          {
            title: 'Future Maine',
            items:
            [
              {
                title: 'About',
                route: '/foo'
              },
              {
                title: 'Join',
                route: '/bar'
              },
              {
                title: 'Refer',
                route: '/foo'
              }
            ]
          }
      ]
    }
  }
});
