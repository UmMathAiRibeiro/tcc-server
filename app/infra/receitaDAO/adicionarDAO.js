function adicionarDAO(conection) {
    this._conection = conection;
}
adicionarDAO.prototype.addReceita = function (data, callback) {
    this._conection.query('INSERT INTO receita VALUES(?,?,?,?,?)',
        [data.id_receita, data.nome, data.modo_preparo, data.calorias, data.porcoes], callback);
};
adicionarDAO.prototype.addReceitaAux = function (data, callback) {
    this._conection.query('INSERT INTO receita_aux VALUES(DEFAULT,?,?,?)',
        [data.id_receita, data.id_ingrediente, data.qtde], callback)
}
module.exports = function () {
    return adicionarDAO;
}