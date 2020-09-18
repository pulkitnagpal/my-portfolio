import Header, { HEADERLINKS } from "../components/Header";

function Blogs() {
  return (
    <div>
      <Header active={HEADERLINKS.BLOGS} />
      <div className="blog-page-wrapper content-container">
        <div className="blog-list">
          {blogData.map((item, index) => {
            return (
              <div key={index}>
                <a className="blog-item" href={item.link} target="blank">
                  <div className="blog-item__front">
                    <img src={item.image} alt={item.image} />
                    <div className="blog-item__content">
                      <h4>{item.title}</h4>
                      <p className="blog-item__date">{item.date}</p>
                    </div>
                  </div>
                  <div className="blog-item__back">
                    <p>{item.description}</p>
                    <p className="blog-item__readmore">Read More</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const blogData = [
  {
    title: "Transpile JSX using your own custom built babel plugin",
    description:
      "Ever wondered how does react jsx code (<div>Hello World</div>) gets compiled to React.createElement('div', null, 'Hello World').",
    image: "/babel-blog.jpg",
    date: "16/08/2020",
    link:
      "https://dev.to/pulkitnagpal/transpile-jsx-using-your-own-custom-built-babel-plugin-4888",
  },
  {
    title: "Need of Concurrent mode(Experimental) in React",
    description:
      "I will discuss some of my observations on concurrent rendering in react which is still in experimental stage.",
    image: "/react-blog.jpeg",
    date: "21/06/2020",
    link:
      "https://dev.to/pulkitnagpal/playing-with-concurrent-mode-of-react-2jai",
  },
  {
    title: "Using Throttling and Debouncing with React hooks",
    description:
      "In this post I'd like to share my knowledge on how we can use throttle and debounce functions with help of react hooks.",
    image: "/react-hook-blog.png",
    date: "12/06/2020",
    link:
      "https://dev.to/pulkitnagpal/using-throttling-and-debouncing-with-react-hooks-57f1",
  },
];

export default Blogs;
