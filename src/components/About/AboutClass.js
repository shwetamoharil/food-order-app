import React from "react";
import Profile from "./ProfileClass";
import "./AboutClass.scss";

class AboutClass extends React.Component {
  constructor(props) {
    console.log("Parent - Constructor");
    super(props);

    // declare state
    this.state = {
      count: 0,
      name: "Shweta",
    };
  }

  componentDidMount() {
    console.log("Parent - ComponentDidMount");
  }

  // Nevere mutate state directly (this.state = something /// nevere do this)
  render() {
    console.log("Parent - Render");
    return (
      <div className="about">
        <div className="about__name">
          <h1>Class Component</h1>
          <h2>Name Prop: {this.props.name}</h2>
          <h3>Count - {this.state.count}</h3>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Update Count
          </button>

          <Profile name={"First Comp"} />
          {/* <Profile name={"Second Comp"} /> */}
        </div>
      </div>
    );
  }
}

export default AboutClass;
