import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount() {
    //api call
    const data = await fetch("https://api.github.com/users/shwetamoharil");
    const res = await data.json();
    console.log(res);
    this.setState({
      userInfo: res,
    });
    console.log("Child - componentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Child - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child - componentWillUnmount");
  }

  render() {
    console.log("Child - render " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h1>Name - {this.state.userInfo.name}</h1>
        <img src={this.state.userInfo.avatar_url} width="64px"></img>
      </div>
    );
  }
}

export default Profile;
