/**
 * 
 */

/** @typedef { import('axios').AxiosInstance } AxiosInstance */

/** @typedef { import('react') }  ReactJs */
/** @typedef { import('react').Component }  ReactComponent */
/** @typedef { import('react').ChangeEventHandler } ReactChangeEventHandler */
/** @typedef { import('react').InputHTMLAttributes<HTMLInputElement> }  ReactInputAttributes */

/** @typedef { import('react-dom') }  ReactDom */

/** @typedef { import('react-router-dom') }  ReactRouterDom */
/** @typedef { import('react-router-dom').BrowserRouter }  ReactRouter */
/** @typedef { import('react-router-dom').Route }  ReactRoute */

/** @typedef { import('react-loadable') }  RouteLoadable */

/** @typedef { import('material-ui') } MaterialUi */

/*******************************************************************/
/*******************************************************************/

/**@typedef {'un'} Unidade */

/** @typedef Rendimento 
 * @property {?string} descricao
 * @property {?number} quantidade
 * @property {?Unidade} unidade
 */

/** @typedef Preparo
 * @property {?string} tempo
 * @property {?string[]} modo
 */

/**
 * @typedef Ingrediente
 * @property {!Unidade} unidade
 * @property {!number} quantidade
 * @property {!string} descricao
 * @property {?number} custo
 */

/**
 * @typedef Receita
 * @property {string} titulo
 * @property {Rendimento} rendimento
 * @property {Preparo} preparo
 * @property {Ingrediente[]} ingredientes
 * @property {?number} custo
 */

/**
 * @typedef {Object.<string, Receita>} ReceitasRoute
 */







