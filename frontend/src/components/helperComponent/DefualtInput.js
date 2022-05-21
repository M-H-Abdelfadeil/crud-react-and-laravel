import React from 'react'

const DefualtInput = ({lable ,type, name , value , handleSetValue , error}) => {
  return (
  
    <div className="form-group">
        <label htmlFor={name}>{lable}</label>
        <input onChange={handleSetValue} type={type} value={value} name={name} className="form-control" id={name}/>
        <small className="form-text text-danger">{error}</small>
    </div>
   
  )
}

export default DefualtInput
