/**
 * application receitas
 * 
 * @author moreira 2021-08-31
 */
'use strict'

System.register(['axios', 'react'], (_export, _context) => {

  const _version = '0.1.0';

  /** @type {ReactJs} */ let ReactJs;
  /** @type {AxiosInstance} */ let axios;

  /** @param {Record<string,string>} _*/
  const _default = ({ name }) => {
    const { createElement: h, useState } = ReactJs;

    /** @type {[Receita, any]} */
    const [receita, setReceita] = useState({})

    /** @type {[Record<string,number>, any]} */
    const [values, setValues] = useState({})

    if (!receita.titulo) {
      axios.get(`receita/${name}`).then(/** @type {Receita} */ ({ data }) => {
        console.log(data);
        const { min, max } = data.rendimento.quantidade;
        setReceita({ ...data })
        setValues({
          step: 1 * min,
          qtd: 1 * min,
          min, max, 
          salt: 1
        })
      })
      return h('div', null, '')
    }

    return h('div', null, [
      h('h2', null, receita.titulo),
      h('div', null, [
        h('span', null, 'porções '),
        h('input', {
          type: 'range',
          name: 'InputQuantidade',
          defaultValue: values.min,
          min: values.min,
          max: values.max,
          step: values.step,
          onChange: evt => {
            evt.stopPropagation();
            const { value } = /** @type {Record<string,any>} */ (evt.target);
            values.qtd = 1 * (value || 0);
            values.salt = values.qtd / values.step;
            setValues({ ...values })
          }
        })
      ]),
      h('div', null, [
        h('span', null, 'rendimento '),
        h('span', null, values.qtd),
        h('span', null, ` ${receita.rendimento?.unidade} ${receita.rendimento?.descricao}`)
      ])
    ])
  }

  return {
    setters: [
      a => { axios = a.default },
      a => { ReactJs = a.default }
    ],
    execute: () => {
      _export('version', _version);
      _export('default', _default);
    }
  }
})


