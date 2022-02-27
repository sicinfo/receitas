/**
 * @module config
 * @author moreira
 * @version 0.1.0
 */
'use strict';

const { Service, logging } = require('sicinfo-router')(__filename);

module.exports = class extends Service {

  /** @arg {ReceitasCache} arg */
  doGet(arg) {
    return new Promise(resolve => {
      if (arg.db) arg.db.then(db => {
        const ingr = db?.collection('ingr');
        return ingr?.save({ nome: 'batata' }).then(data => {
          resolve({ data })
        })
      })
      else resolve({ message: 'erro no banco de dados' })
    })

  }
}