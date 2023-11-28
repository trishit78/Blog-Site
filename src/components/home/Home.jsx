import React from 'react' 

import Sidebar from '../sidebar/Sidebar' 
import Posts from '../posts/Posts'


function Home() {
  return (
    <div className='flex w-full'>
      <Posts/>
      <Sidebar/>

    </div>
  )
}

export default Home
