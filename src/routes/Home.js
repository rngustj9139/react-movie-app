import {useState, useEffect} from 'react'
import Movie from '../components/Movie'

function Home() {
    let [loading, setLoading] = useState(true)
    let [movies, setMovies] = useState([])
  
    const getMovies = async() => {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")  
  
      const json = await response.json()
  
      setMovies(json.data.movies)
      setLoading(false)
    }
  
    useEffect(() => {
      getMovies()
      // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      //         .then((response) => response.json())   // 요즘은 .then 보다 async await을 더 많이 사용한다.
      //         .then((json) => {
      //           setMovies(json.data.movies);
      //           setLoading(false)
      //         })
    }, [])
    
    return (
      <div>
  
        {loading ? <h1>"Loading..."</h1> : null}
  
        {movies.map((movie) => (
          <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} />
        ))}
  
      </div>
    );
}

export default Home