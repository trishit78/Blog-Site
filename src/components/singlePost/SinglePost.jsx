import React from 'react'


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './singlePost.css'
function SinglePost() {
  return (
    <div className='ml-32 mr-32  mt-16'>
       <img className='singlepostImage' src="https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="singlepostImg"  style={{borderRadius:'8%'}} />


<div className='titlebar'>

       <h1 className='text-bold text-5xl mt-4'>Post Title</h1>
       <div className='flex space-x-4'>
       <EditIcon  style={{ color: 'green', cursor:'pointer' ,fontSize:35 }}/>
       <DeleteIcon  style={{ color: 'red', cursor:'pointer',fontSize:35 }}/>
       </div>
</div>
       {/* button */}
       <div className='mb-2 mt-4 flex new'>
        <h3 className='text-2xl'>Author: Trishit</h3>

       <p className=' text-xl'> 1 hr ago..</p>
       </div>

       <p className='singleText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam dolorum veniam dignissimos quam aspernatur debitis quo sed voluptatibus aperiam est beatae, reprehenderit dolores voluptate deserunt a eos. Accusantium similique doloremque animi sunt in dolore harum maxime enim, laboriosam tenetur autem at, earum ad voluptates commodi nobis laborum! Sapiente obcaecati exercitationem reprehenderit! Sit ab, eligendi aut omnis perspiciatis repudiandae provident veniam? Nobis alias error labore ipsa beatae praesentium, amet, perferendis, quidem cupiditate deleniti itaque. Sequi, maiores beatae quos libero, doloribus odio exercitationem porro ut nisi neque soluta est explicabo, nihil fugiat repellendus possimus. Nam corrupti, optio excepturi sed non in quas explicabo numquam, perspiciatis ipsum similique, autem consequatur nostrum. Possimus, nemo quam nam, hic doloremque labore numquam alias veritatis corrupti ipsam perspiciatis esse, totam excepturi dolor. Praesentium corrupti at nulla inventore explicabo! Exercitationem officiis repellat harum vero labore magnam ad nihil quia totam ipsa quos laborum nostrum blanditiis, molestias possimus inventore. Corrupti iusto aspernatur voluptatibus voluptatem eveniet obcaecati dolores nisi nostrum cum reiciendis non delectus maxime perferendis exercitationem, vitae, temporibus quos, blanditiis vero magnam tenetur sunt maiores expedita est? Excepturi cumque error temporibus sit autem iure earum dolor ipsum vel iste itaque minus veniam, rerum aperiam, similique fugit dolorem minima.</p>
    </div>
  )
}

export default SinglePost
