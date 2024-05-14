const express = require('express');
const app = express();
const cors = require('cors')
const port = 5888;
// for deploy process.ENV.PORT || 
const chefs = require('./Data/chefdetails.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Social Chef Server is running')

})
app.get('/chefs',(req,res)=>{
    // console.log(categories)
    res.send(chefs)

})
app.get('/chefs/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id)
    const selectedchef=chefs.find(n=>n.id===id);
    res.send(selectedchef)
})
app.listen(port, ()=>{
    console.log(`Social Chef API is running on port: ${port}`)
})