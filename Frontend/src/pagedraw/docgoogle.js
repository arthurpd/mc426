// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Componentebotao from './componentebotao';
import './docgoogle.css';


function render() {
    return <div className="docgoogle-docgoogle-4">
        <div className="docgoogle-0">
            <div className="docgoogle-text_5">Documento Google</div>
        </div>
        <div className="docgoogle-1">
            <div className="docgoogle-1-0">
                <div className="docgoogle-1-0-0">
                    <div className="docgoogle-text_1">{"Nome: "}</div>
                </div>
            </div>
            <input type="text" placeholder="Nome do Documento" value={this.props.nome} className="docgoogle-nome-9" /> 
        </div>
        <div className="docgoogle-2">
            <div className="docgoogle-2-0">
                <div className="docgoogle-2-0-0">
                    <div className="docgoogle-text_3">{"Link:"}</div>
                </div>
            </div>
            <input type="text" value={this.props.link} className="docgoogle-link-6" /> 
        </div>
        <div className="docgoogle-3">
            <div className="docgoogle-botaosalvar-1">
                <Componentebotao textoBotao={"Salvar"} color={"rgb(17, 39, 73)"} /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
