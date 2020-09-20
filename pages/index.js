import { useEffect, useState } from "react";
import Header, { HEADERLINKS } from "../components/Header";
import Button from "../components/Button";

const AboutMe = () => {
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.15em solid orange}";
    document.body.appendChild(css);
  }, [showDetails]);
  const handleClick = () => {
    setShowDetails(true);
  };
  return (
    <>
      <Header active={HEADERLINKS.ABOUTME} />
      {showDetails ? (
        <div className="detail-page-wrapper content-container">
          <div className="detail__imagewrapper">
            <div className="detail__image">
              <img src="/profile-pic.png" alt="profile_pic" />
            </div>
            <span
              className="detail__backicon"
              onClick={() => setShowDetails(false)}
            >
              &#10132;
            </span>
          </div>
          <p>
            I am a software engineer having 2.5 yrs of work experience in
            Frontend development. I am passionate about Javascript and learning it inside out. I write technical blogs in my free time. Apart from work I love music and travelling.
          </p>
          <div className="detail__cta">
            {/* <button className="btn-cta" onClick={() => setShowDetails(false)}>BACK</button> */}
            <a className="btn-cta" href="/resume.pdf" target="blank">RESUME</a>
          </div>
        </div>
      ) : (
        <div className="about-page-wrapper content-container">
          <div className="about-page__main">
            <h1>PULKIT NAGPAL</h1>
            {/* <p>Just Another Frontend Guy</p> */}
            <p
              className="typewrite"
              data-period="1000"
              data-type='[ "Just Another Frontend Guy", "I Love Javascript !!!" ]'
            >
              <span className="wrap"></span>
            </p>
            <div className="about-page__knowmore">
              <Button text={"Tap to Know More"} onClick={handleClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};

export default AboutMe;
