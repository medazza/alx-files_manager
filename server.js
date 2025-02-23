import express from "express";
import controllerRouting from "./routes/index";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
