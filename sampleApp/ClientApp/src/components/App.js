import PropTypes from "prop-types";
import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { Container, H1, Header, Image, Text } from "./themes/DefaultTheme";

class App extends Component {
  render() {
    return (
      <Container center>
        <Header>
          <Image src={logo} alt="logo" />
          <H1>{this.props.welcomeMessage}</H1>
        </Header>
        <Text>
          To get started, edit
          <span>
            {" "}
            <code>{this.props.fileLocation}</code>
          </span>
          and save to reload.
        </Text>
      </Container>
    );
  }
}

App.propTypes = {
  fileLocation: PropTypes.string.isRequired,
  welcomeMessage: PropTypes.string
};

App.defaultProps = {
  fileLocation: "src/components/App.js",
  welcomeMessage: "Welcome to React"
};

export default App;
