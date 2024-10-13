import { NextFunction, Router } from 'express';
import { createUser, getUser, getUsers } from '../controllers/userController';
import verifyUser from '../middleware/verifiyd';

const userRouter = Router();
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register to the system.
 *     description: Register to the system.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The name of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               profile:
 *                 type: object
 *                 properties:
 *                   bio:
 *                     type: string
 *                     description: The bio of the user.
 *                   socialLinks:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: The social links of the user.
 *               posts:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of post references.
 *     examples:
 *       example1:
 *         summary: Example user data.
 *         value:
 *           username: "john_doe"
 *           password: "password123"
 *           email: "joon@abstract.com"
 *           profile:
 *             bio: "good"
 *             socialLinks: ["twitterLink"]
 *           posts: [1, 2, 3]
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *       '400':
 *         description: Bad request.
 *       '500':
 *         description: Internal server error.
 */

userRouter.post('/', createUser);
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users from the system.
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The user ID.
 *                   username:
 *                     type: string
 *                     description: The user's username.
 *                   email:
 *                     type: string
 *                     description: The user's email address.
 *                   profile:
 *                     type: object
 *                     properties:
 *                       bio:
 *                         type: string
 *                         description: The bio of the user.
 *                       socialLinks:
 *                         type: array
 *                         items:
 *                           type: string
 *                         description: The social links of the user.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time the user was created.
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Internal server error.
 */

userRouter.get('/', getUsers);
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a single user from the system using their ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single user object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 username:
 *                   type: string
 *                   description: The user's username.
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                 profile:
 *                   type: object
 *                   properties:
 *                     bio:
 *                       type: string
 *                       description: The bio of the user.
 *                     socialLinks:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: The social links of the user.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The date and time the user was created.
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal server error.
 */

userRouter.get('/:id', verifyUser, getUser as unknown as NextFunction);

export default userRouter;
