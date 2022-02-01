package br.com.wagner.salareuniao.exception;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class ErroDetalheExcpetion {

	private Date timestamp;
	private String mensagem;
	private String detalhes;
}
