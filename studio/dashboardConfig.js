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
                  buildHookId: '621364c697598b14d15dfa7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mj6c7kvu',
                  apiId: '834d40ee-0633-4a0a-8466-67e4bf2d7292'
                },
                {
                  buildHookId: '621364c6fbba9b194ff3432c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a8jg9pf9',
                  apiId: 'cf21273b-9eb2-4df0-b7e3-31a930df8160'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jan-Forrier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-a8jg9pf9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
