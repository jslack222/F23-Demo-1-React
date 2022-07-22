import React, { useState } from 'react'; 
import ListDisplay from './ListDisplay'
import {useFormik} from "formik"


const AddTask = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [category, setCategory] = useState("");
    //always put useState() at the top so it can be organized and be used in the needed functions.
    
    const handleClick = () => {
        setList([...list, { task: input, category: category }])
        setInput("")
    }

    const deleteTask = (index) => {
        const newState = list
        newState.splice(index, 1)
        setList([...newState])
    }
        

    const formik = useFormik({
        initialValues: {
            task: "", 
            category: null
        }, 
        onSubmit: (values) => {
          // if (values.category !== null && values.task !== "") {
          //     setList([...list, values]);
          //     formik.handleReset(); //clears out the form once user uses inputs
          // } else {
          //     return
          // }

          if (values.category === null || values.task === "") return
          setList([...list, values]);
              formik.handleReset();
        }
    })

    return (
        <div>
            <h1>Add Task</h1>
            <form className="task-form" onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    value={formik.values.task}
                    name="task"
                    onChange={formik.handleChange} />
               
                <select
                    onChange={formik.handleChange}
                    name="category"
                    value={formik.values.category}>
                    <option selected disabled defaultValue>Category</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Errands">Errands</option>
                </select>
                 <button type= "submit">Add Task</button>
            
            </form>
            <ListDisplay list={list} deleteTask={deleteTask} />   
            
            
        </div>
    )
}

export default AddTask; 