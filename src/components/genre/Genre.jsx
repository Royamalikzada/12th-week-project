import React from 'react';
import Movie from '../movie/Movie';

export default class Genre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            movies: [],
            modifiedMovies:[],
            selectedGenre:''
        }

    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                'X-RapidAPI-Key': 'f679e7a865mshed6ca704f07dd94p10385ejsn79e2dec69b71'
            }
        };
        
        fetch('https://movies-app1.p.rapidapi.com/api/genres', options)
            .then(response => response.json())
            .then(response => this.setState({
                genres: response.results
            }))
            .catch(err => console.error(err));

            const options2 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f679e7a865mshed6ca704f07dd94p10385ejsn79e2dec69b71'
                }
            };
            
            fetch('https://movies-app1.p.rapidapi.com/api/movies', options2)
                .then(response => response.json())
                .then(response => this.setState({
                    movies: response.results
                }))
                .catch(err => console.error(err));
    }

    onGenreSelected = (name) =>{
        this.setState({
            selectedGenre: name
        })
        
       const filteredMovies = this.state.movies.filter((movie)=>movie.genres.name === this.state.selectedGenre)

        this.setState({

            modifiedMovies: filteredMovies
        });

    }

    render() {
       console.log(this.state.movies, this.state.genres, this.state.filteredMovies);

        return(
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger" href="#">Netflix</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       {this.state.genres.map(genre => {
                           return (
                            <li className="nav-item">
                                <button className="btn btn-dark" onClick={this.onGenreSelected(genre.name)} type='button'>{genre.name}</button>
                            </li>
                           )
                       })} 
                    </ul>
                    </div>
                </div>
                </nav>

                <Movie movies={this.state.movies} key={this.state.movies._id} />
        </div>
        )
    }
}