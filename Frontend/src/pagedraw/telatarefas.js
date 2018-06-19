// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Menu from './menu';
import Barratarefas from './barratarefas';
import Centrotarefas from './centrotarefas';
import Barraagenda from './barraagenda';
import './telatarefas.css';


function render() {
    return <div className="telatarefas-telatarefas-6">
        <div className="telatarefas-0">
            <div className="telatarefas-menu_instance_8">
                <Menu nomeUsuario={this.props.nomeUsuario} /> 
            </div>
        </div>
        <div className="telatarefas-1">
            <div className="telatarefas-barratarefas_instance_2">
                <Barratarefas /> 
            </div>
            <div className="telatarefas-centrotarefas_instance-6">
                <Centrotarefas listaTarefas={this.props.listaTarefas} nomeProjeto={this.props.nomeProjeto} /> 
            </div>
            <div className="telatarefas-barraagenda_instance_2">
                <Barraagenda /> 
            </div>
        </div>
        <div className="telatarefas-2" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}