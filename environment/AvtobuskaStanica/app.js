// IMPORT ========================================================================
var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    fs                    = require('fs'),
    path                  = require('path'),
    Linija                = require('./models/linija'),
    User                  = require('./models/user');
    

// CONFIG ========================================================================
mongoose.connect("mongodb://localhost:27017/avtobuska_db", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "Diplomska Rabota",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
    res.locals.currentUser = req.user; 
    next();
});
var izbrisaniLinii = [];
    

// ROUTES ========================================================================
app.get("/", function(req, res){
    res.render("index");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    User.register(new User(
        {username: req.body.username, imePrezime: req.body.imePrezime, datumNaRaganje: req.body.datumNaRaganje, 
        telefon: req.body.telefon, pol: req.body.pol, student: req.body.student}
        ), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        } 
            passport.authenticate("local")(req, res, function(){
                res.redirect("/user");
            });
    });
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/user",
    failureRedirect: "/login"
  }) ,function(req, res){
});

app.get("/user", isLoggedIn, function(req, res) {
    if (req.user.username=="admin") {
        res.redirect("/siteLinii");
    } else {
    izbrisaniLinii = JSON.parse(fs.readFileSync('izbrisaniLinii.json'));
    res.render("user", {izbrisaniLinii: izbrisaniLinii});
    }
});


app.get("/user/add/:id", isLoggedIn, function(req, res) {
    Linija.findById(req.params.id, function(err, linija){
        if(err) {
            console.log(err);
        } else {
            User.findById(req.user.id, function(err, user){
                if(err) {
                    console.log(err);
                } else {
                    user.linii.push(linija);
                    user.save(function(err, user){
                        if(err){
                            console.log(err);
                        } else {
                            res.redirect("/user");
                        }
                    });
                }
            });
        }
    });
});

app.get("/user/delete/:id", isLoggedIn, function(req, res) {
            User.findById(req.user.id, function(err, user){
                if(err) {
                    console.log(err);
                } else {
                    for(var i=0;i<user.linii.length;i++)
                        if(user.linii[i]._id==req.params.id)
                            user.linii.splice(i, 1);
                            
                    user.save(function(err, user){
                        if(err){
                            console.log(err);
                        } else {
                            res.redirect("/user");
                        }
                    });
                }
            });
});

app.post("/user/uspeshnoPlakanje", isLoggedIn, function(req, res){
    setTimeout(function() {res.render("uspeshnoPlakanje", {izbrisaniLinii: izbrisaniLinii})}, 5000);
    User.update({username : req.user.username}, { $set: { linii: [] }}, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Uspeshno plakanje");
    }
  });
});


app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.get("/siteLinii", function(req, res){
    Linija.find({}, function(err, siteLinii){
            if(err){
                console.log(err);
            } else {
                res.render("siteLinii", {linii: siteLinii});
            }
        });
});

app.get("/galeb", function(req, res){
     Linija.find({prevoznik: "galeb"}, function(err, siteLinii){
            if(err){
                console.log(err);
            } else {
                res.render("galeb", {linii: siteLinii});
            }
        });
});

app.get("/delfina", function(req, res){
     Linija.find({prevoznik: "delfina"}, function(err, siteLinii){
            if(err){
                console.log(err);
            } else {
                res.render("delfina", {linii: siteLinii});
            }
        });
});

app.get("/transkop", function(req, res){
     Linija.find({prevoznik: "transkop"}, function(err, siteLinii){
            if(err){
                console.log(err);
            } else {
                res.render("transkop", {linii: siteLinii});
            }
        });
});

app.get("/rule", function(req, res){
     Linija.find({prevoznik: "rule"}, function(err, siteLinii){
            if(err){
                console.log(err);
            } else {
                res.render("rule", {linii: siteLinii});
            }
        });
});


app.post("/novaLinija", function(req, res){
    Linija.create(
        {
            prevoznik: req.body.prevoznik,
            trgnuvaOd: req.body.trgnuvaOd,
            trgnuvaVo: req.body.den+ " " +req.body.trgnuvaVo,
            destinacija: req.body.destinacija,
            cena: req.body.cena
        }
    , function(err){
        if(err) {
            console.log(err);
        } else {
            res.redirect('back');
        }
    });
});


app.get("/delete/:id", function(req, res){
    izbrisaniLinii.push(req.params.id);
    fs.writeFileSync(path.resolve(__dirname, 'izbrisaniLinii.json'), JSON.stringify(izbrisaniLinii));
    Linija.findByIdAndRemove(req.params.id, function(err) {
        if(err){
            console.log(err);
        } else {
            res.redirect('back');
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// SERVER START ========================================================================
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("=============================== Serverot startuva ===============================");
}) 
