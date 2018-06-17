// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Componentebotao from './componentebotao';
import './adicionartarefa.css';


function render() {
    return <div className="adicionartarefa-adicionartarefa-0">
        <div className="adicionartarefa-0">
            <div className="adicionartarefa-text_2">Nova Tarefa</div>
        </div>
        <div className="adicionartarefa-1">
            <div className="adicionartarefa-1-0">
                <div className="adicionartarefa-1-0-0">
                    <div className="adicionartarefa-text_27">
                        {"Nome da Tarefa:"}
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Placeholder" value={this.props.nomeTarefa} className="adicionartarefa-nometarefa-1" /> 
        </div>
        <div className="adicionartarefa-2">
            <div className="adicionartarefa-2-0">
                <div className="adicionartarefa-2-0-0">
                    <div className="adicionartarefa-text_28">{"Tags:"}</div>
                </div>
            </div>
            <input type="text" placeholder="Placeholder" value={this.props.tags} className="adicionartarefa-tags-7" /> 
        </div>
        <div className="adicionartarefa-3">
            <div className="adicionartarefa-3-0">
                <div className="adicionartarefa-3-0-0">
                    <div className="adicionartarefa-text_29">
                        {"Descrição:"}
                    </div>
                </div>
            </div>
            <textarea placeholder="Placeholder" value={this.props.descricao} className="adicionartarefa-descricao-8" /> 
        </div>
        <div className="adicionartarefa-4">
            <div className="adicionartarefa-4-0">
                <div className="adicionartarefa-4-0-0">
                    <div className="adicionartarefa-text_3">
                        {"Responsáveis:"}
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Placeholder" value={this.props.responsaveis} className="adicionartarefa-responsaveis-4" /> 
        </div>
        <div className="adicionartarefa-5">
            <div className="adicionartarefa-5-0">
                <div className="adicionartarefa-5-0-0">
                    <div className="adicionartarefa-text_31">{"Prazo:"}</div>
                </div>
            </div>
            <div className="adicionartarefa-5-1">
                <div className="adicionartarefa-5-1-0">
                    <input type="text" placeholder="Placeholder" value={this.props.data} className="adicionartarefa-data-6" /> 
                </div>
            </div>
            <div className="adicionartarefa-botaosalvar-4">
                <Componentebotao textoBotao={"Salvar"} /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}