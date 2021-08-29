const express= require('express');
const app = express();

const port = 5000;
const logger =(req, res, next)=>{
  next();
}


/*app.use(logger)
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/myapp/Home.html')
});
app.get('/style.css',  (req,res)=>{
   res.sendFile(__dirname + '/myapp/style.css')
})*/

//app.use(express.static('myapp'));


app.use(addActiveTime =(req, res, next)=> {
    let requestAt= new Date().getHours()
    
  if((requestAt<=9)||(requestAt>=17))
  {
    res.sendFile(__dirname + '/access.html')
  }
  else{
  
      next()
      app.use(express.static('myapp'))
  }
    })
  









app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})
