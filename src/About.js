import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pdf from './AbbyGeorge_Resume.pdf';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <section id='about'>
        <div className='about__background' />
        <div className='about__content'>
          <AnchorLink href='#home'>
            <i className="fa fa-arrow-circle-up"></i>
          </AnchorLink>
          <h1>About</h1>
          <div className='about__icons'>
            <a href='https://www.linkedin.com/in/abbygeorge'>
              <i className='fa fa-linkedin-square' />
            </a>
            <a href='https://github.com/abgeorge7'>
              <i className='fa fa-github-square' />
            </a>
            <a href='mailto:abbyrgeorge@gmail.com'>
              <i className='fa fa-envelope' />
            </a>
            <a href={pdf}>
              <i className='fa fa-file' />
            </a>
          </div>
        </div>
      </section>
    );
  }
};

export default About;
