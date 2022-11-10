import * as express from "express";
import * as path from "path";

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/angular-starter"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/<angular-starter>/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
