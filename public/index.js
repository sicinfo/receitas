/**
 * application: paodebatata
 * 
 * powered by moreira 2021-08-27
 */
'use strict';

Promise.all([
  'axios',
  'react',
  'react-dom',
  'react-router',
  'material-ui'
].map(a => System.import(a))).then(async res => {

  /** @type {AxiosInstance} */
  const Axios = res[0].default;

  /** @type {ReactJs} */
  const { Component, lazy, createElement: h } = res[1].default;

  /** @type {ReactDom} */
  const { render } = res[2].default;

  /** @type {ReactRouterDom}} */
  const { HashRouter: Router, Route, Link, Switch } = res[3].default;

  /** @type {MaterialUi}} */
  const { Breadcrumbs, Typography, Container, Box, List, ListItem, GridList, MenuList, MenuItem } = res[4].default;

  /** @type {{data:ReceitasRoute}} */
  const { data } = await Axios.get('./data.json');
  const paths = Object.keys(data).filter(key => 'titulo' in data[key]);

  paths.unshift('home');
  Reflect.set(data, 'home', { titulo: 'home' })

  const ReceitaComponent = await System.import('receita-component').then(a => a.default)

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
          component: () => key === 'home' ? h('div') : h(ReceitaComponent, { receita: data[key] })
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

