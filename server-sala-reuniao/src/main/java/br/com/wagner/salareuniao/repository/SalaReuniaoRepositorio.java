package br.com.wagner.salareuniao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.wagner.salareuniao.model.SalaReuniao;

@Repository
public interface SalaReuniaoRepositorio extends JpaRepository<SalaReuniao, Long>{

}
