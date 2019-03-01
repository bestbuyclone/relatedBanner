import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Pokemon Go", pic: "srcasdfcode", price: 9.99 },
        { name: "Fitbit Versa", pic: "srccasdfode", price: 19.99 },
        { name: "Legoland 3", pic: "srccasdfode", price: 29.99 },
        { name: "Playstation 4 Pro", pic: "srccasdfode", price: 19.99 },
        { name: "4k UHD 27in Monitor", pic: "srccasdfode", price: 29.99 }
      ]
    };
  }
  render() {
    return (
      <div style={{ width: "100%", border: "3px solid black" }}>
        <h2>Related Items</h2>
        {this.state.items.map(item => (
          <div
            style={{ display: "inline-block", width: "20%", height: "100%" }}
          >
            <h3
              style={{
                width: "50%",
                height: "20%",
                float: "right"
              }}
            >
              {item.name}
            </h3>
            <img
              src="https://picsum.photos/200/?random"
              style={{ width: "40%", height: "40%", margin: "0 0 0 5%" }}
            />
            <h3
              style={{
                width: "50%",
                height: "20%",
                float: "right",
                marginTop: "-10%",
                position: "relative"
              }}
            >
              {item.price}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

//css: width:20%, display, inline block, height: 100%, minor adjustments to the h3s
