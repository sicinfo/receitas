/**
 * powered by moreira - 2022-01-24
 */
'use stric'

System.register([
  'react'
], (_export, _context) => {
  /** @type {ReactJs} */ let ReactJs;

  _export('version', '0.1.0');

  _export('default', () => {
    const {createElement:h} = ReactJs;

    return h('div', null, 'home');
  })

  return {
    setters: [
      a => { ReactJs = a.default }
    ]
  }
})