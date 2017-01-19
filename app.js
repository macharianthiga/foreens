var express = require("express"),
    app     = express();
app.set("view engine","ejs");
app.use(express.static('public'));

//--------------Index Route---------------
app.get("/", function(req, res){
  res.render("index");
});

//-------------About Route-----------------
app.get('/about', function(req,res){
   res.render('about');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Foreens Has Started");
});
