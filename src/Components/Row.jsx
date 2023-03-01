import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Movie from './Movie'

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchUrl).then(response => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])

  return (
      <>
          <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
          <div className="relative flex items-center">
              <div id={'slider'} className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                  {movies.map((item, id) => (
                      <Movie item={item} key={id} />
                  ))}
              </div>
          </div>
    </>
  )
}

export default Row