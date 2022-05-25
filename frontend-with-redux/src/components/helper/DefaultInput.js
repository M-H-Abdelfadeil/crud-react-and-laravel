import React from 'react'

function DefaultInput({name , error , lable  , setValue ,type , value=null}) {
  return (
    <div className='container-input'>
        <label htmlFor={name}>{lable}</label>
        <input defaultValue={value} type={type} id={name} onChange={setValue} name={name} placeholder={lable} />
        <div className='msgError'>{error}</div>
    </div>
  )
}

export default DefaultInput
