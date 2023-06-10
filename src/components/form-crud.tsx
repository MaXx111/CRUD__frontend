import React, { useState, memo } from "react"

interface FormCRUDProps {
    onSubmit: (text: string) => void
}

const FormCRUD = memo(function FormCRUD({onSubmit} : FormCRUDProps) {
    const submitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(textValue)
        setTextValue('')
    }

    const [textValue, setTextValue] = useState('');

    const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    return (
        <form className="form-crud" onSubmit={submitHandler}>
            <textarea className="from-textarea" name="" id="" rows={10} cols={30} value={textValue} onChange={textareaHandler}></textarea>
            <button className="form-btn" type="submit">
                <img className="form-btn-img" src="love-favicon.png" alt="love"/>
            </button>
        </form>
    )
})

export default FormCRUD