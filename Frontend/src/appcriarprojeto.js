import React, { Component } from 'react'

import './index.css'
// Step 1: import the design from above
// Pagedraw generates the JSX and CSS files you need.
import TelaCriarProjeto from './pagedraw/telaadicionarprojeto'

const apiUrl = 'http://localhost:8080/Backend/mc426'

export default class AppCriarProjeto extends Component {
  render () {
    return (
      <TelaCriarProjeto handleClick={this.handleSubmit}
        nomeProjeto={this.state.nomeProjeto}
        descricao={this.state.descricao}
        idEquipes={this.state.idEquipes}
        prazo={this.state.prazo}
        setNomeProjeto={this.setNomeProjeto}
        setDescricao={this.setDescricao}
        setIdEquipes={this.setIdEquipes}
        setPrazo={this.setPrazo}
        nomeUsuario={this.state.nomeUsuario}
      />
    )
  }

  async handleSubmit () {
    var authorizationBasic = window.btoa(window.localStorage.getItem('usuarioADA') + ':' + window.localStorage.getItem('senhaADA'))
    let response1 = await window.fetch(apiUrl + '/projetos/', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + authorizationBasic
      },
      body: JSON.stringify({
        nome: this.state.nomeProjeto,
        descricao: this.state.descricao,
        prazo: this.state.prazo
      })
    })
    if (this.state.idEquipes !== '') {
      let responseJson = await response1.json()
      await window.fetch(apiUrl + '/projetos/' + responseJson.id + '/equipes/', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + authorizationBasic
        },
        body: JSON.stringify({
          equipes: this.state.idEquipes.split(/[ ,]/).filter(function (el) { return el.length !== 0 }).map(x => '/equipes/' + x)
        })
      })
    }
    window.location = '/projetos'
  }

  setNomeProjeto (value) {
    this.setState({
      nomeProjeto: value
    })
  }

  setDescricao (value) {
    this.setState({
      descricao: value
    })
  }

  setIdEquipes (value) {
    this.setState({
      idEquipes: value
    })
  }

  setPrazo (value) {
    this.setState({
      prazo: value
    })
  }

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setNomeProjeto = this.setNomeProjeto.bind(this)
    this.setDescricao = this.setDescricao.bind(this)
    this.setIdEquipes = this.setIdEquipes.bind(this)
    this.setPrazo = this.setPrazo.bind(this)

    this.state = {
      nomeUsuario: window.localStorage.getItem('usuarioADA'),
      nomeProjeto: '',
      descricao: '',
      idEquipes: '',
      prazo: ''
    }
  }

  componentDidMount () {
  }
};
