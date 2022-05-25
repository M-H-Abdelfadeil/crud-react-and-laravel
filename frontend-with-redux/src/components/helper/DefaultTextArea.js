import React from 'react'

const DefaultTextArea = ({name , error , lable  , setValue , value}) => {
  return (
    <div>
      <div className='container-input'>
        <label htmlFor="description">{lable}</label>
        <textarea defaultValue={value} id={name} onChange={setValue} name={name} placeholder={lable}  ></textarea> 
        <div className='msgError'>{error}</div>
    </div> 
    </div>
  )
}

export default DefaultTextArea
