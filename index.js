import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get('/', async (req,res)=>{
    try{
        const responce = await axios.get("https://v2.jokeapi.dev/joke/Programming")
   console.log(responce.data.joke)
        responce.data.joke !== undefined ? res.render("index.ejs",{jok:responce.data.joke}): res.redirect('/');
       
       
       
    }catch(error){
        console.log(error);
        res.status(500)
    };
    
   
})



app.post('/dark', async (req,res)=>{
    try{
       await axios.get("https://v2.jokeapi.dev/joke/Dark")
        res.redirect("/")
    }catch(error){
        console.log(error);
        res.status(500)
    };
    
   
})



app.post('/pun', async (req,res)=>{
    try{
       await axios.get(" https://v2.jokeapi.dev/joke/Pun")
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.status(500)
    };
    
   
})

app.listen(port,()=>{
    console.log(`Server Liseting at port ${port} Succssuflly !!`);
})