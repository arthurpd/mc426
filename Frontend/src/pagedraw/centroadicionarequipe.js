// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Componentebotao from './componentebotao';
import './centroadicionarequipe.css';


function render() {
    return <div className="centroadicionarequipe-centroadicionarequipe-2">
        <div className="centroadicionarequipe-0">
            <div className="centroadicionarequipe-titulo-8">
                Criar Nova Equipe
            </div>
        </div>
        <div className="centroadicionarequipe-1">
            <div className="centroadicionarequipe-1-0">
                <div className="centroadicionarequipe-1-0-0">
                    <div className="centroadicionarequipe-nome-2">
                        {"Nome:"}
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Nome da nova equipe" value={this.props.nome} className="centroadicionarequipe-nome-0" /> 
        </div>
        <div className="centroadicionarequipe-2">
            <div className="centroadicionarequipe-2-0">
                <div className="centroadicionarequipe-2-0-0">
                    <div className="centroadicionarequipe-link-3">
                        {"Usuários Membros:"}
                    </div>
                </div>
            </div>
            <div className="centroadicionarequipe-2-1">
                <div className="centroadicionarequipe-2-1-0">
                    <input type="text" placeholder="usuario1, usuario2" value={this.props.membros} className="centroadicionarequipe-membros-7" /> 
                </div>
            </div>
        </div>
        <div className="centroadicionarequipe-3">
            <div className="centroadicionarequipe-componentebotao_instance-8">
                <Componentebotao textoBotao={"Adicionar"} /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
