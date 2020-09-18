
import {useRouter} from 'next/router';

export const HEADERLINKS = {
  ABOUTME: {
    value: "aboutMe",
    link: "/"
  },
  EXPERIENCE: {
    value: "Experience",
    link: "/experience"
  },
  SKILLS: {
    value: "Skills",
    link: "/skills"
  },
  PROJECTS: {
    value: "Projects",
    link: "/projects"
  },
  BLOGS: {
    value: "Blogs",
    link: "/blog"
  }
}
const Header = ({active = HEADERLINKS.ABOUTME}) => {
  const router = useRouter();
  const handleNavigate = (selectedLink) => {
    router.push(selectedLink)
  }
  return (
    <div className="header-wrapper">
      <ul className="header__links">
        {
          Object.values(HEADERLINKS).map((value) => (
            <li className={value.value === active.value ? 'active': ""} onClick={() => handleNavigate(value.link)}>{value.value}</li>
          ))
        }
      </ul>
    </div>
  )
}


export default Header