function atualizarDAO(conection) {
    this._conection = conection;
}
atualizarDAO.prototype.atualizarIntegrante = function (data, callback) {
    this._conection.query('UPDATE integrante SET peso=?,altura=?,imc=?,classificacao=?,objetivo=? WHERE id=?',
        [data.peso, data.altura, data.imc, data.classificacao, data.objetivo, data.id], callback)
};
module.exports = function () {
    return atualizarDAO;
}