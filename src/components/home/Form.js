import React from 'react';
import useInput from '../../customhook/useInput';

const Form = () => {

    const [title,bindTitle,resetTitle] = useInput();
    const [content,bindContent,resetContent] = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        resetTitle();
        resetContent();
    }

    return (
        <div className="section">
           <form>
                <h5 className="grey-text">New Note</h5>
                    <div className="input-field">
                        <input id="note-title" type="text" className="validate" {...bindTitle}/>
                        <label for="note-title" className="active" >Note Title</label>
                    </div>

                    <div className="input-field">  
                        <textarea id="note-content" className="materialize-textarea" {...bindContent}></textarea>
                        <label for="note-content">Note Content</label>
                    </div>
                    <button className="btn green">Add</button>
            </form> 
        </div>
    )
}

export default Form;
