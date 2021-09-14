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

    const [values, setState] = useState({ 
      __quantidade: rendimento.quantidadeMinimo 
    })

    const ListIngredientes = props => {
      const { quantidade, salto } = values[props.descricao];
      return h(ListItem, null, `${quantidade * salto} ${props.descricao}`)
    }

    return h(Container, null, [
      h(Box, { component: 'h2' }, titulo),
      h(Typography, null, [
        h(Box, { component: 'span' }, 'porções '),
        h(Input, {
          type: 'range',
          name: 'InputQuantidade',
          defaultValue: rendimento.quantidadeMinimo,
          inputProps: {
            min: rendimento.quantidadeMinimo,
            max: rendimento.quantidadeMaximo,
            step: rendimento.quantidadeSalto
          },
          onChange: (evt) => {
            evt.stopPropagation();
            const salto = evt.target.value / rendimento.quantidadeMinimo;
            values.__quantidade = evt.target.value;
            Object.keys(values)
              .filter(key => key[0] !== '__')
              .forEach(key => { values[key].salto = salto });
            setState({ ...values });
          }  
        })
      ]),
      h(Typography, null, [
        h(Box, { component: 'span' }, 'rendimento '),
        h(Box, { component: 'span' }, values.__quantidade),
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