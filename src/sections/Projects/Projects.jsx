import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/spotify-logo-png-7053.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'


function Projects() {
  return <section id='projects' className='styles.container'>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
       <ProjectCard src={viberr} link='https://github.com/scott-moraalcantara/Spotify-Recommendation-System'
       h3="Spotify with Machine Learning"
       p="Song and Playlist Recommendation"/>
       <ProjectCard src={freshBurger} link='https://github.com/scott-moraalcantara/Spotify-Recommendation-System'
       h3="F1 Data Analysis"
       p="Race Data Insights Analysis"/>
       <ProjectCard src={freshBurger} link='https://github.com/scott-moraalcantara/Spotify-Recommendation-System'
       h3="Fantasy Football Analysis"
       p="Race Data Insights Analysis"/>
    </div>
    </section>
}

export default Projects