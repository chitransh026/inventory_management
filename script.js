const express =require('express')
const mongoose=require('mongoose')
const path=require('path')

const app=express()

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/categories',async(req,res)=>{
    // Logic to get categories
    const Category = require('./models/category');
    const categories=await Category.find();
    res.json(categories)
})

app.post('/categories',async(req,res)=>{
    const{name,description}=req.body
    const Category = require('./models/category');
    const category=new Category({name,description})
    await category.save()
    res.json(category)
})

app.get('/items',async(req,res)=>{
    const Item=require('./models/Item')
    const items=await Item.find().populate('categoryId')
    res.json(items)
})

app.post('/items',async(req,res)=>{
    const{name,description,price,quantity,categoryId,supplier,supplyprice}=req.body
    const Item=require('./models/Item')
    const item =new Item({name,description,price,quantity,categoryId,supplier,supplyprice})
    await item.save()
    res.json(item)
})

app.get('/suppliers',async(req,res)=>{
    const Supplier=require('./models/supplier')
    const supplier=await Supplier.find()
    res.json(supplier)

})

app.post('/suppliers',async(req,res)=>{
    const{name,contactmail,contactnumber,address}=req.body
    const Supplier=require('./models/supplier')
    const supplier=new Supplier({name,contactmail,contactnumber,address})
    await supplier.save()
    res.json(supplier)
})

mongoose.connect('mongodb://localhost:27017/inventory').then(()=>{
    console.log('Connected to MongoDB')}).catch((err)=>{(
    console.error('Error connecting to MongoDB',err)
    )})

    app.listen(3000,()=>{
        console.log('server is running ')
    })