import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateuserAvatarService from '../services/UpdateuserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  return res.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const updateuserAvatar = new UpdateuserAvatarService();

    const user = await updateuserAvatar.execute({
      user_id: req.user.id,
      filename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  },
);

export default usersRouter;