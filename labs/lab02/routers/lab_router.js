// this orgnizes the endpoints
import express from "express"; 

const router = express.Router();

// link pages and comp - to app.js = export
router.get("/", (req, res) => {
    res.send("Maheen")
})

// name -> /lab/name
router.get("/name", (req, res) => {
    res.send("Maheen Khan")
})


router.get('/greeting', (req, res) => {
    const studentNumber = "n01491668";
    res.send(`Name: Maheen, Student Number: ${studentNumber}`);
});

router.get("/add/:x/:y", (req, res) =>{
    const x = parseFloat(req.params.x); // Fixed from params to query
    const y = parseFloat(req.params.y);

    res.send(`${x+y}`)
})

router.get("/calculate/:x/:y/:z", (req, res) =>{ 
    const x = parseFloat(req.params.x); // Fixed from params to query
    const y = parseFloat(req.params.y);
    const z = (req.params.z);

    if (z === "+" ) {

        res.send(`${x+y}`) 
    }else if (
        z === "-" 
    ) {    res.send(`${x-y}`) 
}   else if (
    z === "*" 
) {    res.send(`${x*y}`) 

}else if (
    z === "/" 
) {    res.send(`${x/y}`) 

}else if (
    z === "**" 
) {    res.send(`${x**y}`) 
} else {
    res.send("wrong operation")
}

})


router.get("/calculate/a:b:/:operation")

export default router;



