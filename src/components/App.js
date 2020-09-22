import React from "react";
import { Container, Menu, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import logo from "../img/favicon.png";
import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Menu>
            <Menu.Item>
              <Link to="/">
                <Image src={logo} alt="Abby George" size="mini" />
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/travels">Travels</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <a
                  href="https://www.github.com/abgeorge7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-lg" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://www.linkedin.com/in/abbygeorge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-lg" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="mailto:abbyrgeorge@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope fa-lg" />
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Container>
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
