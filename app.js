var express =require('express');
var nodemailer = require('nodemailer');
var path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"")));


app.post("/ajax/email",function(request,response){

    const transporter = nodemailer.createTransport({
        
        service: 'gmail',
        auth: {
          user: 'evoting84897@gmail.com',
          pass: 'Votingmail@123'
        }
        });
        var fname = `${request.body.fname}`;
        var lname = `${request.body.lname}`;
        var regno = `${request.body.regno}`;
        var dept = `${request.body.dept}`;
        var email = `${request.body.email}`;
        var phn_num = `${request.body.phn_num}`;
        var gen = `${request.body.gen}`;
        var month = `${request.body.month}`;
        var day = `${request.body.day}`;
        var year = `${request.body.year}`;
        var mailOptions = {
            from: 'Aviral Kapoor <kapooraviral411@gmail.com>',
            to: '',
            subject: 'Form Submission',

            html:'<html><h3>Name: </h3>'+fname+' '+lname+'<br>\
            <h3>Registration Number: </h3>'+regno+'<br>\
            <h3>Department: </h3>'+dept+'<br>\
            <h3>Email: </h3>'+email+'<br>\
            <h3>Mobile Number: </h3>'+phn_num+'<br>\
            <h3>Gender: </h3>'+gen+'<br>\
            <h3>Date of Birth: </h3>'+day+'/'+month+'/'+year+'</html>'
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
               response.json({ message: "An error occured"});
            } 
            else
            {
              response.json({message:"True"});
            }
            });
});

app.listen(3000, ()=> console.log("Listening at 3000, Connected."));