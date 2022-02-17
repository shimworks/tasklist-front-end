import React, { useState, useEffect } from 'react';
import api from './api/api';

const initTask = {
  taskTitle: '',
  taskDetail: '',
  status: 'In Progress',
  created: new Date(),
};

function App() {
  const [task, setTask] = useState(initTask);
  const [stateList, setStateList] = useState([]);

  async function fetchList() {
    try {
      const { data } = await api.get('');
      setStateList(data);
    } catch (err) {
      return err;
    }
    return true;
  }

  async function insertList() {
    try {
      await api.post('task', task);
    } catch (err) {
      return err;
    }
    return true;
  }

  useEffect(() => {
    fetchList();
  });

  function handleChange({ target: { name, value } }) {
    setTask({
      ...task,
      [name]: value,
    });
  }
  function handleClick() {
    setStateList([
      ...stateList,
      task,
    ]);
    insertList();
  }

  return (
    <div className="App">
      <ul>
        { stateList.map((elem) => <li key={elem.taskTitle}>{elem.taskTitle}</li>) }
      </ul>
      <label htmlFor="task-title">
        Task Title
        <input
          id="task-title"
          onChange={handleChange}
          name="taskTitle"
          value={task.taskTitle}
        />
      </label>
      <label htmlFor="task-details">
        Task Details
        <textarea
          id="task-details"
          style={{ resize: 'none' }}
          onChange={handleChange}
          name="taskDetail"
          value={task.taskDetail}
        />
      </label>
      <button type="button" onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default App;
