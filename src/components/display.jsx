import '../assets/app.css'; 
import { useState } from 'react';
import { SetDatandTime } from './SetDateandTime.jsx';
import { CompletedTasks } from './completed.jsx';
export const Display = ({ list, handleDeleteTask, handleDelete,setValue ,setList}) => {
  const [openTask, setOpenTask]=useState(null);
  const [deadlines, setDeadlines] = useState({});
  const [dlist,setdList]=useState([]);

  const handleToggle = (id)=>{
    if(openTask===id)
    {
      setOpenTask(null);
    }
    else
    {
      setOpenTask(id); 
    }
  }
  const handleDone = (task) => {
  setList(prevList =>
    prevList.map(item =>
      item.id === task.id ? { ...item, checked: true } : item
    )
  );
};
const handleCompleted = () => {
  const completedTasks = list.filter(task => task.checked === true);
  setdList(prev => [...prev, ...completedTasks]);
  const incompleteTasks = list.filter(task => task.checked === false);
  setList(incompleteTasks);
};

  const handleDeadlineSelect = (taskId, date) => {
    setDeadlines(prev => ({ ...prev, [taskId]: date }));
    setOpenTask(null);
  };
  return (
    <>
      <ul>
        {list.map((task) => {
          const deadline = deadlines[task.id];
          return (
            <li key={task.id}>
              <div className="task_div">
                <p className={task.checked===true?"checked":"non_checked"}>{task.content}</p>
                {deadline && <p>by:{deadline.format("DD-MM-YYYY hh:mm A")}</p>}
                 <button onClick={()=>handleCompleted(task)} onClickCapture={()=>handleDone(task)}>Done</button>

                <button onClick={() => handleDeleteTask(task)}>Delete</button>
              </div>
              <SetDatandTime openTask={openTask} task={task} handleDeadlineSelect={handleDeadlineSelect} handleToggle={handleToggle} deadline={deadline}/>
            </li>
          );
        })}
      </ul>

      <button
        className={list.length === 0 ? "hidden" : "visible"}
        onClick={handleDelete}
      >
        Delete All
      </button>
      {dlist.length>0&&<CompletedTasks dlist={dlist} setdList={setdList}/>}
    </>
  );
};
