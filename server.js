const vue = require("vue");
const express = require("express");
const server = express();
const { createBundleRenderer } = require("vue-server-renderer");
const fs = require("fs");
const path = require("path");
const serverBundle = require(path.resolve(
  __dirname,
  "./dist/vue-ssr-server-bundle.json"
));

const clientManifest = require(path.resolve(
  __dirname,
  "./dist/vue-ssr-client-manifest.json"
));

const template = fs.readFileSync(
  path.resolve(__dirname, "./index.html"),
  "utf-8"
);

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  clientManifest,
  template
});

server.get("*", (req, res) => {
  if (req.url != "favicon.icon") {
    const context = {
      url: req.url
    };
    renderer.renderToString(context).then(html => {
      res.end(html);
    });
  }
});

server.listen(1000);
