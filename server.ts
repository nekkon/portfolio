import "zone.js/dist/zone-node";
import "reflect-metadata";
import { enableProdMode } from "@angular/core";
// Express Engine
import { ngExpressEngine } from "@nguniversal/express-engine";
// Import module map for lazy loading
import { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

import * as express from "express";
import { join } from "path";

// Server and App monitoring
var I = require("instrumental-agent");

I.configure({
  apiKey: "3fe8d8a0ad27c61d2c2dccde30ab1b80",
  enabled: true
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 55555;
const DIST_FOLDER = process.cwd();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require("./dist/server/main");

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  "html",
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set("view engine", "html");
app.set("views", join(DIST_FOLDER, "browser"));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get("*.*", express.static(join(DIST_FOLDER, "browser")));

// All regular routes use the Universal engine

app.get("*", (req, res) => {
  res.render("index", { req });
});

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Handle message post, send Email

const mailer = require("./sendEmail");

app.post("/contact", function(req, res) {
  try {
    console.log(req.body);
    mailer.sendEmail(req.body, res);
  } catch (error) {
    res.json({
      errorMessage: "Error while sending email",
      error: error,
      status: 500
    });
  }
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
