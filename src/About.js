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
              <div className='about__icon'>
                <i className='fa fa-linkedin-square' />
                <h2>LinkedIn</h2>
              </div>
            </a>
            <a href='https://github.com/abgeorge7'>
              <div className='about__icon'>
                <i className='fa fa-github-square' />
                <h2>GitHub</h2>
              </div>
            </a>
            <a href='mailto:abbyrgeorge@gmail.com'>
              <div className='about__icon'>
                <i className='fa fa-envelope' />
                <h2>Email</h2>
              </div>
            </a>
            <a href={pdf}>
              <div className='about__icon'>
                <i className='fa fa-file' />
                <h2>Resume</h2>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
};

export default About;
