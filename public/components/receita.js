/**
 * application receitas
 * 
 * powered by moreira 2021-08-31
 */
/** 
 * @typedef Props 
 * @property {?string} key
 */
 System.register([
    'react',
    'material-ui'
  ], (_export, _context) => {
    /** @type {ReactJs} */ let React;
    /** @type {MaterialUi} */ let MaterialUi;
  
    _export('default', (/** @type {ReceitasRoute} */ data) => (/** @type {*} */ { attributes }) => {
      const { createElement: h } = React;
      const { Input, Box, List, ListItem } = MaterialUi;
      const { key } = attributes;
  
      /* @type {any[]} */
      const elems = [];
  
      if (key && key !== 'home' && (key in data)) {
  
        const {
          titulo,
          rendimento,
          ingredientes,
          preparo,
        } = data[key];
  
        if (!rendimento.quantidade) rendimento.quantidade = 1;
  
        elems.push(
          h(Box, { component: 'h2' }, titulo),
          h(Box, null, [
            h(Box, { component: 'span' }, 'rendimento '),
            h(Input, { type: 'number', value: rendimento.quantidade }),
            h(Box, { component: 'span' }, ` ${rendimento.unidade} ${rendimento.descricao}`)
          ])
        )
  
        if (preparo?.tempo) elems.push(
          h(Box, { component: 'p' }, `tempo de preparo  ${preparo?.tempo}`)
        )
  
        if (ingredientes) elems.push(
          h(Box, { component: 'h3' }, `ingredientes`),
          h(List, null, ingredientes.map(ingr => {
            return h(ListItem, null, `${ingr.quantidade} ${ingr.unidade} ${ingr.descricao}`)
          }))
        )
  
        if (preparo?.modo) elems.push(
          h(Box, { component: 'h3' }, `modo de preparo`),
          h(List, null, preparo?.modo.map(item => h(ListItem, null, item)))
        )
  
      }
  
      return h(Box, { component: 'section' }, elems)
    });
  
    return {
      setters: [
        arg => { React = arg.default },
        arg => { MaterialUi = arg.default }
      ]
    }
  
  })
  
  
  
  
    // return {
    //   execute: () => Promise.all(.map(a => System.import(a).then(a => a.default)))
    //     .then(res => {
    //       /** @type {ReactJs} */ 
    //       const { createElement: h } = res[0];
  
    //       /** @type {ReactComponent} */
    //       const InputComponent = res[1];
  
    //       let count = 0;
  
    //       _export('default',
    //         (/** @type {ReceitasRoute} */ data) =>
    //           (/** @type {*} */ {attributes}) => {
    //             const { key } = attributes;
  
    //             /* @type {any[]} */
    //             const elems = [];
  
    //             if (key && key !== 'home' && (key in data)) {
  
    //               const { 
    //                 titulo,
    //                 rendimento,
    //                 ingredientes, 
    //                 preparo,
    //               } = data[key];
  
    //               if (!rendimento.quantidade) rendimento.quantidade = 1;
  
    //               elems.push(
    //                 h('h2', null, titulo),
    //                 h('p', null, [
    //                   h('span', null, 'rendimento '),
    //                   h(InputComponent, { type: 'number', value: rendimento.quantidade, size: 4 } ),
    //                   h('span', null, ` ${rendimento.unidade} ${rendimento.descricao}`)
    //                 ])
    //               ) 
  
    //               if (preparo?.tempo) elems.push(
    //                 h('p', null, `tempo de preparo  ${preparo?.tempo}`)
    //               )
  
    //               if (ingredientes) elems.push(
    //                 h('h3', null, `ingredientes`),
    //                 h('ol', null, ingredientes.map(ingr => h('li', null, `${ingr.quantidade} ${ingr.unidade} ${ingr.descricao}`)))
    //               )
  
    //               if (preparo?.modo) elems.push(
    //                 h('h3', null, `modo de preparo`),
    //                 h('ul', null, preparo?.modo.map(faz => h('li', null, faz)))
    //               )
  
    //             }
  
    //             return h('section', null, elems)
    //           });
  
    //     })
    // }
  //})