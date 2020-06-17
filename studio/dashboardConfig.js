export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee9c66005dc831c24595117',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bf1zaqum',
                  apiId: '5486aef6-aafc-454d-842c-cf3dd5e31e02'
                },
                {
                  buildHookId: '5ee9c66077ccbd0458dd936f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3ska22o5',
                  apiId: '1fcfffc2-76a6-49d1-93d8-7ffdf19f87db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robi-richter/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3ska22o5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
