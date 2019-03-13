import React from "react";
import axios from "axios";
const imgStyle = {
  width: "40%",
  height: "40%",
  marginLeft: "5%",
  float: "left"
};
const nameStyle = {
  fontFamily: "Human BBY Web,Arial,Helvetica,sans-serif",
  width: "50%",
  height: "20%",
  float: "right"
};
const priceStyle = {
  fontFamily: "Human BBY Web,Arial,Helvetica,sans-serif",
  width: "50%",
  height: "20%",
  float: "right",
  fontWeight: "bolder"
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Pokemon Go",
          src: "https://picsum.photos/200/?random",
          price: 9.99
        },
        {
          name: "Fitbit Versa",
          src: "https://picsum.photos/200/?random",
          price: 19.99
        },
        {
          name: "Legoland 3",
          src: "https://picsum.photos/200/?random",
          price: 29.99
        },
        {
          name: "Playstation 4 Pro",
          src: "https://picsum.photos/200/?random",
          price: 19.99
        },
        {
          name: "4k UHD 27in Monitor",
          src: "https://picsum.photos/200/?random",
          price: 29.99
        }
      ]
    };
  }
  componentDidMount() {
    console.log("here");
    axios.get("/initial").then(data => {
      console.log(data.data, "data in client after request returns");
      let init = data.data;

      this.setState({
        items: init
      });
    });
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h2 style={{ fontFamily: "Human BBY Web,Arial,Helvetica,sans-serif" }}>
          Related Items
        </h2>
        {this.state.items.map(item => (
          <div
            style={{ display: "inline-block", width: "20%", height: "100%" }}
          >
            <img src={item.src} style={imgStyle} />
            <a href="url" style={nameStyle}>
              {item.name}
            </a>

            <p style={priceStyle}>${item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

//css: width:20%, display, inline block, height: 100%, minor adjustments to the h3s
