const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
// require("./db/conn2");

const hbs = require("hbs");

const Register = require("./models/registers");
const User = require("./models/info");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);


app.get("/", (req, res) => {
    res.render("index")
});
app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});


app.get("/Maths", (req, res) => {
    res.render("Maths");
});
app.get("/biology", (req, res) => {
    res.render("biology");
});
app.get("/chemistry", (req, res) => {
    res.render("chemistry");
});
app.get("/english", (req, res) => {
    res.render("english");
});
app.get("/it", (req, res) => {
    res.render("it");
});
app.get("/physics", (req, res) => {
    res.render("physics");
});
app.get("/whatwedo", (req, res) => {
    res.render("whatwedo");
});
app.get("/aboutus", (req, res) => {
    res.render("aboutus");
});
app.get("/index", (req, res) => {
    res.render("index");
});


app.post("/contact", async(req, res) => {
    try {
        const userData = new User({
            fullname: req.body.fullname,
        fullemail: req.body.fullemail,
        phone: req.body.phone,
        message: req.body.message
        })

        // const userData = new User(req.body);
       const submitted = await userData.save();
        res.status(201).render("dashboard");
    } catch (error) {
        res.send(400).send(error);
    }
});




app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerEmployee = new Register({

                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })

            const registered = await registerEmployee.save();
            res.status(201).render("index");




        } else {
            res.send("Invalid credentials")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/login",async (req, res) => {
   try{

    const email = req.body.email;
    const password = req.body.password;
    
    console.log(`${email} and password is ${password}`);

   const useremail = await Register.findOne({email:email});
   
   if(useremail.password === password){
       res.status(201).render("dashboard");
   }else{
       res.send("Invalid Credentials");
   }


   }catch(error){
       res.send(400).send("Invalid credentials");
   }
});

app.listen(port, () => {
    console.log(`server is running at port no = ${port}`);
})