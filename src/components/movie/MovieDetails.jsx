import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails(props) {
    
        const {id} = useParams();
        const [singleMovie, setSingleMovie] = useState({});

        useEffect(()=>{
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                    'X-RapidAPI-Key': '3edf72356dmsh32cd75163184843p15094djsn80f22b228826'
                }
            };

            fetch(`https://movies-app1.p.rapidapi.com/api/movie/${id}`, options)
            .then(response => response.json())
            .then(response => setSingleMovie(response.result))
            .catch(err => console.error(err));
        },[])
    
        return(
            
            <div className='text-center'>
                {console.log(singleMovie)}
                <div className="card" style={{width: "30%"}}>
                    <img src={singleMovie.image?.toString() || ''} className="card-img-top" alt="movieImage"/>
                    <div className="card-body">
                        <h5 className="card-title">{singleMovie.title}</h5>
                        <p className="card-text">{singleMovie.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Year: {singleMovie.year}</li>
                    </ul>
                </div>
            </div>
        )
    
}