import {useParams} from 'react-router-dom' // useParams는 url에 있는 동적 변수를 가져오게 해준다.
import {useState, useEffect} from 'react'
import SubDetails from '../components/SubDetails'

function Detail() {
    let {id} = useParams()
    console.log(id)

    let [oneMovie, setOneMovie] = useState({})
    let [loading, setLoading] = useState(true)

    const getMovie = async() => {
        const response =  await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json()

        setOneMovie(json.data.movie)
        setLoading(false)
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            {loading ? <div><span>"Loading..."</span></div> : 
                <SubDetails 
                large_cover_image={oneMovie.medium_cover_image}
                title={oneMovie.title}
                year={oneMovie.year}
                description_full={oneMovie.description_full}
                // genres={oneMovie.genres}
                />
            }
        </div>
    )
}

export default Detail