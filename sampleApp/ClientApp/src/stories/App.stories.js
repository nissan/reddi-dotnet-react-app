import { storiesOf } from "@storybook/react";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import { describe, it, specs } from "storybook-addon-specifications";
import App from "../components/App";

storiesOf("App", module)
  .add("default", () => {
    const story = <App />;
    specs(() =>
      describe("App", () => {
        it("renders without crashing", () => {
          const div = document.createElement("div");
          ReactDOM.render(<App />, div);
          ReactDOM.unmountComponentAtNode(div);
        });
      })
    );
    return story;
  })

  .add("with custom welcome message", () => {
    const welcomeMessage = "Welcome with a different welcome message";
    const story = <App welcomeMessage={welcomeMessage} />;
    specs(() =>
      describe("App with custom welcome message", () => {
        it("renders without crashing", () => {
          const div = document.createElement("div");
          ReactDOM.render(<App welcomeMessage={welcomeMessage} />, div);
          ReactDOM.unmountComponentAtNode(div);
        });
        it("should render the welcome message", () => {
          //'shallow' will not full-render 'react-emotion' components, so use 'mount' to test
          const wrapper = mount(<App welcomeMessage={welcomeMessage} />);
          const text = wrapper.find("h1").text();
          expect(text).toEqual(welcomeMessage);
        });
      })
    );
    return story;
  });
