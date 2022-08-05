import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styles from './Movie.module.css'

function Movie({id, coverImg, title, year, summary, genres}) {

    return (
        <div className={styles.movie}>
          <img src={coverImg} alt={title} className={styles.movie__img} />
          <div>
            <h2 className={styles.movie__title}>   
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
              {genres && genres.map((g) => <li key={g}>{g}</li>)} {/* api에서 genrnes가 없는 영화가 존재하는데 그러한 경우 map을 할경우 없는 property에서 map을 한거여서 에러가 뜬다 => genres && genres.map() 사용 */}
            </ul>
          </div>
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