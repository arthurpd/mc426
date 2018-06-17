// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import Componentebotao from './componentebotao';
import Iconeprojeto from './iconeprojeto';
import './projetos.css';


function render() {
    return <div className="projetos-projetos-2">
        <div className="projetos-0">
            <div className="projetos-0-0">
                <div className="projetos-0-0-0">
                    <div className="projetos-text_2">Projetos</div>
                </div>
            </div>
            <div className="projetos-botaoadicionarprojeto-0">
                <Componentebotao textoBotao={"Adicionar Projeto"} /> 
            </div>
        </div>
        <div className="projetos-1">
            <div className="projetos-1-0">
                { (this.props.listaProjetos1).map((elem, i) => {
                    return <div key={i} className="projetos-rectangle_1">
                        <div className="projetos-1-0-0-0-0">
                            <div className="projetos-iconeprojeto_instance-5">
                                <Iconeprojeto imagemProjeto={elem.imagemProjeto} nomeProjeto={elem.nomeProjeto} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
            <div className="projetos-1-1">
                { (this.props.listaProjetos2).map((elem, i) => {
                    return <div key={i} className="projetos-rectangle_13">
                        <div className="projetos-1-1-0-0-0">
                            <div className="projetos-iconeprojeto_instance-6">
                                <Iconeprojeto imagemProjeto={elem.imagemProjeto} nomeProjeto={elem.nomeProjeto} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
            <div className="projetos-1-2">
                { (this.props.listaProjetos3).map((elem, i) => {
                    return <div key={i} className="projetos-rectangle_13-9">
                        <div className="projetos-1-2-0-0-0">
                            <div className="projetos-iconeprojeto_instance-2">
                                <Iconeprojeto imagemProjeto={elem.imagemProjeto} nomeProjeto={elem.nomeProjeto} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
            <div className="projetos-1-3">
                { (this.props.listaProjetos4).map((elem, i) => {
                    return <div key={i} className="projetos-rectangle_13-8">
                        <div className="projetos-1-3-0-0-0">
                            <div className="projetos-iconeprojeto_instance-0">
                                <Iconeprojeto imagemProjeto={elem.imagemProjeto} nomeProjeto={elem.nomeProjeto} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
