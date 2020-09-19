import Header, {HEADERLINKS} from '../components/Header';
import { useRef, useEffect, useState } from 'react';



function Skills() {
  return (
    <div>
      <Header active={HEADERLINKS.SKILLS}/>
      <div className="skill-page-wrapper content-container">
        <ul className="skill-page__list">
          {
            SKILLS.map((skill, index) => (
              <SkillItem skill={skill} key={index}/>
            )) 
          }
        </ul>
      </div>  
    </div>
  )
}


const SkillItem = ({skill}) => {
  const [level, setLevel] = useState(0);
  const skillRef = useRef();
  
  useEffect(() => {
    skillRef.current.style.width = '0';
    skillRef.current.style.width = `${skill.level}%`
    let interval = null;
    interval = setInterval(() => {
      setLevel((level) => {
        if (level >= skill.level) {
          clearInterval(interval)
          return level
        }
        return level + 1
      })
    }, 2000 / skill.level)
    return () => {
      clearInterval(interval)
    }
  }, [skillRef])
  return (
    <li className="skill-page__listitem">
      <div className="skill-title-wrapper">
        <div className="skill-logo">
          <img src={skill.logo} alt={skill.logo}/>
        </div>
        <p>
          {skill.name}
        </p>
      </div>
      <div className="skill-empty">
        <div className="skill-filled" ref={skillRef}>
          <span>{level}%</span>
        </div>
      </div>
    </li>
  )
}
export default Skills;



const SKILLS = [
  {
    name: "React",
    level: 75,
    logo: "/react-logo.png"
  },
  {
    name: "Redux",
    level: 70,
    logo: "/redux-logo.png"
  },
  {
    name: "Javascript",
    level: 70,
    logo: "/javascript-logo.png"
  },
  {
    name: "Typescript",
    level: 40,
    logo: "/typescript-logo.png"
  },
  {
    name: "GraphQL",
    level: 58,
    logo: "/graphql-logo.png"
  },
  {
    name: "NextJS",
    level: 60,
    logo: "/nextjs-logo.png"
  },
  {
    name: "NodeJS",
    level: 55,
    logo: "/nodejs-logo.png"
  },
  {
    name: "styled-components",
    level: 80,
    logo: "/styled-components-logo.png"
  },
  {
    name: "SCSS",
    level: 70,
    logo: "/scss-logo.svg"
  },
  {
    name: "CSS",
    level: 80,
    logo: "/css-logo.png"
  },
  {
    name: "HTML5",
    level: 75,
    logo: "/html5-logo.png"
  },
  {
    name: "Webpack",
    level: 56,
    logo: "/webpack-logo.png"
  },
  {
    name: "AngularJS",
    level: 50,
    logo: "/angularjs-logo.svg"
  }
]
