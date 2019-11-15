var app = require("./config/express");
var porta = process.env.PORT || 3005;
app().listen(porta, () => {
  console.log("Server FamiliaSaudavel na porta 3005");
});