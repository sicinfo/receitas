/**
 * @module config
 * @author moreira
 * @version 0.1.0
 */
'use strict';

const { readFile } = require('fs')
const { join: pathJoin } = require('path')
const { Service, logging } = require('sicinfo-router')(__filename);

module.exports = class extends Service {

  doGet() {
    return new Promise((resolve, reject) => {
      readFile(pathJoin(__dirname, '..', 'models', 'receitas.json'), 'utf8', (err, res) => {
        if (err) return reject(err);
        
        const data = Object.entries(JSON.parse(res)).reduce((a, e) => {
          if ('titulo' in e[1]) Reflect.set(a, e[0], e[1]['titulo'])
          return a;
        }, {})

        resolve({data})
      })
    })
  }
}