const express = require("express");
const stream = require("youtube-audio-stream");
const urlBase = "http://youtube.com/watch?v=";

const app = express();

app.use("/music/:musicId", (req, res, next) => {
  const musicId = req.params.musicId;
  stream(urlBase + musicId).pipe(res);
});

app.listen(9999, () => {
  console.log("connected");
});
