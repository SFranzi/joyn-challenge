import React, { Component } from "react"; 

class Player extends Component {
  state = {};
  render() {
    const id = this.props.match.params.id || "1"; 
    const {assets} = this.props; 

    return (
      <React.Fragment>

        {assets.filter(a => a.id === Number(id)).map(selected => 
        <video
          key={selected.id}
          autoPlay controls
          id="myVideo"
          src={selected.trailer}
          type="video/webm"
          className="embed-responsive embed-responsive-16by9"
        ></video> )}
      </React.Fragment>
    ); 
  }
}

export default Player;
