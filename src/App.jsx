import { useState } from 'react';
import './assets/app.css'; 
import { Display } from './components/display';
import { Form } from './components/form';
export const App=()=>{
  const [list,setList]=useState([]);
  const [value, setValue] = useState({id:"",content:"",checked:false});
    const handleDelete=()=>{
        setList([]);
    }
    const handleDeleteTask=(deltask)=>{
        const newList=list.filter((task)=>{
            return task.content !==deltask.content
        })
        setList(newList);
    }
  return (
    <div className="main-container">
      <h1>List What You Want To Do ...</h1>
      <section>
        <Form list={list} setList={setList} value={value} setValue={setValue}/>
      </section>
      <section>
        <Display handleDelete={handleDelete} handleDeleteTask={handleDeleteTask} list={list} setValue={setValue} setList={setList}/>
      </section>
    </div>
  )
}