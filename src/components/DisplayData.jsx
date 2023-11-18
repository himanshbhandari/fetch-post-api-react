import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const DisplayData = () => {
    const [userdata, setUserData]=useState(null);
    const url='https://api.zippopotam.us/in/';
    let navigate =useNavigate();
    let pincode;

    //get pincode from localstorage
    if(!pincode){
        pincode=localStorage.getItem('pincode')        
    }

    //making funciton for fetch api
    const getData=async ()=>{
        try{
            const res= await axios.get(url+pincode);
            setUserData(res.data);
        }
        catch(e){
            console.log(e.message);
        }
    }

    //fetch api once
    useEffect(()=>{
        getData();
    },[])

    //for clearing display page
    function handleClear(){
        localStorage.setItem('pincode', null);
        navigate('/');       
    }

    if(!userdata){
        //making loader here
        return(
            <div className='loader-container'>
                <div className='loader'></div>
            </div>
            
        )
    }

  return (
    <div>
        
        <header className='header'>
            <h1>Welcome !</h1>
            <button onClick={handleClear}>Clear</button>
        </header>

        <div className='card-container'>
           
            {
                userdata.places.map((ele,i)=>
                <div key={i} className='my-card'>
                    <h4>Country: {userdata.country}</h4>
                    <h4>Postal code: {pincode}</h4>
                    <h4>Place:{ele['place name']}</h4> 
                    <h4>State:{ele.state}</h4>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default DisplayData