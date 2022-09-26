import express from "express";

let router = express.Router();

router
  .route("/toys")
  .get((req, res) => {
    res.send("this is get request");
  })
  .post((req, res) => {
    "this is post request";
  });

router
  .route("/toys/:toyid")
  .get((req, res) => {
    "this is get request";
  })
  .put((req, res) => {
    "this is put request";
  })
  .delete((req, res) => {
    "this is delete request";
  });

export default router;
