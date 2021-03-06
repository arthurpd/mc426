package com.mc426;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.json.JSONObject;

import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.HashMap;

public class Usuario {
	private static HashMap<String, Usuario> usuarioPorUserName = new HashMap<String, Usuario>();

	public static Usuario getPorUserName(String userName) {
		return Usuario.usuarioPorUserName.get(userName);
	}
	
	public static Usuario getPorResource(String resource) throws InvalidParameterException{
		Pattern pattern = Pattern.compile("\\/usuarios\\/(\\w+)");
		Matcher matcher = pattern.matcher(resource);
		if (matcher.find()) {
			return Usuario.getPorUserName(matcher.group(1));
		}else {
			throw new InvalidParameterException();
		}
	}

	public static Usuario verifica(String usuario, String senha) {
		Usuario retv = usuarioPorUserName.get(usuario);
		if(retv != null) {
			if (retv.senha.equals(senha))
				return retv;
		}
		return null;
	}

	private List<Equipe> equipes;

	private String nome;

	private String senha;
	private List<Tarefa> tarefas;
	private String userName;

	public Usuario(String userName, String senha, String nome) throws Exception {
		if(Usuario.usuarioPorUserName.containsKey(userName)) {
			throw new Exception();
		}
		this.userName = userName;
		this.nome = nome;
		this.senha = senha;
		this.tarefas = new ArrayList<Tarefa>();
		this.equipes = new ArrayList<Equipe>();
		Usuario.usuarioPorUserName.put(this.userName, this);
	}
	
	public boolean participaProjeto(Projeto projeto) {
		for (Equipe e : equipes) {
			if (e.getProjetos().contains(projeto))
				return true;
		}
		return false;
	}
	
	public List<Projeto> projetosParticipados() {
		List<Projeto> meusProjetos = new ArrayList<Projeto> ();
		for (Equipe e : equipes) {
			for (Projeto p : e.getProjetos())
				if (!meusProjetos.contains(p))
					meusProjetos.add(p);
		}
		return meusProjetos;
	}


	public void atribuiResponsabilidade(Tarefa tarefa) throws Exception {
		if (!tarefas.contains(tarefa)) {
			tarefas.add(tarefa);
		}
	}

	public void excluiEquipe(Equipe equipe) throws Exception {
		if (equipes.contains(equipe)) {
			equipes.remove(equipe);
		}
	}

	public String getNome() {
		return this.nome;
	}

	public List<Tarefa> getTarefas() {
		return tarefas;
	}

	public String getUserName() {
		return this.userName;
	}
	
	public List<Equipe> getEquipes(){
		return this.equipes;
	}

	public void incluiEquipe(Equipe equipe) throws Exception {
		if (!equipes.contains(equipe)) {
			equipes.add(equipe);
		}
	}

	public void removerResponsabilidade(Tarefa tarefa) throws Exception {
		if (tarefas.contains(tarefa)) {
			tarefas.remove(tarefa);
		}
	}

	@Override
	public String toString() {
		return "{\n\tnome: \"" + nome + "\",\n\ttarefas: "
				+ tarefas.stream().filter(x -> projetosParticipados().contains(x.getProjeto())).map(x -> "/projetos/" + x.getProjeto().getId() + "/tarefas/" + x.getId())
						.collect(Collectors.toList())
				+ ",\n\tequipes: " + equipes.stream().map(x -> "/equipes/" + x.getId()).collect(Collectors.toList())
				+ ",\n\tuserName: \"" + userName + "\"\n}";
	}

	public JSONObject toJson() {
		JSONObject retv = new JSONObject();
		retv.put("nome", this.nome);
		retv.put("usuario", this.userName);
		retv.put("tarefas", this.tarefas.stream()
				.filter(x -> projetosParticipados().contains(x.getProjeto()))
				.map(x -> "/projetos/" + x.getProjeto().getId() + "/tarefas/" + x.getId())
				.collect(Collectors.toList()));
		retv.put("equipes", this.equipes.stream()
				.filter(x -> !x.getNome().equals("dummy"))
				.map(x -> "/equipes/" + x.getId())
				.collect(Collectors.toList()));
		retv.put("gerente", this instanceof Gerente);
		return retv;
	}
}
