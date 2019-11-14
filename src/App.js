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

export default App;
 */

// Demo 2. css animation
/* import React, {useState} from "react";
 import classNames from "classnames";

 import styles from "./styles.css";

 const App = () =>{
   const [animate, setAnimate] = useState(false);
   const handleClick =() => setAnimate(!animate);

   return(
     <button onClick={handleClick}
     className={classNames(
       styles.animate, animate && styles.grow
     )}>
       Grow this link
     </button>
   );
 }

 export default App; */
