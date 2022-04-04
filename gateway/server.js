var express = require("express");
const proxy = require('http-proxy-middleware').createProxyMiddleware
const https = require('https');
const http = require('http');
var cors = require("cors");
var app = express()
const fs = require('fs');

var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app.use(cors({
    origins: '*:*'
  }));

app.use(proxy('/api/category', {target: 'http://localhost:1100'}))
app.use(proxy('/api/location', {target: 'http://localhost:2200'}))
app.use(proxy('/api/product', {target: 'http://localhost:3300'}))
app.use(proxy('/api/supplier', {target: 'http://localhost:4400'}))
app.use(proxy('/api/supply', {target: 'http://localhost:5500'}))
app.use(proxy('/api/user', {target: 'http://localhost:6600'}))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8443);