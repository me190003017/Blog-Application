import express, { json } from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
import multer from "multer";
// require(dotenv).config();
import  dotenv  from "dotenv";
dotenv.config();

const app=express();
// middlewares
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  const upload = multer({ storage });

  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file?.filename);
  });
app.use(cors({
    origin:"http://localhost:3000",
}));
app.use("/api/posts",postRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.listen(8800,()=>{
    console.log("Connected & listen on port 8800 " );
})


