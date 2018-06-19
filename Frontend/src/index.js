import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router'

import './index.css';
// Step 1: import the design from above
// Pagedraw generates the JSX and CSS files you need.
import AppLogin from './applogin'
import AppEquipes from './appequipes'
import AppCriarEquipe from './appcriarequipe'
import AppProjetos from './appprojetos'
import AppCriarProjeto from './appcriarprojeto'
import AppDetalheEquipe from './appdetalheequipe'
import AppTarefas from './apptarefas'
import AppCriarTarefa from './appcriartarefa'
// There's no special libraries or javascript layout systems, just code written for you.

render((
<Router>
  <Switch>
      <Route exact path="/" component={AppLogin} />
      <Route exact path="/equipes" component={AppEquipes} />
      <Route exact path="/tarefas" component={AppTarefas} />
      <Route exact path="/projetos" component={AppProjetos} />
      <Route path="/equipes/nova" component={AppCriarEquipe} />
      <Route path="/projetos/novo" component={AppCriarProjeto} />
      <Route path="/tarefas/nova" component={AppCriarTarefa} />
      <Route exact path="/equipes/:idEquipe([0-9]{1,40})" component={AppDetalheEquipe} />
  </Switch>
</Router>    ), document.getElementById('root'));
