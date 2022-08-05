import {useParams} from 'react-router-dom' // useParams는 url에 있는 동적 변수를 가져오게 해준다.
import {useEffect} from 'react'

function Detail() {
    let {id} = useParams()
    console.log(id)

    const getMovie = async() => {
        const response =  await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = response.json()

        return json
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <h1>Detail</h1>
    )
}

export default Detail