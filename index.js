/**********************************************
 * Dropbox Challenge
 * ==================================
 ***********************************************/

// The purpose of this challenge is to ensure that you solidify your understanding of Node.js, as well as connect the frontend files to the backend.

/** # SETUP #
/*  ================== */
/** 1) Packages are already installed. Require them to this file */
// example: const express = require("express")
// example: const fs = require("fs")
const fs = require("fs");
const path = require("path")
const express = require("express");
const fileUpload = require("express-fileupload");
const { resolveObjectURL } = require("buffer");
const req = require("express/lib/request");
const { promiseCallback } = require("express-fileupload/lib/utilities");
const res = require("express/lib/response");
//  


/** 2) set up app and port */
const app = express();
const port = 3000;
// const uploadedDirectory = __dirname+"/uploaded";
// let memory = {}

/** # Configure App #
/*  ====================== */
/** 3) Configure Application */

// This part has already been done for you! Just uncomment the lines below.

app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
const uploadDirectory = __dirname + path.sep + "uploaded";

app.use(express.static("uploaded"));
app.use(express.static("public"));
let caches = {};

/** # Read File #
/*  ====================== */
/** 4) Create a readfile function */

// readFile is a function which takes the file as an input, it goes to the 'uploaded' directory
// that we serve via express. It will then look for the name of the file that we pass into the function,
// the promise will resolve with the body of the file (the data)

// Remember, a promise is an object that tells you whether an action
// is successful or not.  It accepts two arguments: resolve and reject
// Resolve: if the job finishes, the promise will return a resolve object
// Reject: if an error occurs, the promise will return an error object

function readFile(file) {
  console.log("readFile function running");
  console.log("Reading to directory: " + uploadDirectory + "/" + file);
  return new Promise((resolve, reject) => {
    fs.readFile(uploadDirectory + path.sep + file, (error, data) => {
      if (error) {
        return reject(error);
      } else {
        resolve(data);
      }
    });
  })
}

/** # Write File #
/*  ====================== */

/** 5) Create a write file function */

// writeFile is a function which takes the name of the file and the body (data)
// for storage - it will write the file to our uploadDirectory 'uploaded'
// this promise resolves with the name of the file

function writeFile(name, body) {
  console.log("writeFile function running");
  console.log("Writing to directory: " + uploadDirectory + "/" + name);
  return new Promise((resolve, reject) => {
    // CODE BELOW THIS LINE
    fs.writeFileSync(uploadDirectory+"/"+name,body)
      if(name){
        resolve(body);
      }
      else{
        reject(res.redirect("/"))
      }
    })
}

/** # GET Method: Render index.html #
/*  ====================== */
/** 6) Render HTML page */

app.get("/", (req, res) => {
  console.log("GET Method: index.html");
  // CODE BELOW THIS LINE
  res.sendFile(__dirname+"/pages/index.html")
  console.log(caches)
});

/** # POST Method: Upload to /files #
/*  ====================== */
/** 7) Post Data */

app.post("/files", (req, res) => {
  console.log("POST Method: " + req.files.upload.name);
  // CODE BELOW THIS LINE
  if(req.files){
    const file = req.files.upload;
    writeFile(file.name,file.data)
    .then((data)=>caches[file.name]= data)
    .then((data)=>res.send(`To download, go to http://localhost:${port}/uploaded/${file.name}`))
  }
  else{
    res.redirect("/")
  }
});

/** # GET Method: See the file you uploaded #
/*  ====================== */
/** 8) Get Data */

app.get("/uploaded/:name", (req, res) => {
  console.log("GET method: uploaded/:name");
  // CODE BELOW THIS LINE
  let params = req.params.name;
  console.log(req.params.name)
  console.log(caches)
  if(caches[params]){
      res.send(caches[params])
      console.log("Already stored in caches")
  }
  else if(fs.existsSync(uploadDirectory+"/"+params)){
      console.log("Not stored in caches yet")
      readFile(params)
      .then((data)=> caches[params]= data)
      .then(()=>console.log(caches))
      .then(()=>res.send(caches[params]));
  }

  else{
      res.redirect("/");
  }
});

/** # Connecting to Server #
/*  ====================== */

app.listen(port, () => {
  console.log("Connected to server! Go to localhost:3000");
});
