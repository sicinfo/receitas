/**
 * application receitas
 * 
 * @author moreira 2021-08-31
 */
'use strict'

System.register(['axios', 'react'], async (_export, _context) => {
  
  /** @type {ReactJs} */ let ReactJs;
  /** @type {AxiosInstance} */ let axios;
})
  
  const getReceita = async (/** @type{string} */ name) => {
    return await axios.get(`receita/${name}`).then(({ data }) => data);
  }

  /**
   * @param {Record<string,string>} arg
   */
  const _default = ({name}) => {
    const { createElement: h, useState, Component } = ReactJs;

    const data = getReceita(name);
    
    const { 
      titulo: tit,
      rendimento: { 
        descricao: desc, 
        unidade: und, 
        quantidade: { 
          minimo: min, 
          maximo: max 
        }, 
        preparo: prep 
      },
      ingredientes: ings
    } = data;

  // // } = /** @type {any} */ (await axios.get(`receita/${name}`).then(({ data }) => data));
    
    // /** @type {[any,any]} */
    // const [values, setState] = useState({
    //   __quantidade: min,
    //   __custo: 0,
    //   __salto: 1
    // });

    // /** 
    //  * @param {Record<string,string>} props
    //  */
    // const ListIngredientes = props => {
    //   const { descricao: desc } = props;
    //   const { quantidade: qtd, salto } = values[desc];
    //   return h('li', null, `${qtd * values.__salto} ${desc}`)
    // }

    // return h('div', null, tit)
     
    // return h('div', null, [
    //   h('h2', null, tit),
    //   h('div', null, [
    //     h('span', null, 'porções '),
    //     h('input', {
    //       type: 'range',
    //       name: 'InputQuantidade',
    //       defaultValue: min,
    //       inputProps: { min, max, step: min },
    //       onChange: (evt) => {
    //         evt.stopPropagation();
    //         const { value, step } = /** @type {Record<string,any>} */ (evt.target);
    //         values.__salto = 0 + value / step;
    //         values.__quantidade = value;
    //         setState({ ...values });
    //       }
    //     })
    //   ]),
    //   h('div', null, [
    //     h('span', null, 'rendimento '),
    //     h('span', null, values.__quantidade),
    //     h('span', null, ` ${und} ${desc}`)
    //   ]),
    //   h('h3', null, [
    //     h('span', null, 'ingredientes  -  custo R$ '),
    //     h('span', null, Math.ceil(values.__custo * values.__salto * 100) / 100)
    //   ]),
    //   h('ul', null, /** @type {Record<string,any>[]} */ (ings).map(({unidade: und, descricao: desc, quantidade: qtd, custo: cust }) => {

    //     // const key = (a => `${custos[a].unidade} ${a}`)(ingr.descricao);
    //     const key = `${und} ${desc}`;

    //     if (!(key in values)) {
    //       values[key] = {
    //         quantidade: qtd,
    //         custo: cust
    //       };
    //       values.__custo += values[key].custo
    //       setState({ ...values });
    //     }

    //     return h(ListIngredientes, { descricao: key });
    //   })),
    //   h('h3', null, `modo de preparo`),
    //   h('ol', null, prep?.modo.map((/** @type {string} */ item) => h('li', null, item)))
    // ])
// }

  return {
    setters: [
      a => { axios = a.default },
      a => { ReactJs = a.default }
    ],

    execute: () => {
      _export('version', '0.1.0');

      _export('default', _default)
    }
  }
})


// /**
//  * @typedef Props 
//  * @property {?string} key
//  */

// System.register([
//   'react',
//   'material-ui'
// ], (_export, _context) => {
//     /** @type {ReactJs} */ let React;
//     /** @type {MaterialUi} */ let MaterialUi;

//   const _default = () => {

//     const { createElement: h, useState, Component } = React;
//     const { Container, Typography, InputBase, Input, Box, List, ListItem } = MaterialUi;
//     const { titulo, rendimento, ingredientes = [], preparo } = receita;
//     const { minimo: min, maximo: max } = rendimento.quantidade;

//     const [values, setState] = useState({
//       __quantidade: min,
//       __custo: 0,
//       __salto: 1
//     })

//     const ListIngredientes = props => {
//       const { quantidade, salto } = values[props.descricao];
//       return h(ListItem, null, `${quantidade * values.__salto} ${props.descricao}`)
//     }

//     return h(Container, null, [
//       h(Box, { component: 'h2' }, titulo),
//       h(Typography, null, [
//         h(Box, { component: 'span' }, 'porções '),
//         h(Input, {
//           type: 'range',
//           name: 'InputQuantidade',
//           defaultValue: min,
//           inputProps: { min, max, step: min },
//           onChange: (evt) => {
//             evt.stopPropagation();
//             const { value, step } = evt.target;
//             values.__salto = 0 + value / step;
//             values.__quantidade = value;
//             setState({ ...values });
//           }
//         })
//       ]),
//       h(Typography, null, [
//         h(Box, { component: 'span' }, 'rendimento '),
//         h(Box, { component: 'span' }, values.__quantidade),
//         h(Box, { component: 'span' }, ` ${rendimento.unidade} ${rendimento.descricao}`)
//       ]),
//       h(Box, { component: 'h3' }, [
//         h(Box, { component: 'span' }, 'ingredientes  -  custo R$ '),
//         h(Box, { component: 'span' }, Math.ceil(values.__custo * values.__salto * 100) / 100)
//       ]),
//       h(List, null, ingredientes.map(ingr => {

//         const key = (a => `${custos[a].unidade} ${a}`)(ingr.descricao);

//         if (!(key in values)) {
//           values[key] = {
//             quantidade: ingr.quantidade,
//             custo: (a => a.custo / a.quantidade)(custos[ingr.descricao]) * ingr.quantidade
//           };
//           values.__custo += values[key].custo
//           setState({ ...values });
//         }

//         return h(ListIngredientes, { descricao: key });
//       })),
//       h(Box, { component: 'h3' }, `modo de preparo`),
//       h(List, null, preparo?.modo.map(item => h(ListItem, null, item)))
//     ])

//   }

//   return {
//     setters: [
//       arg => { React = arg.default },
//       arg => { MaterialUi = arg.default }
//     ],
//     execute: () => {
//       _export('default', _default)
//     }
//   }

// })
