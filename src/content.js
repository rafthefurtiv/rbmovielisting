import React, { Component } from "react";

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: this.props.location.param1
          }
     
      }

  render() {

    var h2Style = {
        margin: 0,
        paddingTop: '600px',
        color: 'white',
    };

    var h1Style = {
        color: 'white',
    };

    const urlImage = 'url("'+this.state.content.Poster+'")';

    return (
        <div className="content-container" style={{backgroundImage: urlImage}}>
        <h2 style={h2Style}>{this.state.content.Type}</h2>
        <h1 style={h1Style}>{this.state.content.Title}</h1>   
        <h3 style={h1Style}>{this.state.content.Released}</h3>
        <h3 style={h1Style}>{this.state.content.Country}</h3>
        </div>
    );
  }
}
 
export default Content;