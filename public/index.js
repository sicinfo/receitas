// @ts-nocheck

/**
 * application: paodebatata
 * 
 * powered by moreira 2021-08-27
 */
'use strict';

Promise.all([
  'axios',            //0
  'react',            //1
  'react-dom',        //2
  'react-router',     //3
  'material-ui'      //4
].map(a => System.import(a))).then(async res => {

  /** @type {AxiosInstance} */
  const Axios = res[0].default;

  /** @type {ReactJs} */
  const {
    Component,
    lazy,
    createElement: h
  } = res[1].default;

  /** @type {ReactDom} */
  const { render } = res[2].default;

  /** @type {ReactRouterDom}} */
  const {
    HashRouter: Router,
    Route,
    Link,
    Switch
  } = res[3].default;

  /** @type {MaterialUi}} */
  const {
    Breadcrumbs,
    Typography,
    Container,
    Box,
    List,
    ListItem,
    GridList,
    MenuList,
    MenuItem
  } = res[4].default;

  /** @type {{data:ReceitasRoute}} */
  const { data } = await Axios.get('./data.json');

  /** @type {[ReactRoute]} */
  const routes = Object.keys(data)
    .filter(name => 'titulo' in data[name])
    .map(name => ({
      title: data[name].titulo,
      name,
      handler: lazy(() => System.import('receita-component').then(a => {
        /** @type {ReactComponent} */
        const component = a.default;

        return h(component, {
          receita: data[name],
          custos: data.custos
        })
      }))
    }));

  routes.unshift({
    exact: 'exact',
    name:'home',
    component: h('div', null, 'home')
  })
    
    
  //   'home');
  // Reflect.set(data, 'home', { titulo: 'home' })

  render(
    h(Router, null, [
      h(Container, null, [
        h(Typography, { variant: 'h4' }, 'receitas'),
        h(Breadcrumbs, null, routes.map(({ path: to, title }) => h(Link, { to }, title)))
      ]),
      h(Switch, null, routes.map(arg => h(Route, { ...arg })))

      // h(Switch, null, routes.map(({ exact, path, component }) => {
      //   const args = { path, component };
      //   // if (exact) args.exact = exact;

      //   console.log(args);

      //   return h(Route, args);
      // }))



      //       return h(Route, {
      //     path: `/${key}`,
      //     components: {
            
      //       () => {

      //       if (key === 'home')
      //         return h('div');
              
      //         // const ReceitaComponent = await System.import('receita-component').then(a => a.default)



      //       // return h(ReceitaComponent, {
      //       //   receita: data[key],
      //       //   custos: data.custos
      //       // })


      //       return h(System.import('receita-component').then(a => a.default), {
      //         receita: data[key],
      //         custos: data.custos
      //       })
      //     }
      //   })
      // }))
    ]),
    (() => {

      document.head.querySelector('title').innerHTML = 'receitas';

      const _div = document.body.querySelector('div');
      _div?.classList.add('ReceitaMainContainer');
      
      return _div;
    })()
  )

})

