import React from 'react'
import MediaCard from '../Cards/Card.jsx'
import './Landing.css';
import hairDresser from '../../images/hairDresser.jpg';
import perm from '../../images/perm.png';
import coloringHair from '../../images/coloringHair.png';
import hairCut from '../../images/hairCut.png';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo.jsx'

class Landing extends React.Component {
  render(){
    return(
      <div >
          <BackgroundVideo/>
        

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
              <MediaCard
              image={perm}
              service={"Perm"}
              explain={"This article may include references and links to products and services from one or more of our advertisers.  We may be paid compensation when you click on links to those products and/or services. As an Amazon Associate we earn from qualifying purchases."}
              />
              <MediaCard
              image={coloringHair}
              service={"Coloring Hair"}
              explain={"New Year, new hair! In fact, we're not only beginning a new year, but also a new decade — it's the perfect time to change up your look. To get 2020 started the right way, we've compiled the trending hair colors that are going to become the most stylish shades of the year. "}
              />
              <MediaCard
              image={hairCut}
              service={"hair Cut"}
              explain={"This ultra-white shade Michelle Williams is sporting takes platinum blonde to the next level. The almost silver hair color is trending all over Instagram as of late (blame Daenerys Targaryen). Make sure you grab some purple shampoo to maintain this icy hue."}
              />
            </div>
          </div>

      </div>
    )
  }

}

export default Landing;