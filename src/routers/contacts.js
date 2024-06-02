import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import {
  getAllContactsController,
  getContactByIdController,
  postContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.post('/', ctrlWrapper(postContactController));

contactsRouter.patch('/:contactId', ctrlWrapper(patchContactController));

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
