import express from "express";
import products from "./routes/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/products", products);

app.listen(3000, () => {
  console.log("Port is listening at: 3000");
});
