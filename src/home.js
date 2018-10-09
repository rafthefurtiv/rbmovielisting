import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "./content";

class Home extends Component {

    constructor () {
        super()
        this.state = {
          tipo1: '',
          tipo2: '',
          tipo3: '',
          apikey: '&apikey=58d19e10'
        }
        this.tipoLoad = this.tipoLoad.bind(this)
    
        

        this.tipoLoad(1, 'http://www.omdbapi.com/?t=Ghost+in+the+shell'+this.state.apikey);
        this.tipoLoad(2, 'http://www.omdbapi.com/?t=Pirates+of+the+Caribbean'+this.state.apikey);
        this.tipoLoad(3, 'http://www.omdbapi.com/?t=Game+of+thrones'+this.state.apikey);

    }


  render() {

    var h2Style = {
        margin: 0,
        paddingTop: '90px',
        color: 'white',
    };

    var h1Style = {
        color: 'white',
    };

    const toTipe1 = { 
        pathname: "/content",
        param1: this.state.tipo1
      };

      const toTipe2 = { 
        pathname: "/content",
        param1: this.state.tipo2
      };

      const toTipe3 = { 
        pathname: "/content",
        param1: this.state.tipo3
      };

      const urlImage1 = 'url("'+this.state.tipo1.Poster+'")';
      const urlImage2 = 'url("'+this.state.tipo2.Poster+'")';
      const urlImage3 = 'url("'+this.state.tipo3.Poster+'")';

    return (

        <div>
        <Link to={toTipe1}>

        <div className="image-container" style={{backgroundImage: urlImage1}}>
        <h2 style={h2Style}>{this.state.tipo1.Type}</h2>
        <h1 style={h1Style}>{this.state.tipo1.Title}</h1>
        </div>
        </Link>

        <Link to={toTipe2}>
        <div className="image-container" style={{backgroundImage: urlImage2}}>
        <h2 style={h2Style}>{this.state.tipo2.Type}</h2>
        <h1 style={h1Style}>{this.state.tipo2.Title}</h1>
        </div>
        </Link>

        <Link to={toTipe3}>
        <div className="image-container" style={{backgroundImage: urlImage3}}>
        <h2 style={h2Style}>{this.state.tipo3.Type}</h2>
        <h1 style={h1Style}>{this.state.tipo3.Title}</h1>
        </div>
        </Link>
        </div>


        
    );
  }



  tipoLoad (tipo, link) {

    axios.get(link)
     .then(response => {
       console.log(response);
       switch(tipo) {
        case 1: this.setState({tipo1: response.data});break;
        case 2: this.setState({tipo2: response.data});break;
        case 3: this.setState({tipo3: response.data});break;
       } 
       
    });
  }


}
 
export default Home;