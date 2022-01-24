/**
 * application: paodebatata
 * 
 * powered by moreira 2021-08-27
 */
'use strict';

//@ts-ignore
define([
  'axios',
  'react',
  'react-dom',
  'react-router',
  'material-ui'
], async (
  /** @type {AxiosInstance} */
  Axios,
  /** @type {ReactJs} */
  { 
    Component, 
    lazy, 
    createElement: h 
  },
  /** @type {ReactDom} */
  { 
    render 
  },
  /** @type {ReactRouterDom}} */
  { 
    HashRouter: Router, 
    Route, 
    Link, 
    Switch 
  },
  /** @type {MaterialUi}} */
  { 
    Breadcrumbs, 
    Typography, 
    Container, 
    Box, 
    List, 
    ListItem, 
    GridList, 
    MenuList, 
    MenuItem 
  }
) => {

  /** @type {{data:ReceitasRoute}} */
  const { data } = await Axios.get('./data.json');
  const paths = Object.keys(data).filter(key => 'titulo' in data[key])

  //@ts-ignore
  // const ReceitaComponent = await System.import('receita-component').then(a => a.default)
  paths.some(key => {
    //@ts-ignore
    data[key].component = () => h(
      //@ts-ignore
      System.import('receita-component'),
      { receita: data[key], "custos": data.custos }
    )
  });

  paths.unshift('admin', 'home')
  data.home = { 
    titulo: 'home',
    //@ts-ignore
    component: () => System.import('home-component').then(a => a.default)
  }
  data.admin = { 
    titulo: 'admin',
    //@ts-ignore
    component: () => h(System.import('admin-component'))
  }

  {
    let title = document.head.querySelector('title');
    if (!title)
      document.head.appendChild(title = document.createElement('title'));
    title.innerHTML = 'receitas';
  }

  render(
    h(Router, null, [
      h(Container, null, [
        h(Typography, { variant: 'h4' }, 'receitas'),
        h(Breadcrumbs, null, paths.map(key => h(Link, {
          to: `/${key}`
        }, data[key].titulo)))
      ]),
      h(Switch, null, paths.map(key => {
        return h(Route, {
          path: `/${key}`, 
          component: data[key].component
        })
      }))
    ]),
    (() => {
      const _div = document.body.querySelector('div');
      _div?.setAttribute(
        'style',
        'display:grid;grid-template-columns:1fr 3fr'
      );
      return _div;
    })()
  )

})
