// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Menu from './menu';
import Barratarefas from './barratarefas';
import Centroadicionarequipe from './centroadicionarequipe';
import Barraagenda from './barraagenda';
import './telacriarequipe.css';


function render() {
    return <div className="telacriarequipe-telacriarequipe-9">
        <div className="telacriarequipe-0">
            <div className="telacriarequipe-menu_instance_7">
                <Menu nomeUsuario={this.props.nomeUsuario} /> 
            </div>
        </div>
        <div className="telacriarequipe-1">
            <div className="telacriarequipe-barratarefas_instance_2">
                <Barratarefas listaTarefas={[]} /> 
            </div>
            <div className="telacriarequipe-centroadicionarequipe_instance-1">
                <Centroadicionarequipe nomeEquipe={this.props.nomeEquipe} membrosEquipe={this.props.membrosEquipe} handleClick={this.props.handleClick} setNome={this.props.setNome} setMembros={this.props.setMembros} corBotao={this.props.corBotao} mensagemErro={this.props.mensagemErro} /> 
            </div>
            <div className="telacriarequipe-barraagenda_instance_2">
                <Barraagenda /> 
            </div>
        </div>
        <div className="telacriarequipe-2" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
