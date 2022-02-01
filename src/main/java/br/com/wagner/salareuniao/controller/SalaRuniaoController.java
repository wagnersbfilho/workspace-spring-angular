package br.com.wagner.salareuniao.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.wagner.salareuniao.exception.RecursoNaoEncontradoException;
import br.com.wagner.salareuniao.model.SalaReuniao;
import br.com.wagner.salareuniao.repository.SalaReuniaoRepositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Angular
@RequestMapping({ "/salareuniao" })
public class SalaRuniaoController {

	@Autowired
	private SalaReuniaoRepositorio repositorio;

	@GetMapping
	public List<SalaReuniao> buscarTodos() {
		return repositorio.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<SalaReuniao> getSalaById(@PathVariable(value="id") Long id) 
		throws RecursoNaoEncontradoException {
		
		SalaReuniao sala = repositorio.findById(id)
				.orElseThrow(()-> new RecursoNaoEncontradoException("Sala não encontrada: " + id));
		return ResponseEntity.ok().body(sala);
	}
	
	@PostMapping
	public SalaReuniao inserir (@Valid @RequestBody SalaReuniao sala) {
		return repositorio.save(sala);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<SalaReuniao> atualizar (@PathVariable(value="id") Long id, 
			@Valid @RequestBody SalaReuniao salaDetalhe) throws RecursoNaoEncontradoException {
		
		SalaReuniao sala = repositorio.findById(id)
				.orElseThrow(()-> new RecursoNaoEncontradoException("Sala não encontrada: " + id));
		sala.setNome(salaDetalhe.getNome());
		sala.setData(salaDetalhe.getData());
		sala.setHoraInicio(salaDetalhe.getHoraInicio());
		sala.setHoraFim(salaDetalhe.getHoraFim());
		SalaReuniao salaAtualizada = repositorio.save(sala);
		return ResponseEntity.ok(salaAtualizada);
	}

	@DeleteMapping(path ={"/{id}"})
	public Map<String, Boolean> delete(@PathVariable Long id) throws RecursoNaoEncontradoException {
		SalaReuniao sala = repositorio.findById(id)
				.orElseThrow(()-> new RecursoNaoEncontradoException("Sala não encontrada: " + id));
		repositorio.delete(sala);
		Map<String, Boolean> resposta = new HashMap<String, Boolean>();
		resposta.put("apagado", Boolean.TRUE);
		return resposta;
	}
}
