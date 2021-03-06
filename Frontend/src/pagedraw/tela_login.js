// Generated by https://pagedraw.io/pages/10782
import React from 'react';
import './tela_login.css';


function render() {
    return <div className="tela_login-tela_login-9">
        <div className="tela_login-0">
            <div className="tela_login-rectangle-6">
                <div className="tela_login-0-0-0">
                    <div className="tela_login-0-0-0-0">
                        <div className="tela_login-0-0-0-0-0">
                            <div className="tela_login-rectangle_5">
                                <div className="tela_login-0-0-0-0-0-0-0">
                                    <div className="tela_login-0-0-0-0-0-0-0-0">
                                        <div className="tela_login-0-0-0-0-0-0-0-0-0">
                                            <div className="tela_login-text-3">{"Usuário:"}</div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Digite usuário" value={this.props.usuario} onChange={(e) => this.props.setUsuario(e.target.value)} className="tela_login-text_input-8" /> 
                                </div>
                            </div>
                        </div>
                        <div className="tela_login-0-0-0-0-1">
                            <div className="tela_login-rectangle_6">
                                <div className="tela_login-0-0-0-0-1-0-0">
                                    <div className="tela_login-0-0-0-0-1-0-0-0">
                                        <div className="tela_login-0-0-0-0-1-0-0-0-0">
                                            <div className="tela_login-text-9">{"Senha:"}</div>
                                        </div>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={this.props.senha} onChange={(e) => this.props.setSenha(e.target.value)} className="tela_login-text_input-0" /> 
                                </div>
                            </div>
                        </div>
                        <div className="tela_login-0-0-0-0-2">
                            <div onClick={this.props.handleClick} className="tela_login-rectangle_2">
                                <div className="tela_login-0-0-0-0-2-0-0">
                                    <div className="tela_login-rectangle_3">
                                        <div className="tela_login-0-0-0-0-2-0-0-0-0">
                                            <div className="tela_login-text-36">Login</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tela_login-0-0-0-0-2-1">
                                <div className="tela_login-0-0-0-0-2-1-0">
                                    <div className="tela_login-text_3" style={{"fontSize": this.props.fonteErro}}>
                                        {"Usuário ou senha incorretos"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tela_login-line_6" /> 
                    <div className="tela_login-0-0-0-2">
                        <div className="tela_login-0-0-0-2-0">
                            <div className="tela_login-rectangle_5-3">
                                <div className="tela_login-0-0-0-2-0-0-0">
                                    <div className="tela_login-0-0-0-2-0-0-0-0">
                                        <div className="tela_login-0-0-0-2-0-0-0-0-0">
                                            <div className="tela_login-text-7">Nome</div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Digite seu nome" value={this.props.nomeCadastro} onChange={(e) => this.props.setNomeCadastro(e.target.value)} className="tela_login-text_input-1" /> 
                                </div>
                            </div>
                        </div>
                        <div className="tela_login-0-0-0-2-1">
                            <div className="tela_login-rectangle_5-7">
                                <div className="tela_login-0-0-0-2-1-0-0">
                                    <div className="tela_login-0-0-0-2-1-0-0-0">
                                        <div className="tela_login-0-0-0-2-1-0-0-0-0">
                                            <div className="tela_login-text-362">{"Usuário:"}</div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Digite usuário" value={this.props.usuarioCadastro} onChange={(e) => this.props.setUsuarioCadastro(e.target.value)} className="tela_login-text_input-4" /> 
                                </div>
                            </div>
                        </div>
                        <div className="tela_login-0-0-0-2-2">
                            <div className="tela_login-rectangle_6-8">
                                <div className="tela_login-0-0-0-2-2-0-0">
                                    <div className="tela_login-0-0-0-2-2-0-0-0">
                                        <div className="tela_login-0-0-0-2-2-0-0-0-0">
                                            <div className="tela_login-text-75">{"Senha:"}</div>
                                        </div>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={this.props.senhaCadastro} onChange={(e) => this.props.setSenhaCadastro(e.target.value)} className="tela_login-text_input-88" /> 
                                </div>
                            </div>
                        </div>
                        <div className="tela_login-0-0-0-2-3">
                            <div onClick={this.props.handleClickCadastro} className="tela_login-rectangle_2-4">
                                <div className="tela_login-0-0-0-2-3-0-0">
                                    <div className="tela_login-rectangle_3-0">
                                        <div className="tela_login-0-0-0-2-3-0-0-0-0">
                                            <div className="tela_login-text-5">Cadastro</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tela_login-0-0-0-2-3-1">
                                <div className="tela_login-0-0-0-2-3-1-0">
                                    <div className="tela_login-text-76">{"Gerente?"}</div>
                                </div>
                            </div>
                            <div className="tela_login-0-0-0-2-3-2">
                                <div className="tela_login-0-0-0-2-3-2-0">
                                    <div onClick={(e) => this.props.setBoolGerente(e.target.value)} className="tela_login-check_box-0">
                                        <input type="checkbox" checked={(this.props.boolGerente) ? 'true' : undefined} className="tela_login-0-0-0-2-3-2-0-0-0" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tela_login-1" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
