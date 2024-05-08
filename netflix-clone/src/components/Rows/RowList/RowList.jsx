import React from 'react'
import './rowList.css'
import Row from '../Row/Row'
import requests from '../../../utils/requests'
function RowList() {
return (
    <div>
        <Row
            title = "NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow = {true}
        />
        <Row title = "TRENDING NOW" fetchUrl = {requests.fetchTrending} />
        <Row title = "TOP RATED" fetchUrl = {requests.fetchTopRated} />
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
)
}

export default RowList