const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const conn=require('./db')
const cors=require('cors');
const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')
const port=process.env.PORT;
conn();
app.use(express.json());
app.use('/users',userRoutes);
app.use('/admins',adminRoutes);
app.use(cors());
app.listen(port,()=>{
    console.log(`Server running on port:${port}`)
})