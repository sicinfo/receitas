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

  _export('default', (/** @type {Receita} */ { receita }) => {

    const { createElement: h, useState } = React;
    const { Container, Typography, InputBase, Input, Box, List, ListItem } = MaterialUi;
    const { titulo, rendimento, ingredientes = [], preparo } = receita;

    const [values, setState] = useState({})

    const ListIngredientes = props => {
      const { quantidade, salto } = values[props.descricao];
      return h(ListItem, null, `${quantidade * salto} ${props.descricao}`)
    }

    return h(Container, 
      {
        onChange(evt) {
          const salto = evt.target.value / rendimento.quantidadeMinimo;
          Object.keys(values).some(descricao => {
            values[descricao].salto = salto;
            setState({ ...values });
          })
        }
      }, [
      h(Box, { component: 'h2' }, titulo),
      h(Typography, null, [
        h(Box, { component: 'span' }, 'rendimento '),
        h(Input, {
          type: 'range',
          name: 'InputQuantidade',
          defaultValue: rendimento.quantidadeMinimo,
          inputProps: {
            min: rendimento.quantidadeMinimo,
            max: rendimento.quantidadeMaximo,
            step: rendimento.quantidadeSalto
          }
        }),
        h(Box, { component: 'span' }, ` ${rendimento.unidade} ${rendimento.descricao}`)
      ]),
      h(Box, { component: 'h3' }, `ingredientes`),
      h(List, null, ingredientes.map(ingr => {
        
        const descricao = `${ingr.unidade} ${ingr.descricao}`;

        if (!(descricao in values)) {
          values[descricao] = { quantidade: ingr.quantidadeMinimo, salto: 1 };
          setState(values)
        }

        return h(ListIngredientes, { descricao })
      })),
      h(Box, { component: 'h3' }, `modo de preparo`),
      h(List, null, preparo?.modo.map(item => h(ListItem, null, item)))
    ])
  })



  //   const elems = [];
    
  //   elems.push(
  //       h(Box, { component: 'h2' }, titulo),
  //       h(Typography, null, [
  //         h(
  //           Box,
  //           {
  //             component: 'span'
  //           },
  //           'rendimento '
  //         ),
  //         h(
  //           Input,
  //           {
  //             type: 'range',
  //             name: 'InputQuantidade',
  //             onChange: evt => {
  //               const step = evt.target.value / rendimento.quantidadeMinimo;
  //             },
  //             defaultValue: rendimento.quantidadeMinimo,
  //             inputProps: {
  //               min: rendimento.quantidadeMinimo,
  //               max: rendimento.quantidadeMaximo,
  //               step: rendimento.quantidadeSalto
  //             }
  //           }
  //         ),
  //         h(
  //           Box,
  //           {
  //             component: 'span'
  //           },
  //           ` ${rendimento.unidade} ${rendimento.descricao}`
  //         )
  //       ])
  //     )

  //     if (preparo?.tempo) elems.push(
  //       h(Typography, null, `tempo de preparo  ${preparo?.tempo}`)
  //     )

  //     if (ingredientes) elems.push(
  //       h(Box, { component: 'h3' }, `ingredientes`),
  //       h(List, null, ingrs.map(ingr => h(ListIngredientes, ingr)))
  //     )











  //   const ingrs = ingredientes.map((ingr, index) => {

  //     const descricao = ` ${ingr.unidade} ${ingr.descricao}`;
  //     const quantidade = ingr.quantidadeMinimo;

  //     console.log(values);
        
  //     setValue(...values, ...Object.fromEntries([[descricao, { quantidade, index }]]));

  //     return { descricao, quantidade }
  //   });

  
  //   const Elems = ({ values, setValue }) => {

  //     const elems = [];

  //     if (attributes.key && attributes.key !== 'home' && titulo) {
  
  //       elems.push(
  //         h(Box, { component: 'h2' }, titulo),
  //         h(Typography, null, [
  //           h(
  //             Box,
  //             {
  //               component: 'span'
  //             },
  //             'rendimento '
  //           ),
  //           h(
  //             Input,
  //             {
  //               type: 'range',
  //               name: 'InputQuantidade',
  //               onChange: evt => {
  //                 const step = evt.target.value / rendimento.quantidadeMinimo;
  //               },
  //               defaultValue: rendimento.quantidadeMinimo,
  //               inputProps: {
  //                 min: rendimento.quantidadeMinimo,
  //                 max: rendimento.quantidadeMaximo,
  //                 step: rendimento.quantidadeSalto
  //               }
  //             }
  //           ),
  //           h(
  //             Box,
  //             {
  //               component: 'span'
  //             },
  //             ` ${rendimento.unidade} ${rendimento.descricao}`
  //           )
  //         ])
  //       )

  //       if (preparo?.tempo) elems.push(
  //         h(Typography, null, `tempo de preparo  ${preparo?.tempo}`)
  //       )

  //       if (ingredientes) elems.push(
  //         h(Box, { component: 'h3' }, `ingredientes`),
  //         h(List, null, ingrs.map(ingr => h(ListIngredientes, ingr)))
  //       )

  //           // return h(ListItem, null, `${ingr.quantidadeMinimo} ${ingr.unidade} ${ingr.descricao}`)

  //       if (preparo?.modo) elems.push(
  //         h(Box, { component: 'h3' }, `modo de preparo`),
  //         h(List, null, preparo?.modo.map(item => h(ListItem, null, item)))
  //       )

  //     }

  //     return h(Container, { component: 'section' }, elems);
  //   }

  //   return h(() => {
  //     const [values, setValue] = useState({});

  //     return h(Elems, { values, setValue });
  //   })

  // });

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