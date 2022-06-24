import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from "@angular/core";
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";

import { Usuario } from "./Models/usuario";
import { CustomValidators } from "ng2-validation";
import { ValidationMessages, GenericValidator, DisplayMessage } from "./generic-form-validation";
import { fromEvent, merge, Observable } from "rxjs";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas: boolean;

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: "O nome é requerido!",
        minlength: "O nome precisa ter no mínimo 2 caracteres!",
        maxlength: "O nome precisa ter no máximo 150 caracteres!",
      },
      cpf: {
        required: "Informe o CPF!",
      },
      email: {
        required: "O Email é requerido!<br />",
        email: "Email inválido!",
      },
      senha: {
        required: "Informe a senha!",
      },
      senhaConfirmacao: {
        required: "Informe a senha novamente!",
        equalTo: "As senhas não conferem!",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMessagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });
  }

  ngOnInit(): void {
    let senha = new FormControl("", [Validators.required]);
    let senhaConfirmacao = new FormControl("", [
      Validators.required,
      CustomValidators.equalTo(senha),
    ]);

    this.cadastroForm = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao,
    });
  }

  adicionarUsuario(): void {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      
      this.mudancasNaoSalvas = false;

      console.log("cadastroForm:", this.usuario);
    } else {
      console.log("cadastroForm:", "Não submetido!");
    }
  }

  validarCampo(campo: string): boolean {
    let errors = this.cadastroForm.get(campo)?.errors;
    let dirty = this.cadastroForm.get(campo)?.dirty ?? false;
    let touched = this.cadastroForm.get(campo)?.touched ?? false;

    return errors != null && (dirty || touched);
  }

  exibirMensagemErro(campo: string, label: string): string {
    let errors = this.cadastroForm.get(campo)?.errors;
    let tipo: string = "required";

    for (const key in errors) {
      if (errors[key] == true) {
        tipo = key;
        break;
      }
    }

    switch (tipo) {
      case "email":
        return `Campo ${label} em formato inválido!`;

      default:
        return `Preencha o campo ${label}!`;
    }
  }
}
