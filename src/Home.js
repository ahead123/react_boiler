import React, { Component } from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import { API_URL } from './constants';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Instagram API'
    };
  }

  handleInstagramAPIRequest = (event) => {
    event.preventDefault()
    fetch(API_URL, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json.data))
    .catch(error => console.log("error ",error))
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
