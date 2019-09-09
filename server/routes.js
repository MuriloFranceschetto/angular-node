
// Todas as ações relacionada com a rotas de Usuarios
module.exports = (app) => {
    app.use('/api/usuario', require('./usuarios/controllers'));
};
  