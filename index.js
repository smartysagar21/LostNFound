const express= require('express');
const ejs=require("ejs");
const app= express();
const bodyParser = require('body-parser');


let posts=[];

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.render("home",{
        lostObjects:posts

    });
})

app.get("/item/:itemTitle",function(req,res){
    let postTitle=req.params.itemTitle;

    for(let i=0;i<posts.length;i++){
        if(posts[i].item === postTitle){
            res.render("item",{
                obj:posts[i]
            })
        }
    }
})


// app.get("/post/:postTitle",function(req,res){
//     let postTitle = req.params.postTitle;
  
//     for(let i=0;i<posts.length;i++)
//     {
//       if(posts[i].title === postTitle)
//       {
//         res.render("post",{
//           foundPost:posts[i]
//         })
//       }
//     }
//   })
  


app.get("/found",function(req,res){
    res.render("found");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/found",function(req,res){
    console.log(req.body)

    let postObj={
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        item:req.body.item,
        message:req.body.message,
        image:req.body.image
    }

    posts.push(postObj);

    res.redirect("/");
})

app.listen(3000,function(){
    console.log("listening to port 3000");
})