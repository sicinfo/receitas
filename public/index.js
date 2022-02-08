// @ts-nocheck

/**
 * application: paodebatata
 * 
 * powered by moreira 2021-08-27
 */
'use strict';

document.head.querySelector('title').innerHTML = 'receitas';

System.import('axios').then(async res => {
  
  /** @type {AxiosInstance} */
  const axios = res.default;

  return Promise.all(
    [
      'react',
      'react-dom',
      'react-router-dom',
      'react-router',
      'history'
    ].map(res => System.import(res).then(res => res.default))
      .concat(axios.get('/index.txt').then(({ data }) => {
        axios.defaults.baseURL = `/${data}`;
        return axios.get('config')
      }))
  ).then((
    /** @type [ReactJs, ReactDom, ReactRouterDom, ReactRouter, record<string,string>] */
    [
      { Component, Suspense, lazy, createElement: h }, 
      { render }, 
      { Route, NavLink: Link, Routes, BrowserRouter: Router, Navigate: Redirect }, 
      { },
      { createBrowserHistory },
      { data }
    ]
  ) => {
    
//     // /** @type {MaterialUi}} */
//     // const {
//     //   Breadcrumbs,
//     //   Typography,
//     //   Container,
//     //   Box,
//     //   List,
//     //   ListItem,
//     //   GridList,
//     //   MenuList,
//     //   MenuItem
//     // } = res[3].default;

    return { axios, Component, Suspense, lazy, h, render, Redirect, Route, Link, Routes, Router, data, history: createBrowserHistory() }
  })

}).then(({ render, Component, h, Router, Suspense, Routes, Redirect, Route, Link, lazy, data, history }) => {

  const el = document.body.querySelector('div');
  el?.classList.add('ReceitasMainContainer');

  const links = Object.keys(data).map(to => {
    return h('div', null, h(Link, { to }, data[to]))
  })

  const routes = Object.keys(data).map(name => {
    return h(Route, {
      name,
      path: `/${name}`,
      element: h(lazy(() => System.import('receita-component')), { title: 'receitas' })
    })
  })

  links.unshift(h('div', null, h(Link, { to: '/' }, 'home')))

  const HomeComponent = () => System.import('home-component')

  routes.unshift(h(Route, {
    path: '/',
    element: h(lazy(HomeComponent))
  }));

  // routes.push(h(Redirect, { from: '*', to: '/' }))

  
  routes.push(h(Route, {
    path: '*',
    element: h(Redirect, { replace: true, to: '/' })
  }));

  render(
    h(Suspense, 
      { fallback: h('div', null, 'wait...') }, 
      h(Router, { history }, [
        h('nav', null, links),
        h(Routes, null, routes)
      ])
    ), el
   )

})




//     render(
//       // h('div', null, [
//       //   h('div', null, [
//       //     h('h4', null, 'receitas'),
//       //     h('ul', null, links.map(([to, title]) => h('li', null, "h(Link, { to }, title)")))
//       //   ]),
//       //   // h(Suspense, 
//       //   h('div', null,
//       //     // {fallback: h('div', null, 'wait...')}, 
//       //     h('div', null, routes.map(({name}) => h('div', null, name)))
//       //     // h(Switch, null, routes.map(({ props, name, component }) => h(Route, null, h(component, { ...props }))))
//       //   )
//       // ])
//       h(Router, null,
//         // h(Container, null, [
//         h('div', null, [
//           //     h(Typography, { variant: 'h4' }, 'receitas'),
//           //     h(Breadcrumbs, null, links.map(([to, title]) => h(Link, { to }, title)))
//           //   ]),
//           //   h(Suspense, 
//           //     {fallback: h('div', null, 'wait...')}, 
//           //     h(Switch, null, routes.map(({ props, name, component }) => h(Route, { name }, h(component, { ...props }))))
//           //   )
//         ])
//         ,
//         (() => {

//           document.head.querySelector('title').innerHTML = 'receitas';

//           const _div = document.body.querySelector('div');
//           // _div?.classList.add('ReceitaMainContainer');

//           return _div;
//         })()
//       )

//     // h(Switch, null, routes.map(({ exact, path, component }) => {
//     //   const args = { path, component };
//     //   // if (exact) args.exact = exact;

//     //   console.log(args);

//     //   return h(Route, args);
//     // }))





//   })
// })





















//       // /** @type {{data:ReceitasRoute}} */

//       // const { data } = await Axios.get('./data.json');

//       // /** @type {[ReactRoute]} */
//       // const routes = Object.keys(data)
//       //   .filter(name => 'titulo' in data[name])
//       //   .map(name => ({
//       //     title: data[name].titulo,
//       //     name,
//       //     handler: lazy(() => System.import('receita-component').then(a => {
//       //       /** @type {ReactComponent} */
//       //       const component = a.default;

//       //       return h(component, {
//       //         receita: data[name],
//       //         custos: data.custos
//       //       })
//       //     }))
//       //   }));

//       // routes.unshift({
//       //   exact: 'exact',
//       //   name: 'home',
//       //   component: h('div', null, 'home')
//       // })


//       // //   'home');
//       // // Reflect.set(data, 'home', { titulo: 'home' })

//       // render(
//       //   h(Router, null, [
//       //     h(Container, null, [
//       //       h(Typography, { variant: 'h4' }, 'receitas'),
//       //       h(Breadcrumbs, null, routes.map(({ path: to, title }) => h(Link, { to }, title)))
//       //     ]),
//       //     h(Switch, null, routes.map(arg => h(Route, { ...arg })))

//       //     // h(Switch, null, routes.map(({ exact, path, component }) => {
//       //     //   const args = { path, component };
//       //     //   // if (exact) args.exact = exact;

//       //     //   console.log(args);

//       //     //   return h(Route, args);
//       //     // }))



//       //     //       return h(Route, {
//       //     //     path: `/${key}`,
//       //     //     components: {

//       //     //       () => {

//       //     //       if (key === 'home')
//       //     //         return h('div');

//       //     //         // const ReceitaComponent = await System.import('receita-component').then(a => a.default)



//       //     //       // return h(ReceitaComponent, {
//       //     //       //   receita: data[key],
//       //     //       //   custos: data.custos
//       //     //       // })


//       //     //       return h(System.import('receita-component').then(a => a.default), {
//       //     //         receita: data[key],
//       //     //         custos: data.custos
//       //     //       })
//       //     //     }
//       //     //   })
//       //     // }))
//       //   ]),
//       //   (() => {

//       //     document.head.querySelector('title').innerHTML = 'receitas';

//       //     const _div = document.body.querySelector('div');
//       //     _div?.classList.add('ReceitaMainContainer');

//       //     return _div;
//       //   })()
//       // )

