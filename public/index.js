// @ts-nocheck

/**
 * application: paodebatata
 * 
 * powered by moreira 2021-08-27
 */
'use strict';



System.import('axios').then(res => {

  /** @type {AxiosInstance} */
  const axios = res.default;

  return axios.get('/index.txt').then(({ data }) => {
    axios.defaults.baseURL = `/${data}`;
    return axios.get('config').then(({ data }) => {
      return {axios, data }
    })
  })

}).then(({ axios, data }) => {

  return Promise.all([
    'react',            //0
    'react-dom',        //1
    'react-router',     //2
    // 'material-ui'       //3
  ].map(a => System.import(a).then(a => a.default || a))).then(([
    ReactJs,
    ReactDom,
    ReactRouterDom
  ]) => {

    /** @type {ReactJs} */
    const { Component, Suspense, lazy, createElement: h } = ReactJs.default;

    /** @type {ReactDom.render} */
    const { render } = ReactDom.default;

    /** @type {ReactRouterDom}} */
    const { Route, Link, Switch, HashRouter: Router } = ReactRouterDom.default;

    const links = Object.entries(data).map(([k, v]) => [`/${k}`, v]);
    const routes = Object.keys(data).map(receita => ({
      name: receita,
      props: { receita },
      component: lazy(() => System.import('receita-component'))
    }))

    // /** @type {MaterialUi}} */
    // const {
    //   Breadcrumbs,
    //   Typography,
    //   Container,
    //   Box,
    //   List,
    //   ListItem,
    //   GridList,
    //   MenuList,
    //   MenuItem
    // } = res[3].default;

    return { axios, Component, Suspense, h, render, Route, Link, Switch, Router, links, routes }

  })

}).then(({ }) => {

  console.log(routes)

  render(
    h('div', null, 'teste')
    ,
    (() => {

      document.head.querySelector('title').innerHTML = 'receitas';

      const _div = document.body.querySelector('div');
      // _div?.classList.add('ReceitaMainContainer');

      return _div;
    })()

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

