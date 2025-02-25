const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const typeController = require("../controllers/typeController");
const { authenticateJWT } = require("../middleware/auth");
const cardController = require("../controllers/cardController");
const inviteController = require("../controllers/inviteController");
const commentController = require("../controllers/commentController");

router.use(authenticateJWT);
// Project routes
router.get("/", projectController.getProjects);
router.post("/create", projectController.createProject);
router.get("/invites", inviteController.getInvites);
router.get("/:projectId", projectController.getProjectById);
router.delete("/:projectId", projectController.deleteProject);
router.put("/:projectId", projectController.updateProject);
router.get("/:projectId/members", projectController.getProjectMembers);

// Type routes
router.post("/:projectId/types/create", typeController.createType);
router.delete("/:projectId/types/:typeId", typeController.deleteType);
router.put("/:projectId/types/:typeId", typeController.updateType);

// Card routes
router.get("/:projectId/cards/:cardId", cardController.getCard);
router.post("/:projectId/cards/create", cardController.createCard);
router.delete("/:projectId/cards/:cardId", cardController.deleteCard);
router.put("/:projectId/cards/:cardId", cardController.updateCard);

//invite routes
router.post("/:projectId/invite", inviteController.inviteUser);     
router.put("/:projectId/accept-invite", inviteController.acceptInvite);        
router.post("/:projectId/decline-invite", inviteController.declineInvite);

//comment routes
router.get("/:projectId/cards/:cardId/comments", commentController.getComments);
router.post("/:projectId/cards/:cardId/comments", commentController.createComment);
router.delete("/:projectId/cards/:cardId/comments/:commentId", commentController.deleteComment);

//assign people routes
router.post("/:projectId/cards/:cardId/assign", projectController.assignUser);

module.exports = router;
