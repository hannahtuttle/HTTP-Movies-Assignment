import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UpdateMovie = props => {

const [movie, setMovie] = useState({title: '', director: '', metascore: '', stars: [], id: ''})

    useEffect(() => {
        const id = props.match.params.id
        console.log('id',id)
        const individualMovie = props.movie.find(item => `${item.id}` === id)
        if(individualMovie){
            setMovie(individualMovie)
        }
        console.log(individualMovie)
    }, [props.movie, props.match.params.id])


    const handleSubmit = event => {
        event.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            const newMovielist = props.movie.filter(mov => mov.id !== res.data.id)
            newMovielist.push(res.data)
            props.setMovie(newMovielist)
            props.history.push('/')
            //console.log('movielist', newMovielist)
        })
        .catch(error => console.log(error.response))
    }

    //console.log('movie', movie)

    const handleChange = event => {
        setMovie({
            ...movie,
            [event.target.name]:event.target.value
        })

    }

    // const handleStarsChange = (index, event) => {
    //     const updateStars = [...movie.stars]
    //     updateStars[index] = event.target.value
    //     setMovie({
    //         ...movie,
    //         stars: updateStars
    //     })

    // }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>Title</label>
            <input 
            name= 'title'
            type='text'
            value={movie.title}
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