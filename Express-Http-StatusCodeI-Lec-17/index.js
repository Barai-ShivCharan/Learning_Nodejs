const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8003;

//Middleware-Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.ip} :${req.method}:${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

//Routes
app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
      `;
  res.send(html);
});

//REST API

app.get("/api/users", (req, res) => {
  // Custom Headers
  res.header("X-myName", "ShivCharan_Barai"); //Here X- is a Cumstom header
  // ALways add X to Custom Headers
  return res.json(users);
});

// Customizing the below code in single rout app  .route("/api/users/:id")
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit user with id
    res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //Delete user with id
    res.json({ status: "Pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile(
    "./MOCK_DATA.json",

    JSON.stringify(users),
    (err, data) => {
      return res.status(201).json({ status: "success", id: users.length });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is started at port no: ${PORT}`);
});
