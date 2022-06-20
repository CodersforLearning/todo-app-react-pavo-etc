import React from "react";

function Form(props) {
    return (
        <form className="todoform">
        <div className="flex">
          <input 
            type="text" 
            id="newtodobox" 
            className="todoinput" 
            name="text" 
            autoComplete="off"
            placeholder='New todo...'
            />
          <button type="submit" className='submitButton btn'>Add</button>
        </div>
      </form>
    );
}

export default Form;