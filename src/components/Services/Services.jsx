import React from 'react';
import './Services.css';
import MediaCard from './Card.jsx'
import perm from '../../images/perm.png';
import coloringHair from '../../images/coloringHair.png';
import hairCut from '../../images/hairCut.png';

class Services extends React.Component{
  render(){
    return(
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
    )
  }
}

export default Services;