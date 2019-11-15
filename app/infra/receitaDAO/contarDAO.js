function contarDAO(conection) {
    this._conection = conection;
}
contarDAO.prototype.contarReceitas = function (callback) {
    this._conection.query("SELECT count(*) FROM receita", callback)
}
module.exports = function () {
    return contarDAO;
}