// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Menu from './menu';
import Barratarefas from './barratarefas';
import Detalhesprojeto from './detalhesprojeto';
import Barraagenda from './barraagenda';
import './teladetalhesprojeto.css';


function render() {
    return <div className="teladetalhesprojeto-teladetalhesprojeto-9">
        <div className="teladetalhesprojeto-0">
            <div className="teladetalhesprojeto-menu_instance_6">
                <Menu nomeUsuario={""} /> 
            </div>
        </div>
        <div className="teladetalhesprojeto-1">
            <div className="teladetalhesprojeto-barratarefas_instance_2">
                <Barratarefas /> 
            </div>
            <div className="teladetalhesprojeto-detalhesprojeto_instance-5">
                <Detalhesprojeto /> 
            </div>
            <div className="teladetalhesprojeto-barraagenda_instance_2">
                <Barraagenda /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}