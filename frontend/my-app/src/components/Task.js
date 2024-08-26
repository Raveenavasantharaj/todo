// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import '../styles/Task.css';

// export const Task = ({ task, updateTask, deleteTask }) => {
//     const [taskTitle, setTaskTitle] = useState(task);

//     const handleChange = (e) => {
//         e.preventDefault();
//         setTaskTitle(e.target.value);
//     };

//     const handleUpdate = async () => {
//         if (taskTitle.trim() !== task) {
//             const taskUpdated = await updateTask(taskTitle);
//             if (!taskUpdated) {
//                 setTaskTitle(task);
//             } else {
//                 alert('Task updated');
//             }
//         } else {
//             alert('Change the task to update');
//         }
//     };

//     return (
//         <li className="task">
//             <input
//                 type="text"
//                 name="task-title"
//                 value={taskTitle}
//                 onChange={handleChange}
//             />
//             <button type="button" onClick={handleUpdate}>
//                 Update
//             </button>
//             <button type="button" id="delete" onClick={deleteTask}>
//                 Delete
//             </button>
//         </li>
//     );
// };

// Task.propTypes = {
//     task: PropTypes.string.isRequired,
//     updateTask: PropTypes.func.isRequired,
//     deleteTask: PropTypes.func.isRequired,
// };
// import React, { useState } from 'react';
import React, { useState } from 'react'; // Ensure React and useState are imported
import PropTypes from 'prop-types';
import '../styles/Task.css';

export const Task = ({ task, updateTask, deleteTask }) => {
    const [taskTitle, setTaskTitle] = useState(task);

    const handleChange = (e) => {
        e.preventDefault();
        setTaskTitle(e.target.value);
    };

    const handleUpdate = async () => {
        if (taskTitle.trim() !== task) {
            const taskUpdated = await updateTask(taskTitle);
            if (!taskUpdated) {
                setTaskTitle(task);
            } else {
                alert('Task updated');
            }
        } else {
            alert('Change the task to update');
        }
    };

    return (
        <li className="task">
            <input 
                type="text"
                name="task-title"
                value={taskTitle}
                onChange={handleChange}
            />
            <button type="button" onClick={handleUpdate}>
                Update
            </button>
            <button type="button" id="delete" onClick={deleteTask}>
                Delete
            </button>
        </li>
    );
};

Task.propTypes = {
    task: PropTypes.string.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

