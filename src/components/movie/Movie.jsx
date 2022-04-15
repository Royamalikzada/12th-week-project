import React from 'react';
import { Link } from 'react-router-dom'; 
import MovieDetails from './MovieDetails';
import { useParams } from 'react-router-dom';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
       
        return(
            <div className='container'>
                <div className='row d-flex justify-content-center text-center'>
                    {this.props.movies.map(movie => {
                        return (
                            <div className='col-md-4 col-sm-12 mt-3 mb-3' key={movie._id}>
                            <div className="card" style={{width: "25rem"}}>
                                <img src={`${movie.image}`} style={{width: "90%", height: "30rem", margin: '1% auto'}} className="card-img-top" alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <Link to={`movie/${movie._id}`} className='btn btn-primary'>See details</Link>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        )
    }
}