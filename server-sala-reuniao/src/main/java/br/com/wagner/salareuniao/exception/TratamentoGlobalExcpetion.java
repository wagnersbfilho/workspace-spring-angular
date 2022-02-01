package br.com.wagner.salareuniao.exception;

import java.util.Date;

import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class TratamentoGlobalExcpetion {

	@ExceptionHandler(ConfigDataResourceNotFoundException.class)
	public ResponseEntity<?> recursoNaoEncontrado(ConfigDataResourceNotFoundException ex, WebRequest req) {
		ErroDetalheExcpetion erro = new ErroDetalheExcpetion(new Date(), ex.getMessage(),
				req.getDescription(false));
		return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> tratarErroGlobal(Exception ex, WebRequest req) {
		ErroDetalheExcpetion erro = new ErroDetalheExcpetion(new Date(), ex.getMessage(),
				req.getDescription(false));
		return new ResponseEntity<>(erro, HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
}
