/**
 * @author moreira 2022-02-08
 */
'use stric'

System.register(['react'], (_export, _context) => {
  
  /** @type {ReactJs} */ let ReactJs;

  const _version = '0.1.0';
  const _default = () => {
    const {createElement: h } = ReactJs;

    return h('div', null, 'login');        
  }

  return {
    setters: [
      a => { ReactJs = a.default }
    ],

    execute: () => {
      _export('version', '0.1.0');
      _export('default', _default)    
    }
  }
})