import React from 'react'

import './post.css'
function Post() {
  return (
      <div className='ml-8 mt-6 postDiv'>

        
      <img className='postImg' src="https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="postImg" />

      <div className='flex flex-col align-middle'>

      <ul className='flex space-x-8  mt-2'>
            <li>Life</li>
            <li>Sports</li>
        </ul>
      <h1 className='text-bold text-3xl'>Post Title</h1>

      <p className='mb-2'> 1 hr ago..</p>
        </div>

      <p className='postText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti iure, molestias quo doloremque perferendis expedita consectetur ipsum consequuntur, laborum ratione? Ab esse deleniti aspernatur temporibus exercitationem itaque, necessitatibus laudantium amet accusantium nostrum consequatur magni eum? Molestias voluptas nihil eos consequatur voluptatibus quaerat exercitationem repellat, accusamus atque at, quasi, facilis voluptatum inventore laborum! Asperiores eaque quas libero consequatur error, accusamus provident iure! Rerum facilis voluptatibus ab eligendi neque autem ea praesentium aspernatur consequatur aliquid ducimus quaerat cumque quasi, quis nihil! Consequatur quae nostrum ratione distinctio debitis eos voluptatem corporis. Dolore qui doloremque ipsum nisi consequatur nobis debitis voluptatum, molestias delectus?</p>


    </div>
  )
}

export default Post
