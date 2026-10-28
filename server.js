import app from "./src/app.js";
import ConnectDB from "./src/config/DB.js";
import authRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";

const PORT = process.env.PORT;

ConnectDB();

app.get("/", (req, res) => {
  res.json("API up!");
});

app.use("/api/auth/", authRoutes);
app.use("/api/posts/", postRoutes);

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
