/**
 * @author moreira
 */

// @ts-ignore
/** @typedef {import('systemjs') } System */

/** @typedef { import('axios').AxiosInstance } AxiosInstance */

/** @typedef { import('react') }  ReactJs */
/** @typedef { import('react').ReactPropTypes }  ReactPropTypes */
/** @typedef { import('react').Component }  ReactComponent */
/** @typedef { import('react').ChangeEventHandler } ReactChangeEventHandler */
/** @typedef { import('react').InputHTMLAttributes<HTMLInputElement> }  ReactInputAttributes */

/** @typedef { import('react-dom') }  ReactDom */

/** @typedef { import('react-router') }  ReactRouter */

/** @typedef { import('react-router-dom') }  ReactRouterDom */

/** @typedef { import('react-loadable') }  RouteLoadable */

/** @typedef { import('material-ui') } MaterialUi */

/*******************************************************************/
/*******************************************************************/

/**@typedef {'un'} Unidade */

/** @typedef Quantidade 
 * @property {?number} maximo
 * @property {?number} minimo
 */

/** @typedef Rendimento 
 * @property {?string} descricao
 * @property {?Quantidade} quantidade
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
 * @property {string} [titulo]
 * @property {Rendimento} [rendimento]
 * @property {Preparo} [preparo]
 * @property {Ingrediente[]} [ingredientes]
 * @property {?number} [custo]
 */

/**
 * @typedef {Object.<string, Receita>} ReceitasRoute
 */

/** @typedef {import('arangojs').Database} ArangoDb */

/** 
 * @typedef DbCfg
 * @prop {string} databaseName
 * @prop {DbCfgAuth} auth
 */ /**
 * @typedef DbCfgAuth
 * @prop {string} username
 * @prop {string} [passwd]
 * @prop {string} [password]
 */ /**
 * @typedef ReceitasCache
 * @prop {Promise<ArangoDb>} [db]
 */ 

/** @typedef {import('index').ReceitasCache}
 */
/* @typedef { import('sicinfo-router') } Router */

/* @typedef { import('sicinfo-router').RouterOptions } RouterOptions */





