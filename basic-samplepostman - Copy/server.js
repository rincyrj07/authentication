const app = require("./app")

const PORT = 4000;

const userRoutes = require("./routes/userRoutes");

app.use("/api/v1", userRoutes);
//const router = express.Router(); 







// const sampleMiddleware = (req,res,next) => {
//     console.log("Middleware");
//     next();
// }

// app.use(sampleMiddleware);

//console.log(__dirname);

// app.get('/', (req,res)=>{
//    res.sendFile(__dirname + '/index.html')
//    //throw Error("Some error");
//    });

// app.get('/about', (req,res)=>{
//     res.send("This is about page");
// });

// app.get('/profile', (req,res)=>{
//     res.send("This is profile page");
// });


// router.get('/contact', (req,res)=>{
//     res.send("Contact");
// });

// app.use('/', router);

//console.log("inside entry point log");

app.use((err,req,res,next)=>{
    //console.log(err.message);
    res.send(err.message);
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);

});