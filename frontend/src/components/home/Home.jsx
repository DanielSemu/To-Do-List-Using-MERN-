import React from 'react';
import './home.css'
const tasks=[
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
    {
        task:"Home Work",
        status:"Incomplete",
        deadline:"12-13-2024"

    },
]
const Home = () => {
    return (
        <div>
           <div className="card">
            <div className="add-button-container">
                <h1>Task List</h1>
                <button className='btn add-botton'>Add Task</button>
            </div>
            <div className="table-container">
            <table>
  <tr>
  <th><input type="checkbox" /> Task</th>
  <th>Status</th>
  <th>Deadlines</th>
  <th>Actions</th>
  </tr>
  {tasks.map((item)=>(
    <tr>
  <td><input type="checkbox" />{item.task}</td>
  <td>{item.status}</td>
  <td>{item.deadline}</td>
  <td>
    <button className="btn edit">Edit</button>
    <button className="btn delete">Delete</button>
 </td>
  </tr>
  ))}
 
</table>
</div>

           </div>
        </div>
    );
}

export default Home;
