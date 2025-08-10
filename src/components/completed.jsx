import { useState } from "react";
import  "../assets/comp.css";
import { ImBin } from "react-icons/im";
export const CompletedTasks = ({ dlist,setdList}) => {
  const [isOpen, setIsOpen] = useState(false);
const handleDeleteTaskB=(deltask)=>{
        const newList=dlist.filter((task)=>{
            return task.content !==deltask.content
        })
        setdList(newList);
    }
    let now = new Date();
    let currentDateTime = now.toLocaleString(); 
    let currentDate = now.toLocaleDateString(); 
    let currentTime = now.toLocaleTimeString();
  return (
    <div className="completed_task">
      <div 
        className="completed_header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Completed ({dlist.length})</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
      </div>

      {isOpen && (
        <ul className="completed_list">
          {dlist.map((task, index) => (
            <li key={index} className="completed_item">
              <span className="checkmark">✔</span>
              <p>{`${task.content} on ${currentDate} at ${currentTime}` }</p>
              <div className="bin" >
                <ImBin onClick={()=>handleDeleteTaskB(task)}/>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
