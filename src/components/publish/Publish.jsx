import React from 'react'
import InputIcon from '@mui/icons-material/Input';
import Button from '@mui/material/Button';

import './publish.css'
function Publish() {
  return (
    <>
     <img className='publishImg  mt-12  ml-72' src="https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="singlepostImg"  style={{borderRadius:'8%'}} />

     <div>
        <div className='input   '>
            <div className='flex' >
            <label htmlFor="inpFile">
            <InputIcon  style={{fontSize:30}} />
            </label>
            <input type="file" className='inputFile' id='inpFile' />
            <input type="text" className='inputTitle ml-8 mr-32' placeholder='Enter The Title...' />
            </div>
            <Button className='inputBtn' variant="contained" color="success">
                 Success
            </Button>
        </div>
        <textarea className='textInp' name="inputText" id="inputText" placeholder='Enter the Text' cols="30" rows="10"></textarea>
    </div> 
    </>
  )
}

export default Publish;
