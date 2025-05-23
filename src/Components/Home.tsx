import WebApp from "@twa-dev/sdk";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatePage";

const Home = () => {
  const elementRef = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career");
  };

  const scrollToElement = () => {
    //@ts-expect-error
    elementRef?.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align the element to the top
    });
  };

  //@ts-expect-error
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    WebApp?.BackButton?.onClick(() => {
      navigate("/")
    })
    return () => {
      WebApp?.BackButton?.onClick(() => {
        history.back()
      })
    }
  }, [])

  return (
    <AnimatedPage type="fade">
      <div id="home" ref={elementRef} style={{
        height: '100vh',
        backgroundColor: 'red',
        color: 'white'
      }}>
        Home
        <button onClick={handleClick}>OnClick</button>
        <p style={{ fontSize: 32 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo
          fugit soluta earum impedit nihil odit, alias accusantium nam expedita
          eaque deserunt ipsa ex numquam deleniti ab magni praesentium nostrum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere
          quod, excepturi minus esse impedit possimus perferendis! Iusto possimus
          dolorem totam ipsum quo doloremque iste placeat voluptates. Laborum,
          itaque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          accusamus nulla doloribus magnam dignissimos accusantium molestiae
          excepturi, sint facere autem, dolores consequatur laboriosam corrupti,
          quas assumenda vel totam asperiores. Voluptatem
        </p>
        <button style={{ padding: '20px' }} onClick={scrollToElement}>clicasdfasdf</button>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Link to={'/'} style={{
            color: 'white',
            backgroundColor: 'black'
          }}>
            Home
          </Link>
          <Link to={'/about-us'} style={{
            color: 'white',
            backgroundColor: 'black'
          }}>
            About Us
          </Link>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
