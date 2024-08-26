// import React from 'react';  
// import "../styles/task-form.css";
// import { useState } from "react";
// import axios from "axios";
// import { API_URL } from "../config/global";

// export const TaskForm = ({ addTask }) => {
//     const [newTask, setNewTask] = useState("");

//     const handleTaskChange = (e) => {
//         e.preventDefault();
//         setNewTask(e.target.value);
//     };

//     const handleAddTask = async (e) => {
//         e.preventDefault();
//         if (newTask.trim()) {
//             try {
//                 const response = await axios.post(`${API_URL}/todo`, {
//                     title: newTask,
//                 });
//                 if (response.data) {
//                     addTask();
//                     setNewTask("");
//                 }
//             } catch (error) {
//                 console.error("Error during task/add:", error);
//                 alert("Something went wrong. Try again.");
//             }
//         }
//     };

//     return (
//         <form className="task-form">
//             <input
//                 type="text"
//                 name="new-task"
//                 placeholder="Add a new task"
//                 id="new-task"
//                 value={newTask}
//                 onChange={handleTaskChange}
//             />
//             <button type="submit" onClick={handleAddTask}>
//                 Add
//             </button>
//         </form>
//     );
// };
import React, { useState } from 'react'; // Ensure React and useState are imported
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/task-form.css';
import { API_URL } from '../config/global';

export const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleTaskChange = (e) => {
        e.preventDefault();
        setNewTask(e.target.value);
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
      
            try {
                const response = await axios.post(`${API_URL}/todo`, {
                    title: newTask,
                });
                if (response.data) {
                    addTask();
                    setNewTask('');
                }
            
            } catch (error) {
                console.error('Error during task/add: ', error);
                alert('Something went wrong..try again',error);
            }
        }
    

    return (
        <form className="task-form">
            <input
                type="text" 
                name="new-task"
                placeholder="add a new task"
                id="new-task"
                value={newTask}
                onChange={handleTaskChange}
            />
            <button type="submit" onClick={handleAddTask}>
                Add
            </button>
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};
