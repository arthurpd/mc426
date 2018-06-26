// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Menu from './menu';
import Barratarefas from './barratarefas';
import Tarefadetalhada from './tarefadetalhada';
import Barraagenda from './barraagenda';
import './teladetalhestarefa.css';


function render() {
    return <div className="teladetalhestarefa-teladetalhestarefa-8">
        <div className="teladetalhestarefa-0">
            <div className="teladetalhestarefa-menu_instance_1">
                <Menu nomeUsuario={""} /> 
            </div>
        </div>
        <div className="teladetalhestarefa-1">
            <div className="teladetalhestarefa-barratarefas_instance_2">
                <Barratarefas listaTarefas={this.props.listaMinhasTarefas} /> 
            </div>
            <div className="teladetalhestarefa-tarefadetalhada_instance-7">
                <Tarefadetalhada progresso={this.props.corProgresso} prazo={this.props.prazo} responsaveis={this.props.responsaveis} descricaoTarefa={this.props.descricaoTarefa} tags={this.props.tags} dependencias={this.props.dependencias} feedbackInput={this.props.feedbackInput} ratingInput={this.props.ratingInput} listaFeedbacks={this.props.listaFeedbacks} nomeTarefa={this.props.nomeTarefa} numeroProgresso={this.props.numeroProgresso} descricaoProgresso={this.props.descricaoProgresso} setPrazo={this.props.setPrazo} setResponsaveis={this.props.setResponsaveis} setDescricao={this.props.setDescricao} setTags={this.props.setTags} setDependencias={this.props.setDependecias} setProgresso={this.props.setProgresso} setDescricaoTarefa={this.props.setDescricaoTarefa} setNovoFeedback={this.props.setNovoFeedback} setNovoRating={this.props.setNovoRating} handleClickSalvar={this.props.handleClickSalvar} handleClickEnviar={this.props.handleClickEnviar} mensagemErro={this.props.mensagemErro} corBotao={this.props.corBotao} /> 
            </div>
            <div className="teladetalhestarefa-barraagenda_instance_2">
                <Barraagenda /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
