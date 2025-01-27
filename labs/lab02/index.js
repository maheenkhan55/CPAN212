import epxress from 'express';
import router from './routers/lab_router.js'; 

const app = epxress();

const PORT = process.env.PORT || 8000;

app.use("/lab", router);

app.get("/" , (req, res)=> {   // test question (req, res)
    res.send("Welcome to the server - GET") 
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)

}) 









