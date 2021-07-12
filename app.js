const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  const url = "https://us6.api.mailchimp.com/3.0/lists/518f403204"

  const options = {
    method: "POST",
    auth: "VarunGontla:c2c0e8f072ec6b1096128bdced5be0c8-us6"
  }

  const request = https.request(url, options, function(response) {

      if(response.statusCode === 200) {
        res.sendFile(__dirname+"/success.html");
      }else{
        res.sendFile(__dirname+"/failure.html");
      }

      response.on("data", function(data){
        console.log(JSON.parse(data));
      });
});
request.write(jsonData);
request.end();
});

app.post("/failure.html", function(req, res) {
  res.redirect("/")
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.")
});


// API KEY
// c2c0e8f072ec6b1096128bdced5be0c8-us6

// List ID
// 518f403204
