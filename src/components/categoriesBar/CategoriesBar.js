import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getPopularVideos,
   videoCategories,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
import './categoriesBar.scss'



const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(videoCategories())
   }, [dispatch])

   const { category } = useSelector(
      state => state.videoCategory
   )


   
   const handleClick = value => {
      setActiveElement(value)
      if (value === 'All') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(value))
      }
   }

   return (
      <div className='categoriesBar'>
         <span onClick={() => handleClick('All')} className={activeElement === 'All' ? 'active' : ''}>All</span>
         {category.map((cat, i) => (
            <span onClick={() => handleClick(cat.snippet.title)} className={activeElement === cat.snippet.title ? 'active' : ''}>
               {cat.snippet.title}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar
