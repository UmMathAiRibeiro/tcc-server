function deletarDAO(conection) {
    this._conection = conection;
}
deletarDAO.prototype.deletarIntegrante = function (data, callback) {
    this._conection.query('DELETE FROM integrante WHERE id = ' + data, callback)
};
module.exports = function () {
    return deletarDAO
}