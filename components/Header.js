import { useRouter } from "next/router";
import { useState } from "react";

export const HEADERLINKS = {
  ABOUTME: {
    value: "aboutMe",
    link: "/",
  },
  // EXPERIENCE: {
  //   value: "Experience",
  //   link: "/experience",
  // },
  SKILLS: {
    value: "Skills",
    link: "/skills",
  },
  PROJECTS: {
    value: "Projects",
    link: "/projects",
  },
  BLOGS: {
    value: "Blogs",
    link: "/blog",
  },
};
const Header = ({ active = HEADERLINKS.ABOUTME }) => {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleNavigate = (selectedLink) => {
    router.push(selectedLink);
  };
  return (
    <div className="header-wrapper">
      <ul className="header__links">
        {Object.values(HEADERLINKS).map((value, index) => (
          <li
            className={value.value === active.value ? "active" : ""}
            onClick={() => handleNavigate(value.link)}
            key={index}
          >
            {value.value}
          </li>
        ))}
      </ul>
      <div
        className="hamburger-wrapper"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <input type="checkbox" />
        <div className="bun">
          <div className="burger" />
        </div>
      </div>
      <div
        className="mobile-header-wrapper"
        style={
          openSidebar
            ? {
                transform: "translateX(0)",
              }
            : {}
        }
      >
        <ul>
          {Object.values(HEADERLINKS).map((value, index) => (
            <li
              className={value.value === active.value ? "active" : ""}
              onClick={() => handleNavigate(value.link)}
              key={index}
            >
              {value.value}
            </li>
          ))}
        </ul>
        <div className="social-icon-wrapper--mobile">
          <a href="https://github.com/pulkitnagpal" target="blank">
            <img src="/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/pulkit-nagpal-57430a111/" target="blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/pulkit.nagpal.370" target="blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://twitter.com/PulkitN05908502" target="blank">
            <img src="/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
