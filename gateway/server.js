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

app.use(proxy('/api/category', {target: 'http://category:1100'}))
app.use(proxy('/api/location', {target: 'http://location:2200'}))
app.use(proxy('/api/product', {target: 'http://product:3300'}))
app.use(proxy('/api/supplier', {target: 'http://supplier:4400'}))
app.use(proxy('/api/supply', {target: 'http://supply:5500'}))
app.use(proxy('/api/user', {target: 'http://user:6600'}))
app.use(proxy('/api/site', {target: 'http://site:7700'}))
app.use(proxy('/api/building', {target: 'http://building:8800'}))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8443);