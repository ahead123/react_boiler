import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './constants'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Instagram API'
    };
  }

  handleInstagramAPIRequest = (event) => {
    event.preventDefault()
    axios.get(API_URL)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

	render() {
    const { value } = this.state
		return (
			<div>
        <h3>{ value }</h3>
        <div>
          <button 
            className="btn btn-primary"
            onClick={this.handleInstagramAPIRequest}
          >
            Use Instagram API
          </button>
        </div>
			</div>
		);
	}
}