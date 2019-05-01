module.exports = function(plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/component.css.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Gatsby Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{name}}.jsx',
        templateFile: 'plop-templates/page.jsx.hbs',
      },
    ],
  })
}
