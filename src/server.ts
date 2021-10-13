import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "oi"});
});

app.listen(8080, () => console.log("server is running: http://localhost:8080"));