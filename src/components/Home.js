import React from "react";
import { Grid, List, Image, Divider } from "semantic-ui-react";
import resume from "../files/resume.pdf";
import photo from "../img/abby.png";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Grid columns={12}>
          <Grid.Column width={4}>
            <Image src={photo} alt="Abby George" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Abby George</h1>
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
            <Divider />
            <p>
              Hello! I'm Abby. I am a Software Engineer turned Product Manager,
              passionate about working with engineers and users to deliver
              something that everyone is excited about.
            </p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
