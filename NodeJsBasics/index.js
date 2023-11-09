// const http = require("http");
// const tech = require("./features");

import http from "http";
import tech, { GenerateNo, exp, lang } from "./features.js";
import fs from "fs";
import path from 'path';
// import * as myObj from "./features.js";

const home = fs.readFileSync("./index.html")

console.log(tech);
console.log(exp);
console.log(lang);
console.log(GenerateNo())
console.log(path.dirname("/home/random/index.html"))

// console.log(myObj)


const server = http.createServer((req, res) => {
    // res.end("<h1>noice</h1>");
    if (req.url == "/about") {
        res.end(`<h1>You are now redirected to About Page</h1><h2>${GenerateNo()}</h2>`)
    }
    else if (req.url == "/") {
        // res.end("<h1>You are on Home Page</h1>")
        res.end(home)
    }
    else if (req.url == "/contact") {
        res.end("<h1>You are now redirected to Contact Page</h1>")
    }
    else {
        res.end("<h1>Page not found</h1>")
    }
});

server.listen(3000, () => {
    console.log("Server is working");
});