function ingredienteDAO(conection) {
    this._conection = conection;
}
ingredienteDAO.prototype.listarIngredientes = function (callback) {
    this._conection.query('SELECT * FROM ingrediente', callback)
}
ingredienteDAO.prototype.cadastrarIngrediente = function (data, callback) {
    this._conection.query('INSERT INTO ingrediente VALUES(DEFAULT,?,?,?)',
        [data.nome, data.cal_p_und, data.tipo_und], callback)
}
module.exports = function () {
    return ingredienteDAO;
}