import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  //Usa o ReactiveFormModule para validação dos Campos do Formulário
  formRegistro: FormGroup = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    senha:["",[Validators.required, Validators.minLength(6)]]
  });
  erro: string = "";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router){}

  //métodos

  onSubmit(){
    if(this.formRegistro.valid){
      this.authService.registrar(this.formRegistro.value).subscribe(
        {
          next: () => {
            alert ("Usuário registrado com sucesso!");
            this.router.navigate(["/login"]);
          },
          error:(e) => this.erro = e.message
        }
      );
    }
  }

}
