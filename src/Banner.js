import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'

function Banner() {
  const [bannerMovie, setBannerMovie] = useState('')
  const img_base_path = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData(){
      const results = await axios.get(requests.fetchNetflixOriginals)
      // console.log(results.data.results)
      
      setBannerMovie(results.data.results[Math.floor(Math.random() * results.data.results.length)])
    }

    fetchData()
  }, [])

  return (
    <div className='banner' style={{backgroundImage: 'url('+ img_base_path + bannerMovie.backdrop_path +')'}}>
      <h1>{bannerMovie.title || bannerMovie.name ||bannerMovie.original_name}</h1>
      <div className='cta'>
        <a href=''>Play</a>
        <a href=''>My List</a>
        <p>{bannerMovie.overview?.substring(0, 100)}</p>
      </div>
    </div>
  )
}

export default Banner