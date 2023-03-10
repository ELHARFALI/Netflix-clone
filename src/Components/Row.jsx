import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

const Row = ({ title, fetchUrl, rowID }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchUrl).then(response => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
      <>
          <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
          <div className="relative flex items-center group">
              <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
              <div id={'slider' + rowID} className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                  {movies.map((item, id) => (
                      <Movie item={item} key={id} />
                  ))}
              </div>
              <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
          </div>
    </>
  )
}

export default Row