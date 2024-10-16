import mongoose from 'mongoose';
import { IComment } from '../interfaces/Icomment';
import postModel from '../models/postModel';
import userModel from '../models/userModel';

export const CreateNewPost = async (
  newPost: any,
  author: string
) => {
  try {
    const { title, content } = newPost;

    const dbpost = new postModel({
      title,
      content,
      author
    });

    await dbpost.save();

    
    const userId = new mongoose.Types.ObjectId(author);

    const updateResult = await userModel.updateOne(
      { _id: userId },
      { $addToSet: { posts: dbpost._id } }
    );

    console.log('User update result:', updateResult);
    if (updateResult.matchedCount === 0) {
      console.warn('No user found with the given ID.');
    }
    if (updateResult.modifiedCount === 0) {
      console.warn('No changes made to the user.');
    }

    return dbpost;
  } catch (err) {
    console.error('Error creating post:', err);
    throw err;
  }
};

export const DeletePost = async (id: any) => {
  try {
    await postModel.deleteOne({ _id: id });
    await userModel.updateOne(
      { posts: id },
      { $pull: { posts: id } }
    );
    return {
      message: 'Post deleted successfully'
    };
  } catch (err) {
    throw err;
  }
};

export const GetAllPost = async () => {
  try {
    const posts = await postModel.find({});
    console.log(posts);
    return posts;
  } catch (err) {
    throw err;
  }
};

export const GetPostById = async (id: any) => {
  try {
    const post = await postModel.findById({ _id: id });
    return post;
  } catch (err) {
    throw err;
  }
};

export const UpdatePost = async (
  id: string,
  new_update: any
) => {
  try {
    const my_object_update: {
      title?: string;
      content?: string;
    } = {};

    if (new_update.title) {
      my_object_update.title = new_update.title;
    }

    if (new_update.content) {
      my_object_update.content = new_update.content;
    }
    await postModel.findByIdAndUpdate(id, {
      $set: my_object_update
    });
    return {
      message: 'Post updated successfully'
    };
  } catch (err) {
    throw err;
  }
};

export const AddCommentForPost = async (
  id: any,
  idpost: any,
  respons: any
) => {
  try {
    const { content } = respons;
    const object = {
      content,
      author: id,
      createdAt: new Date()
    };
    console.log(object);
    await postModel.updateOne(
      { _id: idpost },
      {
        $push: {
          comments: {
            $each: []
          }
        }
      }
    );
    return {
      message: 'Comment added successfully'
    };
  } catch (err) {
    throw err;
  }
};
