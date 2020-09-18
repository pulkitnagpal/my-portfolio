import Header, {HEADERLINKS} from '../components/Header';

function Projects() {
  return (
    <div>
      <Header active={HEADERLINKS.PROJECTS}/>
      <div className="project-page-wrapper content-container">
        <div className="project-list">
          {projectData.map((item, index) => {
            return (
              <div key={index}>
                <div className="project-item">
                  <h4>{item.title}</h4>
                  <div className="project-item__techinfo">
                    {
                      item.technologies.map((techitem, index) => {
                        return (
                          <span key={index} className={`techchip--${techitem}`}>{techitem}</span>
                        )
                      })
                    }
                  </div>
                  <div className="project-item__cta">
                    {item.links.site && <a className="btn-cta" href={item.links.site} target="blank">VISIT SITE</a>}
                    <a className="btn-cta" href={item.links.code} target="blank">CODE</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}


const projectData = [
  {
    title: "Simple Chat App like messenger. Enter name and start chatting.",
    technologies: ['react', 'firebase'],
    links: {
      code: "https://github.com/pulkitnagpal/chat-app-react-firebase",
      site: "https://facebook-messenger-clone-2fbaf.web.app"
    }
  }, 
  {
    title: "My Personal Portfolio which uses SSG feature of NextJS",
    technologies: ['Nextjs', 'react', 'SCSS'],
    links: {
      code: "https://github.com/pulkitnagpal/chat-app-react-firebase",
      // site: ""
    }
  },
  {
    title: "React Todo App. Enter # in title or description and start adding daily todo items. Filter using tag clicks",
    technologies: ['react', 'redux'],
    links: {
      code: "https://github.com/pulkitnagpal/react-todo",
      site: "https://tags-reactodo.herokuapp.com/"
    }
  },
  {
    title: "Guess Number Game. Select a number b/w 1-99 and give hints to computer to help it guess",
    technologies: ['react-native', 'redux'],
    links: {
      code: "https://github.com/pulkitnagpal/guess-num-game-react-native",
      // site: "https://tags-reactodo.herokuapp.com/"
    }
  },
  {
    title: "PingPong Game. Simple game built with javascript, CSS and HTML",
    technologies: ['VanillaJS', 'HTML', 'CSS'],
    links: {
      code: "https://github.com/pulkitnagpal/ping-pong-vanillaJS",
      // site: "https://tags-reactodo.herokuapp.com/"
    }
  }
]

export default Projects;
