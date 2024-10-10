import express,{Express} from "express";
import  "dotenv/config";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRouter";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import swaggerUi,{specs} from "./config/swagger";



const app:Express = express();
const PORT:string | number = process.env.PORT || 3000;

// Middleware
app.use(express.json());

connectDB();

// Routes
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth/", authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
