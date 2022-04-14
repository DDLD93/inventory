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

app.use(proxy('/api/category', {target: 'http://category:1111'}))
app.use(proxy('/api/location', {target: 'http://location:2222'}))
app.use(proxy('/api/product', {target: 'http://product:3333'}))
app.use(proxy('/api/supplier', {target: 'http://supplier:4444'}))
app.use(proxy('/api/supply', {target: 'http://supply:5555'}))
app.use(proxy('/api/user', {target: 'http://user:6666'}))
app.use(proxy('/api/building', {target: 'http://building:7777'}))
app.use(proxy('/', {target: 'http://cv:5000'}))


var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8443);