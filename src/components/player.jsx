import React, { Component } from "react"; 
import { Link } from 'react-router-dom'; 

class Player extends Component {
  state = {};
  render() {
    const id = this.props.match.params.id || "1"; 
    const {assets, onClick} = this.props; 

    return (
      <React.Fragment>
        {assets.filter(a => a.id === Number(id)).map(selected =>
        <div>
        <video
          key={selected.id}
          autoPlay controls
          id="myVideo"
          src={selected.trailer}
          type="video/webm"
          className="embed-responsive embed-responsive-16by9"
        ></video>
          <Link to={selected.id} onClick={onClick} className="overlay">
            <h3>Ähnliche Videos</h3>
          </Link> 
        </div>
        )}
      </React.Fragment>
    ); 
  }
}

export default Player;
