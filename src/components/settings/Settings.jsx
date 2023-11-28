import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './settings.css'
function Settings() {
  return (
    <>
    <div>
        <div className='flex flex-row justify-between ml-24 mr-24  mt-16 align-middle  '>
        <h1 className='text-4xl text-blue-600 text-bold '>Update Your Settings</h1>
        <p  className='text-red-500'>Delete Your Account</p>
        </div>
        
        <h2  className='mt-6 ml-24 text-2xl'>Profile Picture</h2>
        <div className='flex '>
        <img className='image2 ml-24 mt-3' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="photo" />

        <AccountCircleIcon  className='ml-16 mt-16' 
        style={{fontSize:35}}
        />
        </div>

        <div className='flex flex-col basis-1/3 w-1/3 ml-28 mt-12  mb-24' >

            <label className='settingLabel' htmlFor="">Name : </label>
            <input 
            className='settingLabelInput'
            type="text" 
            placeholder='Enter Yout Name'
            />
            <label 
            className='settingLabel mt-6'
            htmlFor="">Email :</label>
            <input
            className='settingLabelInput'
            placeholder='Enter your email..'
            type="email" />
            <label 
            className='settingLabel  mt-6'
            htmlFor="">Password :</label>
            <input
            className='settingLabelInput'
            placeholder='Enter your password.'
            type="password" />
        </div>

    </div>
    </>
  )
}

export default Settings
