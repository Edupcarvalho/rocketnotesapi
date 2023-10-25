const { Router } = require("express");


const notesRoutes = Router();

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);
/**
 * Utilizar middleware para todas as rotas
 * usersRoutes.use(myMiddleware);
*/
notesRoutes.get("/", notesController.list);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);


    

module.exports = notesRoutes;