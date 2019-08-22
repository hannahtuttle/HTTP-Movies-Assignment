import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UpdateMovie = props => {

const [movie, setMovie] = useState({name: '', director: '', metascore: '', stars: ''})

    useEffect(() => {
        const id = props.match.params.id
        console.log(id)
    }, [])


    const handleSubmit = event => {
        event.preventDefault()
        //axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    }

    const handleChange = event => {
        setMovie({
            ...movie,
            [event.target.name]:event.target.value
        })

    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>Title</label>
            <input 
            name= 'name'
            type='text'
            value={movie.name}
            onChange={event => handleChange(event)}
            />
            <label>Director</label>
            <input 
            name= 'director'
            type='text'
            value={movie.director}
            onChange={event => handleChange(event)}
            />
            <label>Metascore</label>
            <input 
            name= 'metascore'
            type='text'
            value={movie.metascore}
            onChange={event => handleChange(event)}
            />
            <label>Actors</label>
            <input 
            name= 'stars'
            type='text'
            value={movie.stars}
            onChange={event => handleChange(event)}
            />
            <button>Update</button> 
        </form>
    )
}

export default UpdateMovie;