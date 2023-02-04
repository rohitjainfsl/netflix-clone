import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

function Row(props) {
  // console.log(props)
  const [movies, setMovies] = useState([])
  const img_base_path = 'https://image.tmdb.org/t/p/original'


  //useEffect: we need useEffect when:
  // - we need to execute a particular code just once
  // - we need to execute a particular code whenever a variable is modified

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(props.endPoint)
      console.log(result.data.results)
      setMovies(result.data.results)
    }

    fetchData()
  }, [])

  


  return (
    <div className='row'>
      <h1>{props.heading}</h1>
      <div className={(props.big === true) ? 'movieRow big' : 'movieRow'}>
        {
          movies.map((movie, index) => {
            return (
              <img key={index} src={img_base_path + movie.poster_path} title={movie.title || movie.name || movie.original_name} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Row