import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Travels.css";

class Travels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 41.8781,
        longitude: -87.6298,
        zoom: 1
      },
      showPopup: true
    };
  }

  getCountries = arr => {
    var countries = new Set(arr.map(x => x.country));
    return countries.size;
  };

  render() {
    const points = [
      { desc: "Home", city: "Chicago", latitude: 41.8781, longitude: -87.6298 },
      {
        desc: "Home: 2016-2018",
        city: "San Francisco",
        country: "USA",
        latitude: 37.7749,
        longitude: -122.4194
      },
      {
        desc: "Home: 1994-2016",
        city: "Ann Arbor",
        country: "USA",
        latitude: 42.2808,
        longitude: -83.743
      },
      {
        desc: "Family Trip",
        city: "Sydney",
        country: "Australia",
        latitude: -33.8688,
        longitude: 151.2093
      },
      {
        desc: "Visiting Sister",
        city: "Montreal",
        country: "Canada",
        latitude: 45.5017,
        longitude: -73.5673
      },
      {
        desc: "Band Trip",
        city: "Toronto",
        country: "Canada",
        latitude: 43.6532,
        longitude: -79.3832
      },
      {
        desc: "Family Origin Trip",
        city: "Fouches",
        country: "Belgium",
        latitude: 49.6911,
        longitude: 5.7144
      },
      {
        desc: "Visiting BFF",
        city: "Shanghai",
        country: "China",
        latitude: 31.2304,
        longitude: 121.4737
      },
      {
        desc: "Post College",
        city: "Copenhagen",
        country: "Denmark",
        latitude: 55.6761,
        longitude: 12.5683
      },
      {
        desc: "Post College",
        city: "Paris",
        country: "France",
        latitude: 48.8566,
        longitude: 2.3522
      },
      {
        desc: "Post College",
        city: "Munich",
        country: "Germany",
        latitude: 48.1351,
        longitude: 11.582
      },
      {
        desc: "Visiting Family-in-Law",
        city: "Pune",
        country: "India",
        latitude: 18.5204,
        longitude: 73.8567
      },
      {
        desc: "Discovering Ancestry",
        city: "Dublin",
        country: "Ireland",
        latitude: 53.3498,
        longitude: -6.2603
      },
      {
        desc: "Post College",
        city: "Rome",
        country: "Italy",
        latitude: 41.9028,
        longitude: 12.4964
      },
      {
        desc: "Family Origins Trip",
        city: "Luxembourg",
        country: "Luxembourg",
        latitude: 49.8153,
        longitude: 6.1296
      },
      {
        desc: "Post College",
        city: "Amsterdam",
        country: "Netherlands",
        latitude: 52.3676,
        longitude: 4.9041
      },
      {
        desc: "Annual Trip 2018",
        city: "Lisbon",
        country: "Portugal",
        latitude: 38.7223,
        longitude: 9.1393
      },
      {
        desc: "Olympics 2018",
        city: "Pyeongchang-gun",
        country: "South Korea",
        latitude: 37.3705,
        longitude: 128.39
      },
      {
        desc: "Annual Trip 2018",
        city: "Madrid",
        country: "Spain",
        latitude: 40.4168,
        longitude: -3.7038
      },
      {
        desc: "Post College",
        city: "Stockholm",
        country: "Sweden",
        latitude: 59.3293,
        longitude: 18.0686
      },
      {
        desc: "Work Trip",
        city: "Basel",
        country: "Switzerland",
        latitude: 47.5596,
        longitude: 7.5886
      },
      {
        desc: "Post College",
        city: "London",
        country: "UK",
        latitude: 51.5074,
        longitude: -0.1278
      },
      {
        desc: "Family Trip",
        city: "Tyrol",
        country: "Austria",
        latitude: 47.2537,
        longitude: 11.6015
      }
    ];

    return (
      <div className="travels">
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <div className="travels-map-layer">
            <p>I've visited:</p>
            <p>{this.getCountries(points)}/195 countries</p>
          </div>
          {points.map(pt => (
            <Marker
              key={pt.city}
              latitude={pt.latitude}
              longitude={pt.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <i className="fa fa-map-marker travels-map-marker" />
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    );
  }
}

export default Travels;
