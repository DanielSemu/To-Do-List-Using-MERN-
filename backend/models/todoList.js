import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
      task:{
        type:String,
        require:true
      },
      status:{
        type:String,
        require:true
      },
      deadline:{
        type:String,
        require:true
      }

})
 
const todomodel= mongoose.model("todolist", todoSchema)

export default todomodel