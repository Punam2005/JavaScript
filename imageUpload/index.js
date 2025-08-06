const path = require('path');
const express=require('express');
const multer = require('multer');
const fs=require('fs');
const app=express();
const port=8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Middleware to log requests
app.use((req, res, next) => {
    fs.appendFile('logs.txt', `${Date.now()}: Request received for ${req.url}\n`, (err) =>
         {
            next(err); // Call next with error if any
         });
    console.log("hello from middleware 1");
    
});

app.use((req, res, next) => {
    console.log("hello from middleware 2j");
    return res.end("hey");
});

app.get('/', (req, res) => {
    res.render('homepage' );    
});
app.post('/upload',upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/'); // Redirect to homepage after upload
    //return res.send('File uploaded successfully');   
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}   );