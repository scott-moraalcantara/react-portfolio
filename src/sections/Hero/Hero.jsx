import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profile-pic24.png'
import themeIcon from '../../assets/sun.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
import CV from '../../assets/ResumeDecember2024ScottMora.pdf'
import {useTheme} from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'

function Hero() {
  
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile of Scott"
            />
            {/* <img className={styles.colorMode} 
                 src={themeIcon}
                 alt="Color mode icon"
                 onClick={toggleTheme}
            /> */}
        </div>
        <div className={styles.info}>
            <h1>
              Scott <br />
              Mora  
            </h1>
            <h2>Data Scientist / Data Analyst</h2>
            <span>
               <a href="https://www.linkedin.com/in/scottmora-alcantara/" target= "_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
               </a> 
               <a href="https://github.com/scott-moraalcantara" target= "_blank">
                <img src={githubIcon} alt="Github icon" />
               </a>
            </span>
            <p className={styles.description}>
              Experienced in developing data-driven insights with cross-functional teams, creating impactful dashboards,
              and crafting data-driven narratives for business cases. 
                <br/>
                As a final-year student at the University of Toronto, I excel in data analysis with a focus 
                on delivering measurable results and actionable insights.
            </p>
            <a href={CV} download>
                <button className="hover">
                Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero