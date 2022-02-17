/** *
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

    /** @type {[Record<string,any>, any]} */
    const [ings, setIngs] = useState({ __cust: 0 })

    if (!receita.titulo) {
      axios.get(`receita/${name}`).then(/** @type {Receita} */ ({ data }) => {
        console.log(data);
        const { minimo: min, maximo: max } = data.rendimento.quantidade;
        setReceita({ ...data })
        setValues({
          step: 1 * min,
          qtd: 1 * min,
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
          defaultValue: receita.rendimento?.quantidade?.minimo,
          min: receita.rendimento?.quantidade?.minimo,
          max: receita.rendimento?.quantidade?.maximo,
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
      ]),
      h('h3', null, [
        h('span', null, 'ingredientes  -  custo R$ '),
        h('span', null, Math.ceil(ings.__cust * values.salt * 100) / 100)
      ]),
      h('ul', 
        null, 
        receita.ingredientes?.map(({unidade: und, descricao: desc, quantidade: qtd, custo: cust }) => {
          const key = `${und} ${desc}`;
          if (!(key in ings)) {
            ings[key] = { qtd, cust };
            ings.__cust += cust;
            setIngs({ ...ings })
          }
          return h('li', null, `${ qtd * values.salt} ${desc}`)
        })
      )
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


