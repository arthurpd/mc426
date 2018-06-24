import React, { Component } from 'react';


const apiUrl = 'http://localhost:8080/Backend/mc426';

export default class AppDecideProjeto extends Component {

  render() {
    return null;
  }

  constructor(props) {
    super(props);
  }

  async handleResponse(response) {
    let authorizationBasic = window.btoa(window.localStorage.getItem('usuarioADA') + ':' + window.localStorage.getItem('senhaADA'));

    window.location = response.projetos[0] + "/tarefas";
  }

  componentWillMount() {
    console.log(window.localStorage.getItem('usuarioADA'));
    var authorizationBasic = window.btoa(window.localStorage.getItem('usuarioADA') + ':' + window.localStorage.getItem('senhaADA'));


    console.log("GET " + apiUrl + "/projetos");
    console.log(authorizationBasic);
    fetch(apiUrl + "/projetos", {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + authorizationBasic
      }
    }).then(response => response.json())
    .then(response => this.handleResponse(response));
  }
};

