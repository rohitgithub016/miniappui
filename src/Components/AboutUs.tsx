import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatePage"

const AboutUs = () => {
  return (
    <AnimatedPage>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, officia
        quidem! Eius nam qui aperiam repellat quos doloribus laboriosam quibusdam
        error at. Perferendis magnam repellat recusandae architecto itaque modi
        cumque.
      </div>
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
    </AnimatedPage>
  );
};

export default AboutUs;
