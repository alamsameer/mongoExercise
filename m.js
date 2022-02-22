
const mongoose=require("mongoose")
const url=' mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb'
mongoose.connect(url).then((res)=>{console.log("connected")}).catch((err)=>{
  console.log(err)
})
