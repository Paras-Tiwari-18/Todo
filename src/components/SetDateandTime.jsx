import BasicDateTimePicker from './calendar.jsx'
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
export const SetDatandTime = ({openTask,task,handleDeadlineSelect,handleToggle,deadline})=>{
    return(
         <div className="date_time_pick">
                {openTask === task.id && (
                  <BasicDateTimePicker
                    DT={deadline}
                    setDT={(date) => handleDeadlineSelect(task.id, date)}
                  />
                )}
                <button onClick={()=>handleToggle(task.id)}>
                  <FaRegCalendarTimes className={openTask===task.id?"visible-c":"hidden-c"}/>
                  <FaRegCalendarCheck className={openTask!==task.id?"visible-c":"hidden-c"}/>
                </button>
                
          </div>
    )
} 