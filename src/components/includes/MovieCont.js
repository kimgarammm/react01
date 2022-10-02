import { checkPropTypes } from 'prop-types'
import React from 'react'

function Moviecont() {
  return (
    <section className='movie__cont'>
      <div className="container">
        <div className="movie__inner">
          {movies.map((movie)=>(
            <MovieItem
            k/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Moviecont