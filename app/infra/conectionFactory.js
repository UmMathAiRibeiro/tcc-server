var mysql = require('mysql');
var credenciais = require('../../config/secret.json').mysql;

function criarConexao() {
    return mysql.createConnection(credenciais);
}

module.exports = function () {
    return criarConexao;
};