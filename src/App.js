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

export default App;
