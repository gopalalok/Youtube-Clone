import React, { useState,useEffect } from 'react'
import './sidebar.scss'

import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
   const [active, setActive] = useState('active')
   const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }

   useEffect(() => {
      
      var btns = document.getElementsByClassName("textDecoration");
      for (var i = 0; i < btns.length; i++) 
      {
         btns[i].addEventListener("click", function() 
         {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
         })
      }
   },[]);
   
   return (
      <nav
         className={sidebar ? 'sidebar open' : 'sidebar'}
         onClick={() => handleToggleSidebar(false)}>
         <Link to='/' className='textDecoration active'>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions' className='textDecoration'>
            <li>
               <MdSubscriptions size={23} />
               <span>Subscriptions</span>
            </li>
         </Link>

         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
         </li>

         <hr />

         <li onClick={logOutHandler}>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>
   )
}

export default Sidebar
