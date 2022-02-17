import React, { useState, useEffect } from 'react';

const initTask = {
  title: '',
  details: '',
  status: '',
};

const taskList = [{ title: 'asdasdasd' }, { title: 'elemento2' }];

function App() {
  const [task, setTask] = useState(initTask);
  const [stateList, setStateList] = useState(taskList);

  useEffect(() => {

  }, [task]);

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
  }

  return (
    <div className="App">
      <ul>
        { stateList.map((taskTeste) => <li key={taskTeste.title}>{taskTeste.title}</li>) }
      </ul>
      <label htmlFor="task-title">
        Task Title
        <input
          id="task-title"
          onChange={handleChange}
          name="title"
          value={task.title}
        />
      </label>
      <label htmlFor="task-details">
        Task Details
        <textarea
          id="task-details"
          style={{ resize: 'none' }}
          onChange={handleChange}
          name="details"
          value={task.details}
        />
      </label>
      <button type="button" onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default App;
