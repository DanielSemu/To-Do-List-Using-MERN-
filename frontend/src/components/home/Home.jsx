import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
const task = [
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
  {
    task: "Home Work",
    status: "Incomplete",
    deadline: "12-13-2024",
  },
];
const Home = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [tasks, setTasks] = useState(
    task.map((item) => ({ ...item, selected: false }))
  );

  // Function to handle checkbox toggle for all tasks
  const handleSelectAllToggle = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      selected: !selectAll,
    }));
    setTasks(updatedTasks);
    setSelectAll(!selectAll);
  };

  // Function to handle individual checkbox toggle
  const handleCheckboxToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].selected = !updatedTasks[index].selected;
    setTasks(updatedTasks);
  };
  /////////////////////////////////////////////////Data Fetching
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('/api/data');
  //             if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //             }
  //             const jsonData = await response.json();
  //             setData(jsonData);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData();
  // }, []);




  return (
    <div>
      <div className="card">
        <div className="add-button-container">
          <h1>Task List</h1>
          <Link
            style={{ textDecoration: "none" }}
            className="btn add-botton"
            to="/addtask"
          >
            Add Task
          </Link>
        </div>
        <div className="table-container">
          <table>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllToggle}
                />{" "}
                Task
              </th>
              <th>Status</th>
              <th>Deadlines</th>
              <th>Actions</th>
            </tr>
            {tasks.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxToggle(index)}
                  />
                  {item.task}
                </td>
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
};

export default Home;
