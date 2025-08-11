require('dotenv').config();
const express= require('express');
const connectDB = require('./db/index.js');
const users=require('./MOCK_DATA.json');

const port=8000;
const app=express();
connectDB();
//database
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error connecting to the database:", error);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Database connection error:", error);
//     }
// })




//Routes
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id, 10);
        const user = users.find(u => u.id === id);
        return res.json(user);
    })
    .put((req, res) => {
        //edit user with id
        return res.json({status:"pending"});
    })  
    .delete((req, res) => {
        //delete user with id
        return res.json({status:"pending"});})






// app.get('/api/users/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const user = users.find(u => u.id === id);
//     return res.json(user);
// });

app.post('/api/users', (req, res) => {
    return res.json({status:"pending"});
});

// app.patch("/api/users/:id", (req, res) => {
//     return res.json({status:"pending"});
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});