import React, {useState} from 'react'
import axios from 'axios'

const UpdateMovie = props => {

const [movie, setMovie] = useState({name: '', director: '', metascore: '', actors: ''})

    const handleSubmit = event => {
        event.preventDefault()

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
            name= 'actors'
            type='text'
            value={movie.actors}
            onChange={event => handleChange(event)}
            />
            <button>Update</button> 
        </form>
    )
}

export default UpdateMovie;