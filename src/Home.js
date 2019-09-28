import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <section id='home'>
        <div className='home__background' />
        <div className='home__content'>
          <h1>Abby George</h1>
          <h2>Software Engineer, Chicago</h2>
          <AnchorLink href='#about'>
            <i className="fa fa-arrow-circle-down"></i>
          </AnchorLink>
        </div>
      </section>
    );
  }
};

export default Home;
