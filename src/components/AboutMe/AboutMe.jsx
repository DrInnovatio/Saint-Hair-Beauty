import React from 'react'
import hairDresser from '../../images/hairDresser.jpg'

class AboutMe extends React.Component {
  render(){
    return(
       <div className="about-me">
            <h1>About Me</h1>
            <div className="about-me-context">
              <img src={hairDresser} className="she" alt="she"/>
              <div className="introduction">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perspiciatis libero mollitia quos. Illo est, alias quod dolorem similique perspiciatis quisquam nihil aperiam repellat distinctio labore nemo illum exercitationem eum?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perspiciatis libero mollitia quos. Illo est, alias quod dolorem similique perspiciatis quisquam nihil aperiam repellat distinctio labore nemo illum exercitationem eum?</p>
              </div>
            </div>            
          </div>
    )
  }
}

export default AboutMe;