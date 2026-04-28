import meter1 from "../assets/img/c++.png";
import meter2 from "../assets/img/java.png";
import meter3 from "../assets/img/python.png";
import meter4 from "../assets/img/cs.png";
import meter5 from "../assets/img/react.png";
import meter6 from "../assets/img/spring.png";
import meter7 from "../assets/img/pytorch.png";
import meter8 from "../assets/img/php.png";
import meter9 from "../assets/img/unity.png";
import meter10 from "../assets/img/android.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am proficient in core programming languages including C++, Python, and Java and experienced in developing web applications with React.js and Spring Boot. I am also skilled in machine learning and deep learning applications using PyTorch, and indulge in game development with Unity.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>PyTorch</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>php</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
