import React, { useState } from "react";

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);

    const editingTemplate = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                </label>
                <input id={props.id} className="todo-text todoinput" type="text" placeholder={props.name+"..."}/>
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn todo-cancel"
                    onClick={()=>{setEditing(false)}}
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                </button>
            </div>
        </form> 
    );

    const viewTemplate = (
        <div className="todo stack-small">
            <div className="c-cb">
                <input 
                    id={props.id} 
                    type="checkbox" 
                    className="checkbox" 
                    defaultChecked={props.complete} 
                    onChange={()=>props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn"
                    onClick={()=>{setEditing(true)}}
                >
                    Edit
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    onClick={()=>{props.deleteTask(props.id)}}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    return (isEditing ? editingTemplate : viewTemplate);
}