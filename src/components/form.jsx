import '../assets/app.css'; 
import { useState } from 'react';
export const Form=({list,setList,value,setValue})=>{
    
    const handleChange = (e) => {
        const val=e.target.value;
        setValue({id:val,content:val, checked:false});
    };
    const handleSubmit = (event,currVlaue)=>{
        event.preventDefault();
        const matchValue = list.find((listVal)=>{
            return listVal.content === currVlaue.content;
            
        })
        if(matchValue) 
        {
            setValue({id:"",content:"",checked:false});
            alert("Task already exists");
            return;
        }
        if(currVlaue.content === "")
        {
            alert("Please enter a task")
            setValue({id:"",content:"",checked:false});
            return;
        } 
           

       
        setList((prev)=>{
            return [...prev,currVlaue];
        });
        setValue({id:"",content:"",checked:false});
    }
    return(
        <form onSubmit={(event)=>handleSubmit(event,value)}>
          <div className="form-div">
            <input type="text" onChange={handleChange} value={value.content}  />
            <button type='submit'>Add</button>
          </div>
        </form>
    )
}