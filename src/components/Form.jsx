import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Form = () => {


  const navigate=useNavigate();
  
  const inputRef=useRef(null);


 

    function handleSubmit(e){
      let pin=inputRef.current.value;

        e.preventDefault();
        if(!pin){
          alert('Enter pin code')
        }
       else if(pin.length>=6){
         localStorage.setItem('pincode' ,parseInt(pin));
          navigate('/display');
        }else{
          alert("write valid pin")
        }

    }


  return (
    <div className='my-form'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='Enter-pincode'>Enter Postal Code:</label>
            <br/>
            {/* <input type='number' ref={inputRef} placeholder='Enter postal code' value={num} onChange={handleChange}/> */}
            <input type='text' ref={inputRef} placeholder='Enter postal code'/>
            <br/>
            <button type='submit' className='click-me'>Click me</button>
        </form>
    </div>
  )
}

export default Form