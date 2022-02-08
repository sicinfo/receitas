/**
 * @author moreira
 * @version 0.1.0
 */
'use strict';

const { readFile } = require('fs');
const { get } = require('http');
const { join: pathJoin } = require('path')
const { Service, logging } = require('sicinfo-router')(__filename);

module.exports = class extends Service {

  doGet() {
    console.log(this.id);
    console.log(this.doc)
    return super.doGet()
  }

  /** @param {string} key */
  doGetById(key) {
    return new Promise((resolve, reject) => {
      readFile(pathJoin(__dirname, '..', 'models', 'receitas.json'), 'utf8', (err, receitas) => {
        if (err) return reject(err);
        readFile(pathJoin(__dirname, '..', 'models', 'custo.json'), 'utf8', (err, custo) => {
          if (err) return reject(err);
          resolve({
            receita: Reflect.get(JSON.parse(receitas), key), 
            custos: Reflect.get(JSON.parse(custo), 'custos')
          })
        })
      })
    }).then(({ receita: data, custos }) => {
      const { ingredientes: ing } = data;
      for (let ind in ing) {
        const { quantidade: qtde, descricao: key } = ing[ind];
        const { unidade, quantidade: qtd, custo: val } = custos[key];
        Object.assign(ing[ind], { unidade, custo: val / qtd * qtde });
      }
      return { data }
    })
  }
}