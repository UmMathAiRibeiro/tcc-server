function cadastroDAO(conection) {
    this._conection = conection;
}
cadastroDAO.prototype.cadastroIntegrante = function (data, callback) {
    this._conection.query('INSERT INTO integrante VALUES(DEFAULT,?,?,?,?,?,?,?,?)',
        [data.iduser, data.nome, data.data_nasc, data.peso, data.altura, data.imc, data.classificacao, data.objetivo], callback);
};
module.exports = function () {
    return cadastroDAO;
};