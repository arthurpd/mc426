// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import './tarefareduzida.css';


function render() {
    return <div className="tarefareduzida-tarefareduzida-4">
        <div className="tarefareduzida-0">
            <div className="tarefareduzida-0-0">
                <div className="tarefareduzida-0-0-0">
                    <div className="tarefareduzida-titulotarefa-1">
                        { this.props.tituloTarefa }
                    </div>
                </div>
            </div>
            <div className="tarefareduzida-0-1">
                <div className="tarefareduzida-0-1-0">
                    <div className="tarefareduzida-statusprogresso-2" style={{"background": this.props.color}} /> 
                </div>
            </div>
        </div>
        <div className="tarefareduzida-1">
            <div className="tarefareduzida-1-0">
                <div className="tarefareduzida-1-0-0">
                    <div className="tarefareduzida-tituloprazo-9">
                        {"Prazo:"}
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Placeholder" value={this.props.prazo} className="tarefareduzida-prazo-6" /> 
        </div>
        <div className="tarefareduzida-2">
            <div className="tarefareduzida-2-0">
                <div className="tarefareduzida-2-0-0">
                    <div className="tarefareduzida-tituloresponsavel-6">
                        {"Responsáveis:"}
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Placeholder" value={this.props.responsaveis} className="tarefareduzida-responsaveis-2" /> 
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
