
import todomodel from "../models/todoList.js";

// get the saved tasks from the database
export const getTodoList =(req,res)=>{
 todomodel.find({})
        .then((todoList)=>{res.json(todoList)})
        .catch((err)=>{ res.json(err)})
}


// add new task to database
export const addTodoList = (req,res)=>{
    todomodel.create({
        task: req.body.task,
        status:req.bod.status,
        deadline:req.body.deadline
    })
    .then ((todo)=>res.json(todo))
    .catch((err)=>res.json(err))
}

// update task fields 
export const updateTodoList=(req,res)=>{
    const id =req.params.id
    const updateData= {
        task :req.body.task,
        status: req.body.status,
        deadline: req.body.deadline
    }
    todomodel.findByIdAndUpdate(id, updateData)
     .then((todo)=>res.json(todo))
     .catch((err)=>res.json(err))
}


// Delete task from the database
export const deleteTodoList =(req,res)=>{
    const id = rew.params.id
    todomodel.findByIdAndDelete({_id:id})
     .then((todo)=>res.json(todo))
     .catch((err)=>res.json(err))
}



