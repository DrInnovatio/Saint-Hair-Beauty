import React from 'react'
import MediaCard from '../Cards/Card.jsx'
import './Landing.css';
import hairDresser from '../../images/hairDresser.jpg';


class Landing extends React.Component {
  render(){
    return(
      <div className="main-landing">

          <div className="banner">
            <h1>Angela Park</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti accusamus nobis veniam quidem, similique dignissimos nemo voluptates laborum suscipit, temporibus incidunt repudiandae</p>
          </div>

          <div className="about-me">
            <h1>About Me</h1>
            <div className="about-me-context">
              <img src={hairDresser} className="she" alt="she"/>
              <div className="introduction">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perspiciatis libero mollitia quos. Illo est, alias quod dolorem similique perspiciatis quisquam nihil aperiam repellat distinctio labore nemo illum exercitationem eum?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perspiciatis libero mollitia quos. Illo est, alias quod dolorem similique perspiciatis quisquam nihil aperiam repellat distinctio labore nemo illum exercitationem eum?</p>
              </div>
            </div>            
          </div>

          <div className="cards">
            <h1>Our Services</h1>
            <div className="tiles">
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
            </div>
          </div>

      </div>
    )
  }

}

export default Landing;