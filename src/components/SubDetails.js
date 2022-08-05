import PropTypes from 'prop-types'
import styles from './SubDetails.module.css'

function SubDetails({ large_cover_image, title, year, description_full }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.mostTop}>Detail of Movie</h1>
            <div className={styles.img}>
                <img src={large_cover_image} alt={title} />
            </div>
                <h2 className={styles.texts}>{title}</h2>
                <p className={styles.texts}>{year}</p>
                <p>{description_full}</p>
            {/* <div>
                <ul>
                    {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
            </div> */}
        </div>
    )
}

SubDetails.propTypes = {
    large_cover_image: PropTypes.string,
    title: PropTypes.string,
    description_full: PropTypes.string
}

export default SubDetails