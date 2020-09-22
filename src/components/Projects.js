import React from "react";
import { List, Segment } from "semantic-ui-react";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <List>
          <Segment>
            <b>
              <p className="projects-title">Legislator Contributions</p>
            </b>
            <List className="projects-links">
              <a
                href="https://abgeorge7.github.io/legislator-contributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop fa-sm" />
                <p className="projects-description">Website</p>
              </a>
              <a
                href="https://github.com/abgeorge7/legislator-contributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-sm" />
                <p className="projects-description">Github</p>
              </a>
            </List>
            <p className="projects-description">
              Web app utilizing OpenSecrets.org API to gather information about
              legislators in each state and who contributes to their campaigns.
              Built using ReactJS.
            </p>
          </Segment>
          <Segment>
            <b>
              <p>abby-george.com</p>
            </b>
            <List className="projects-links">
              <a
                href="https://www.abby-george.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-laptop fa-sm" />
                <p className="projects-description">Website</p>
              </a>
              <a
                href="https://github.com/abgeorge7/abby-george.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-sm" />
                <p className="projects-description">Github</p>
              </a>
            </List>
            <p className="projects-description">
              This website! Built using ReactJS and Github Pages.
            </p>
          </Segment>
        </List>
      </div>
    );
  }
}

export default Projects;
