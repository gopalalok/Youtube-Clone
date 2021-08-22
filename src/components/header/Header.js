import React, { useState } from 'react'
import './header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }

   const handleIconsClick = () => {
      history.push(`/`)
   }
   const user = useSelector(state => state.auth?.user)

   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />
         <Link to="/f">
            <img
               src='https://i.postimg.cc/nzKSck8d/youtube-icons.jpg'
               alt=''
               className='header__logo'
                  
            />
         </Link>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src={user?.photoURL} alt='avatar' />
         </div>
      </div>
   )
}

export default Header