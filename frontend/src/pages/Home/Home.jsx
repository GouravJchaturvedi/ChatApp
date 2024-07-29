import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-6 bg-yellow-300 rounded-md overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
