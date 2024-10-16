import { NextFunction, Router } from 'express';
import { createUser, getUser, getUsers } from '../controllers/userController';
import verifyUser from '../middleware/verifiyd';

const userRouter = Router();
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register to the system.
 *     description: Register a new user to the system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The name of the user.
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: "password123"
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *                 example: "joon@abstract.com"
 *               profile:
 *                 type: object
 *                 properties:
 *                   bio:
 *                     type: string
 *                     description: A brief bio of the user.
 *                     example: "A passionate blogger."
 *                   socialLinks:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of social media links of the user.
 *                     example: ["https://twitter.com/john_doe"]
 *               posts:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of post references.
 *                 example: ["1", "2", "3"]
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the user.
 *                   example: "60c72b2f5f1b2c001c8d4e4b"
 *                 username:
 *                   type: string
 *                   description: The name of the user.
 *                   example: "john_doe"
 *                 email:
 *                   type: string
 *                   description: The email of the user.
 *                   example: "joon@abstract.com"
 *       '400':
 *         description: Bad request. Missing or invalid fields.
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
