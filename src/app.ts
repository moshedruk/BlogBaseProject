import express from "express";
import  "dotenv/config";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

connectDB();

// Routes
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
