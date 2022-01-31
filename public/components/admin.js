/**
 * application receitas
 * 
 * powered by moreira 2021-08-31
 */

 System.register([
  'react'
], (_export, _context) => {
  
  /** @type {ReactJs} */ let ReactJs;

  return {
    setters: [
      a => { ReactJs = a.default }
    ],

    execute: () => {
      _export('version', '0.1.0');

      _export('default', () => {
        const {createElement:h} = ReactJs;
    
        return h('div', null, 'admin');
      })    
    }
  }
})