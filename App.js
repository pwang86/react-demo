/* // Demo 1. PureComponent
import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.PureComponent {
  render() {
    return <h1>Hi there, my name is {this.props.name}!</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

class App extends React.Component {
  state = {
    greeted: false,
    name: "Joni"
  };

  componentDidMount() {
    this.setState({ greeted: true });
  }

  render() {
    return <Greeting name={this.state.name} />;
  }
}

export default App; */
/* 
// Demo 2. css animation
import React, { useState } from "react";
import classNames from "classnames";

import "./styles.css";

const App = () => {
  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);

  return (
    <button
      onClick={handleClick}
      className={classNames("animate", animate && "grow")}
    >
      Grow this link
    </button>
  );
}; */

// Demo 3. Hooks
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
