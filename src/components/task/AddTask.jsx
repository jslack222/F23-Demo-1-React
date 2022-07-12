import React, { useState } from 'react'; 
import ListDisplay from './ListDisplay'

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
        

    return (
        <div>
            <h1>Add Task</h1>
            <div className="task-form">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
               
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option selected disabled defaultValue>Category</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Errands">Errands</option>
                </select>
                 <button onClick={handleClick}>Add Task</button>
            
            </div>
            <ListDisplay list={list} deleteTask={deleteTask} />   
            
            
        </div>
    )
}

export default AddTask; 