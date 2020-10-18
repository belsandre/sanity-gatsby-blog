export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8cc227590e58ea58d5c2ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1qe1k6fw',
                  apiId: '048f2029-ddc4-4aeb-b153-b332778d3a61'
                },
                {
                  buildHookId: '5f8cc22700a2dffcb6db0793',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bcjz67kv',
                  apiId: '1ba68006-2ba5-4e3d-9db2-59c69f1fbf10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/belsandre/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bcjz67kv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
