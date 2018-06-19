// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Menu from './menu';
import Barratarefas from './barratarefas';
import Adicionartarefa from './adicionartarefa';
import Barraagenda from './barraagenda';
import './telacriartarefa.css';


function render() {
    return <div className="telacriartarefa-telacriartarefa-9">
        <div className="telacriartarefa-0">
            <div className="telacriartarefa-menu_instance_9">
                <Menu nomeUsuario={this.props.nomeUsuario} /> 
            </div>
        </div>
        <div className="telacriartarefa-1">
            <div className="telacriartarefa-barratarefas_instance_2">
                <Barratarefas /> 
            </div>
            <div className="telacriartarefa-adicionartarefa_instance-9">
                <Adicionartarefa nomeTarefa={this.props.nomeTarefa} tags={this.props.tags} descricao={this.props.descricao} responsaveis={this.props.responsaveis} data={this.props.data} handleClick={this.props.handleClick} setNomeTarefa={this.props.setNomeTarefa} setTags={this.props.setTags} setDescricao={this.props.setDescricao} setResponsaveis={this.props.setResponsaveis} setPrazo={this.props.setPrazo} /> 
            </div>
            <div className="telacriartarefa-barraagenda_instance_2">
                <Barraagenda /> 
            </div>
        </div>
        <div className="telacriartarefa-2" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
