import React from 'react'

const DefualtTextarea = ({lable , name , value , handleSetValue , error}) => {

  return (
    <div>
       <div className="form-group">
        <label htmlFor={name}>{lable}</label>
        <textarea  onChange={handleSetValue} value={value}  name={name} className="form-control" id={name}></textarea>
        <small className="form-text text-danger">{error}</small>
    </div>
    </div>
  )
}

export default DefualtTextarea
