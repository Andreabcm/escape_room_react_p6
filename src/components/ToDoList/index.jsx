import React, { useState}  from "react"
import { ToDoForm } from "../ToDoForm"
import { ToDo } from "../ToDo"

export function ToDoList() {
    const [toDos, setToDos] = useState([]);

    const addToDo = toDo => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return 
        }

        const newToDos = [toDo, ...toDos];
        setToDos(newToDos);
        console.log(newToDos)
    } 

    //Estas líneas comentadas, harían lo mismo que el spread operator
    // let newData = toDos;
    // newData.push(newToDos);
    // setToDos(newData)
    const removeToDo = (id) => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
    }
   

    return(
        <>
            <h1>What's your plan for today?</h1>
            <ToDoForm onSubmit={addToDo} />
            <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
        </>
    )
}