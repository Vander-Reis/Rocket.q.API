import { Router } from "express";
import { CreateQuestionController } from '../modules/question/useCases/CreateQuestions/CreateQuestionController';
import { DeleteQuestionController } from '../modules/question/useCases/deleteQuestion/DeleteQuestionController';
import { ReadQuestionUpdateController } from '../modules/question/useCases/readQuestionUpdate/ReadQuestionUpdateController';

const createQuestionController = new CreateQuestionController();
const deleteQuestionController = new DeleteQuestionController();
const readQuestionUpdateController = new ReadQuestionUpdateController();

const questionRoutes = Router();

questionRoutes.post("/:id", createQuestionController.handle);
questionRoutes.delete("/:id", deleteQuestionController.handle);
questionRoutes.patch("/:id", readQuestionUpdateController.handle);

export { questionRoutes };