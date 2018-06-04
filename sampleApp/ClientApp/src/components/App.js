import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.svg';
import {Container, Header, Image, H1, Text} from './themes/DefaultTheme';

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
      <code> 
        {this.props.fileLocation} 
      </code> and save to reload. 
      </Text> 
    </Container>
    );
  }
}

App.propTypes = {
  fileLocation: PropTypes.string.isRequired,
  welcomeMessage: PropTypes.string
}

App.defaultProps = {
  fileLocation: 'src/components/App.js',
  welcomeMessage: "Welcome to React"
}

export default App;