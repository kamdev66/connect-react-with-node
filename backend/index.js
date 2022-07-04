//for start the app:- use npm run dev(nodemon index.js) or npm start(node index.js)
const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, Welcome Back</h1>");
});

app.get("/api/user", (req, res) => {
  res.json({
    employees: [
      { name: "kamdev", email: "kamdev@gmail.com" },
      { name: "shyam", email: "shyam@gmail.com" },
      { name: "sonu singh", email: "sonu@gmail.com" },
      { name: "krishna", email: "krishna@gmail.com" },
      { name: "dev", email: "test@gmail.com" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
