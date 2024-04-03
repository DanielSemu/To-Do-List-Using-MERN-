import React from 'react';
import './add_task.css'
import {Link} from 'react-router-dom'

const AddTask = () => {
    return (
        <div className='add_task'>
            <div className="title">
                <h1>Add Task</h1>
                <Link className='back' to='/'>Back</Link>
            </div>
            <form action="" className="form">
                <div className="input">
                    <label htmlFor="">Task
                        <input type="text" required/>  
                     </label>            
                 </div>
                <div className="input">
                    <label htmlFor="">Deadline
                    <input type="date" required/>
                    </label>
                </div>
                <div className="button">
                    <button className='submit'> Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddTask;
