import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Movie({id, coverImg, title, summary, genres}) {

    return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>   
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres && genres.map((g) => <li key={g}>{g}</li>)} {/* api에서 genrnes가 없는 영화가 존재하는데 그러한 경우 map을 할경우 없는 property에서 map을 한거여서 에러가 뜬다 => genres && genres.map() 사용 */}
          </ul>
        </div>
    )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie