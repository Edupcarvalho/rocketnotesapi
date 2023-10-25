const { Router } = require("express");


const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const tagsController = new TagsController();
/**
 * Utilizar middleware para todas as rotas
 * usersRoutes.use(myMiddleware);
*/
tagsRoutes.get("/", ensureAuthenticated, tagsController.list);



    

module.exports = tagsRoutes;