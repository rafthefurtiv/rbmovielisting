import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Search extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            value: '',
            content: '',
            found: '',
            apikey: '&apikey=58d19e10'
          }
        
        this.searchClick = this.searchClick.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);

      }

  render() {

    const toContent = { 
        pathname: "/content",
        param1: this.state.content
      };

    return (

        <div className="searchDiv" style={{textAlign: 'center'}}>
        <p> Search by Title</p>

            <input value={this.state.value} onChange={this.updateInputValue} style={{margin: '100px', marginBottom: '50px'}}></input>

            <button onClick={this.searchClick}>Cerca</button>

    <Link to={toContent}>
            <div>
                <br></br>
                   <p> {this.state.content.Title}</p>
                   <p> {this.state.content.Released}</p>
                   <p> {this.state.content.Genre}</p>
                   <p> {this.state.content.Actors}</p>
                   <p> {this.state.found}</p>
            </div>
            </Link>
        </div>

    );
  }


  searchClick () {
    axios.get('http://www.omdbapi.com/?t='+this.state.value.replace(' ', '+')+this.state.apikey)
     .then(response => {
       console.log(response);
       this.setState({content: response.data});
       if(this.state.content.Response == 'False')
       {
        this.setState({found: 'FILM NOT FOUND'});
       }
       else{
        this.setState({found: ''});
       }
    });
  }


  updateInputValue (evt) {
    this.setState({
      value: evt.target.value
    });
  }

}
 
export default Search;