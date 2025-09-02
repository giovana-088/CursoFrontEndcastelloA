import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  //elementos do Controller
  public vagas: Vaga[] = []; //vetor para armazenar as vagas do Backend

  constructor(private _vagaService: VagaService) {} // ao instanciar obj -> conecta com Service Vaga

  //método para listarVagas

  listarVagas() {
    this._vagaService.getVagas().subscribe(
      //preencher um Map com as informações do backEnd
      (e) => {
        this.vagas = e.map((atributo) => {
          return new Vaga(
            atributo.id,
            atributo.nome,
            atributo.foto,
            atributo.descricao,
            atributo.salario
          );
        });
      }
    );
  }
  ngOnInit(): void {
    this.listarVagas();
}
}
