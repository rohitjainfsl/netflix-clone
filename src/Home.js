import React from 'react'
import Row from './Row'
import Banner from './Banner'
import Header from './Header'
import requests from './requests'
import './netflix.css'

function Home() {
  return (
    <div className='netflix'>

      <Header />

      <Banner />

      <Row 
        endPoint={requests.fetchNetflixOriginals}
        heading = 'Netflix Originals'
        big = {true}
      />
      <Row 
        endPoint = {requests.fetchTrending}
        heading = 'Trending'
      />
      <Row 
        endPoint = {requests.fetchTopRated}
        heading = 'Top Rated'
      />
      <Row 
        endPoint = {requests.fetchActionMovies}
        heading = 'Action Movies'
      />
      <Row 
        endPoint = {requests.fetchComedyMovies}
        heading = 'Comedy Movies'
      />
      <Row 
        endPoint = {requests.fetchHorrorMovies}
        heading = 'Horror Movies'
      />
      <Row 
        endPoint = {requests.fetchRomanceMovies}
        heading = 'Romantic Movies'
      />
      <Row 
        endPoint = {requests.fetchDocumentaries}
        heading = 'Documentaries'
      />
      
    </div>
  )
}

export default Home