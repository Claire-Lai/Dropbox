/**********************************************
 * Dropbox Challenge
 * ==================================
 ***********************************************/

// The purpose of this challenge is to ensure that you solidify your understanding of Node.js, as well as connect the frontend files to the backend.

/** # SETUP #
/*  ================== */
/** 1) Packages are already installed. Import them to this file */
// example: const express = require("express")

/** # Create a Server #
/*  ====================== */
/** 2) Create a Server */
// set up app and port

/** # Configure App #
/*  ====================== */
/** 3) Configure Application */

// This part has already been done for you! Just uncomment the lines below.

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(fileUpload());
// const uploadDirectory = __dirname + path.sep + "uploaded";

// app.use(express.static("uploaded"));
// app.use(express.static("public/"));
// let caches = {};

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
    // CODE BELOW THIS LINE
    // fs.readFile
  });
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
    // fs.writeFile
  });
}

/** # GET Method: Render index.html #
/*  ====================== */
/** 6) Render HTML page */

app.get("/", (req, res) => {
  console.log("GET Method: index.html");
  // CODE BELOW THIS LINE
});

/** # POST Method: Upload to /files #
/*  ====================== */
/** 7) Post Data */

app.post("/files", (req, res) => {
  console.log("POST Method: " + req.files.upload.name);
  // CODE BELOW THIS LINE
});

/** # GET Method: See the file you uploaded #
/*  ====================== */
/** 8) Get Data */

app.get("/uploaded/:name", (req, res) => {
  console.log("GET method: uploaded/:name");
  // CODE BELOW THIS LINE
});

/** # Connecting to Server #
/*  ====================== */

app.listen(port, () => {
  console.log("Connected to server! Go to localhost:3000");
});
