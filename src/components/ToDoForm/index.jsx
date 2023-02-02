import React, { useState } from "react"
import { v4 as uuid } from "uuid"

export function ToDoForm(props) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input
        })

        setInput("");
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <form className="toDo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a to do" value={input} name="text" className="toDo-input" onChange={handleChange}/>
            <button className="toDo-button">Add something to do</button>
        </form>
    )
}