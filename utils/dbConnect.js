const mongoose= require('mongoose')

const dbConnect=()=>{
    const MONGODB_URI = "mongodb+srv://khusbumallick:OLFmyYVnuNkcIUNz@cluster0.hjiepqw.mongodb.net/yourdatabase";
    mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('not connected to db')
    })
}

module.exports= dbConnect