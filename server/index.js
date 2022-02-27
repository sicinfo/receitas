/**
 * application receitas
 * 
 * powered by moreira 2022-01-24
 * @author moreira
 * https://arangodb.github.io/arangojs/7.7.0/
 * https://www.arangodb.com/docs/stable/data-modeling-documents-document-methods.html#exists
 */
'use strict';

const { Router, logging } = require('sicinfo-router')(__filename);
const { Database } = require('arangojs')
const { readFileSync } = require('fs');
const { syncBuiltinESMExports } = require('module');
const { join: pathJoin, resolve } = require('path');

/** @type {ReceitasCache} */
const cache = {};

/** @arg {Record<'etc',string>} _*/
const dbConfig = ({ etc }) => {
  let res;

  if (!cache.db) cache.db = new Promise(resolve => {

    /** @type {DbCfg} */
    const {
      databaseName,
      auth
    } = JSON.parse(readFileSync(pathJoin(etc, 'receitas-db.json'), { encoding: 'utf8' }));
    const db = new Database({ databaseName, auth });

    const keys = [
      'config',
      'unidade',
      'receita',
      'produto',
      'lista',
      'loja',
      'marca',
      '*item',
      '*compra',
      '*vende',
      '*ingrediente'
    ]

    Promise.all(keys.map(_key => {
      const isEdge = '*' === _key[0]
      const key =  isEdge ? _key.substring(1) : _key
      return db?.collection(key).exists().then(exist => {
        if (!exist) {
          return db?.[`create${isEdge ? 'Edge' : '' }Collection`](key)
            .then(() => {
              if (typeof(key) !== 'string') return

              if (key === 'unidade') {
                const un = db.collection('unidade');
                const args = [
                  { de: 'g', para: 'Kg', fator: 1000 },
                  { de: 'Kg', para: 'g', fator: 0.001 }
                ]
                return Promise.all(args.map(arg => un.save(arg)))
              }
      
      
            } else resolve(db) 
              }
      })
    })).then(() => { resolve(db) })
    
  })

  return cache;

}

const Receitas = module.exports = class extends Router {

  constructor(/** @type {any} */ arg) {
    super(arg, dbConfig(arg))
  }
  
}
  



// Object.create(Router.prototype)
// module.exports = Receitas

// const Receitas = function(/** @type {any} */ arg) {
//   this.router = new Router(arg)
//   return this
// }

// Receitas.prototype.send = function() {
//   return this.router.send(this.etc + 'teste')
// }


// module.exports = function() {

  
// }
// module.exports.prototype.initialize = function() {

//   this.res.end('teste')

// }



// (/** @type {any} */ arg) => {

//   const router = Object.create(Router)

//   this.router
  
  
// }



// const {
//   readFileSync,
//   readFile,
//   statSync
// } = require('fs');

// const { join: pathJoin } = require('path')

// const { Router, logging } = require('sicinfo-router')(__filename);

// const { Database } = require('arangojs');
// const { rejects } = require('assert');

// const db = new Database('')

// const cache = {}

// module.exports = class extends Router {
  
//   /** @param {Router} arg */
//   constructor(arg) {
//     super(arg);
//     this.ctx = Object.assign(arg)


//     console.log(arg);

//     if (!('Database' in cache)) {
//       console.log('inclui database');
//       Object.assign(cache, { Database })
//     }

//   }
  
//     /** @return { Promise<Record<string,string>> } */
//     get DbOptions() {

//       return new Promise((resolve, reject) => {

//         readFile(pathJoin(this.ctx.etc)



//       })


//       // const {
//       //   readFileSync,
//       //   statSync
//       // } = require('fs');
      
    
    
//       // const opts = 



//       // logging('DbOptions------------------------',
//       //   this.ctx.etc,
//       //   `db-${this.ctx.appname}.json`
//       // )    
      
//       //     try {
//       //       return JSON.parse(
//       //         readFileSync(
//       //           pathJoin(
//       //             this.ctx.etc,
//       //             `db-${this.ctx.appname}.json`
//       //           )
//       //         ).toString()
//       //       )
//       //     } 
//       //     catch (e) { 
//       //       return {} 
//       //     }
//       //   }
//     }     
  
// }