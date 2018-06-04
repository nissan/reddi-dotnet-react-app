import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from '../components/App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('matches snapshot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the welcome message", () => {
  const welcomeMessage = "Welcome to React!";
  //'shallow' will not full-render 'react-emotion' components, so use 'mount' to test
  const wrapper = mount(<App welcomeMessage={welcomeMessage} />); 
  const text = wrapper.find("h1").text();
  expect(text).toEqual(welcomeMessage);
});