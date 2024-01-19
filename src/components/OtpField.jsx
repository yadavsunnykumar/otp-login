import React, { useState } from 'react'
import OtpSubmit from './OtpSubmit'


const OtpField =()=>{
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)


    const handlePhoneNumber=(e)=>{
        
        setPhoneNumber(e.target.value)
    }
    const handlePhoneSubmit =(e)=>{
        e.preventDefault()
        //Phone validations
        const regex = /[^0-9]/g;
        if(phoneNumber.length>10 || regex.test(phoneNumber)){
            alert("Invalid PhoneNumber")
            return
        }
        // Show Otp Field
        setShowOtpInput(true)
    }
    const onOtpSubmit =(otp) =>{
        console.log("Login Successful" ,otp)
    }
  return (
    <div>
        {!showOtpInput?<form onSubmit={handlePhoneSubmit}> 
        <input type="text" placeholder='Enter Your Phone Number' value={phoneNumber} onChange={handlePhoneNumber}/>
        <button type="submit">Submit</button>
        </form>:<div>
            <h1>Enter otp sent to {phoneNumber}</h1>
            <OtpSubmit length={4} onOtpSubmit={onOtpSubmit} />
            </div>}
    </div>
  )
}

export default OtpField