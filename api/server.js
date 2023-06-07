const express = require("express");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const cookieSession = require("cookie-session");
const dbConfig = require("./app/config/db.config");
const app = express();
var corsOptions = {
  origin: "http://localhost:4200",
  credentials: true
}
app.use(cors(corsOptions));
// const certificatePath = "../ssl/certs/anthanhphu_com_vn_c5a54_69415_1693267199_b046082d5e7cde4670704063c353df27.crt";
// const privateKeyPath = "../ssl/keys/c5a54_69415_eb03f14517a7ac3062aa3fcb34a1a871.key";

// const privateKey = fs.readFileSync(privateKeyPath, "utf8");
// const certificate = fs.readFileSync(certificatePath, "utf8");

// const options = {
//   key: privateKey,
//   cert: certificate,
// };



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./app/models");

db.mongoose
  .connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/categoryProd.routes")(app);
require("./app/routes/info.router")(app);
require("./app/routes/introduce.routes")(app);
// 
const server = http.createServer(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

