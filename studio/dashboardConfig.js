export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d2355dec09ad535baaed298',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-21g439y2',
                  apiId: 'd0e164f0-ad46-4e7e-98b8-72723c187dd3'
                },
                {
                  buildHookId: '5d2355deb8ccf2782f6ced7d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f6of1n8c',
                  apiId: '7e5e14f3-b6d9-44c9-afad-94ade4621f7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MoonStar20/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f6of1n8c.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
