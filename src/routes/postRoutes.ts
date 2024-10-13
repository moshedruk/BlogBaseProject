import { NextFunction, Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";
import verifyUser from "../middleware/verifiyd";

const postRouter = Router();
/**
 * @swagger
 * /api/posts/:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post in the system.
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post.
 *               content:
 *                 type: string
 *                 description: The content of the post.
 *               author:
 *                 type: string
 *                 description: The ID of the author (user) creating the post.
 *               comments:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     content:
 *                       type: string
 *                       description: The content of the comment.
 *                     author:
 *                       type: string
 *                       description: The ID of the author (user) of the comment.
 *             required:
 *               - title
 *               - content
 *               - author
 *     responses:
 *       '201':
 *         description: Post created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post created successfully"
 *                 post:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     author:
 *                       type: string
 *                     comments:
 *                       type: array
 *                       items:
 *                         type: object
 *       '400':
 *         description: Bad request.
 *       '500':
 *         description: Internal server error.
 */

postRouter.post("/",verifyUser, createPost as unknown as NextFunction);
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve all posts
 *     description: Get a list of all posts in the system.
 *     tags:
 *       - Posts
 *     responses:
 *       '200':
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: The title of the post.
 *                   content:
 *                     type: string
 *                     description: The content of the post.
 *                   author:
 *                     type: string
 *                     description: The ID of the author (user) who created the post.
 *                   comments:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         content:
 *                           type: string
 *                           description: The content of the comment.
 *                         author:
 *                           type: string
 *                           description: The ID of the author (user) of the comment.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time when the post was created.
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Internal server error.
 */

postRouter.get("/",verifyUser, getPosts);
/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Retrieve a single post
 *     description: Get a specific post by its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The post details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: The title of the post.
 *                 content:
 *                   type: string
 *                   description: The content of the post.
 *                 author:
 *                   type: string
 *                   description: The ID of the author (user) who created the post.
 *                 comments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       content:
 *                         type: string
 *                         description: The content of the comment.
 *                       author:
 *                         type: string
 *                         description: The ID of the author (user) of the comment.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The date and time when the post was created.
 *       '404':
 *         description: Post not found.
 *       '500':
 *         description: Internal server error.
 */

postRouter.get("/:id",verifyUser, getPost as unknown as NextFunction);
/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update a post
 *     description: Update an existing post by its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the post.
 *               content:
 *                 type: string
 *                 description: The updated content of the post.
 *     responses:
 *       '200':
 *         description: Post updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post updated successfully"
 *       '400':
 *         description: Bad request.
 *       '404':
 *         description: Post not found.
 *       '500':
 *         description: Internal server error.
 */

postRouter.put("/:id",verifyUser, updatePost);
/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     description: Delete a specific post by its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Post deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post deleted successfully"
 *       '404':
 *         description: Post not found.
 *       '500':
 *         description: Internal server error.
 */

postRouter.delete("/:id",verifyUser, deletePost);
/**
 * @swagger
 * /api/posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a post
 *     description: Add a new comment to a specific post by its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to which the comment will be added.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the comment.
 *               author:
 *                 type: string
 *                 description: The ID of the author (user) of the comment.
 *     responses:
 *       '201':
 *         description: Comment added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Comment added successfully"
 *                 comment:
 *                   type: object
 *                   properties:
 *                     content:
 *                       type: string
 *                     author:
 *                       type: string
 *       '400':
 *         description: Bad request.
 *       '404':
 *         description: Post not found.
 *       '500':
 *         description: Internal server error.
 */

postRouter.post("/:id/comments",verifyUser, addComment);

export default postRouter;
