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

  _export('default', (/** @type {Receita} */ { receita, custos }) => {

    const { createElement: h, useState, Component } = React;
    const { Container, Typography, InputBase, Input, Box, List, ListItem } = MaterialUi;
    const { titulo, rendimento, ingredientes = [], preparo } = receita;
    const { minimo: min, maximo: max } = rendimento.quantidade;

    const [values, setState] = useState({ 
      __quantidade: min,
      __custo: 0,
      __salto: 1
    })

    const ListIngredientes = props => {
      const { quantidade, salto } = values[props.descricao];
      return h(ListItem, null, `${quantidade * values.__salto} ${props.descricao}`)
    }

    return h(Container, null, [
      h(Box, { component: 'h2' }, titulo),
      h(Typography, null, [
        h(Box, { component: 'span' }, 'porções '),
        h(Input, {
          type: 'range',
          name: 'InputQuantidade',
          defaultValue: min,
          inputProps: { min, max, step: min },
          onChange: (evt) => {
            evt.stopPropagation();
            const { value, step } = evt.target;
            values.__salto = 0 + value / step;
            values.__quantidade = value;
            setState({ ...values });
          }
        })
      ]),
      h(Typography, null, [
        h(Box, { component: 'span' }, 'rendimento '),
        h(Box, { component: 'span' }, values.__quantidade),
        h(Box, { component: 'span' }, ` ${rendimento.unidade} ${rendimento.descricao}`)
      ]),
      h(Box, { component: 'h3' }, [
        h(Box, { component: 'span' }, 'ingredientes  -  custo R$ '),
        h(Box, { component: 'span' }, Math.ceil(values.__custo * values.__salto * 100) / 100)
      ]),
      h(List, null, ingredientes.map(ingr => {

        const key = (a => `${custos[a].unidade} ${a}`)(ingr.descricao);

        if (!(key in values)) {
          values[key] = {
            quantidade: ingr.quantidade,
            custo: (a => a.custo / a.quantidade)(custos[ingr.descricao]) * ingr.quantidade
          };
          values.__custo += values[key].custo
          setState({ ...values });
        }

        return h(ListIngredientes, { descricao: key });
      })),
      h(Box, { component: 'h3' }, `modo de preparo`),
      h(List, null, preparo?.modo.map(item => h(ListItem, null, item)))
    ])

  });

  return {
    setters: [
      arg => { React = arg.default },
      arg => { MaterialUi = arg.default }
    ]
  }

})
