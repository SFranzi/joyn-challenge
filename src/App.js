import "./App.css";
import React, { Component } from "react";
import Player from "./components/player";
import MovieLane from "./components/movieLane";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {
    displaySlider: false,
    assets: [
      {
        id: 1,
        title: "Interstellar",
        trailer:
          "http://pdl1.maxdome.de/54/interstellar_9202802_1901_mp40720de20.mp4",
        logo:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Interstellar/artlogo-interstellar-9174710.png/profile:nextgen-web-artlogo-300x123",
        image:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Interstellar/primary-interstellar-9174710.jpg/profile:nextgen-web-primary-503x",
      },
      {
        id: 2,
        title: "Gravity",
        trailer:
          "http://pdl1.maxdome.de/54/gravitytrail_5259189_1901_mp40720de20.mp4",
        logo: null,
        image:
          "https://img.joyn.de/gn/assets/p9248657_k_h9_aa.jpg/profile:nextgen-web-primary-503x",
      },
      {
        id: 3,
        title: "Der Marsianer",
        trailer:
          "http://pdl1.maxdome.de/54/dermarsianer_13689256_1901_mp40720de20.mp4",
        logo:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Der%2BMarsianer%2B-%2BRettet%2BMark%2BWatney/artlogo-der-marsianer-13435098-V1.png/profile:nextgen-web-artlogo-300x123",
        image:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Der%2BMarsianer%2B-%2BRettet%2BMark%2BWatney/primary-der-marsianer-13435098.jpg/profile:nextgen-web-primary-503x",
      },
      {
        id: 4,
        title: "I, Robot",
        trailer:
          "http://pdl1.maxdome.de/54/irobot_17656694_2004_mp40576de20.mp4",
        logo:
          "https://img.joyn.de/ing/originals/t-015/STVM1000000000297643_movie_artLogo.png/profile:nextgen-web-artlogo-300x123",
        image:
          "https://img.joyn.de/ing/originals/t-015/STVM1000000000297643_movie_primary.jpg/profile:nextgen-web-primary-503x",
      },
      {
        id: 5,
        title: "Live Die Repeat",
        trailer:
          "http://pdl1.maxdome.de/54/edgeoftomorr_7928314_1901_mp40720de20.mp4",
        logo:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Live%2BDie%2BRepeat-%2BEdge%2Bof%2BTomorrow/artlogo-Live-Die-Repeat-Edge-of-Tomorrow-7921706.png/profile:nextgen-web-artlogo-300x123",
        image:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Live%2BDie%2BRepeat-%2BEdge%2Bof%2BTomorrow/primary-Live%2BDie-Repeat-Edge-of-Tomorrow-7921706.jpg/profile:nextgen-web-primary-503x",
      },
      {
        id: 6,
        title: "Planet der Affen",
        trailer:
          "http://pdl1.maxdome.de/54/planetderaff_22790264_2011_mp40720de20.mp4",
        logo:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Planet%2Bder%2BAffen-%2BPrevolution/artlogo-planet-der-affen-1291902.png/profile:nextgen-web-artlogo-300x123",
        image:
          "https://img.joyn.de/cms/var/assets/SharedContent/Movies/Planet%2Bder%2BAffen-%2BPrevolution/primary-planet-der-affen-1291902_1.jpg/profile:nextgen-web-primary-503x",
      },
    ],
  };

  handleClick = () => {
    const displaySlider = !this.state.displaySlider;
    this.setState({ displaySlider });
  };

  componentDidMount() {
    //Fetch data from assets.json
  }

  render() {
    const { assets, displaySlider } = this.state;
    return (
      <main className="container-fluid">
        <Switch>
          <Route
            path="/:id"
            render={(props) => (
              <Player assets={assets} {...props} onClick={this.handleClick} />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <Player assets={assets} {...props} onClick={this.handleClick} />
            )}
          />
        </Switch>
        <MovieLane assets={assets} displaySlider={displaySlider} />
      </main>
    );
  }
}
export default App;
