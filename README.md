# FTWD_Node_Weekly_01
Boilerplate for Weekly Assignment 1 (Node Module) 

Guide to using the application
1: Press 'Choose files' button and choose one file to upload
2: An preview will be shown upon successful upload. (If you would like to test the functionality, please upload an image. Preview for other file types aer not available at the moment)
3. press "Submit to upload" button
4. Upon successfully upload, a link will be provided to download the uploaded file. copy the url link provided and paste it in the address bar.
5. File will be available to be downloaded.


Difficulties:
1. Can I add a css file, link to html file, and style the application? If possible, will I only be able to style the homepage but not the "/files" and "/uploaded/:name" pages?
2. For the res sending user the link to download the image, can it be an anchor link?
3. Tried to implement the  pop up message by 
    - npm install node-popup
    - adding the following codes inside app.post("/files", (req, res) => {} but it doesn't work
        import {alert} from 'node-popup';
        alert('File uploaded successfully!');
4. The application only works when uploading one file, no idea how to work with multiple files yet
5. Wanted to edit the "Choose files" button, but no idea where to edit it, can't find the code
6. Will try to implement fs.readdir later, I think I can figure it out.
7: I added the image preview, but it only works with images, will need to make it work with other file types.