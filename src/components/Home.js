import React from "react";
import { Grid, List, Image } from "semantic-ui-react";
import resume from "../files/resume.pdf";
import photo from "../img/abby.png";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Abby George</h1>
        <Grid columns={2}>
          <Grid.Column>
            <List>
              <List.Item>
                <i className="fa fa-laptop fa-sm" />
                <p>Product Manager, Software Engineer</p>
              </List.Item>
              <List.Item>
                <i className="fa fa-globe fa-sm" />
                <p>Chicago, IL</p>
              </List.Item>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <List.Item>
                  <i className="fa fa-file fa-sm" />
                  <p>View Resume</p>
                </List.Item>
              </a>
            </List>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Image src={photo} alt="Abby George" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
