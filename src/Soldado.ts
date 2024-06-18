import Militar from "./Militar";

class Soldado extends Militar {
  public cim: number;
  public soldo: number;
  constructor(nome: string, idade: number, altura: number, email: string, cim:number, soldo:number) {
    super(nome, idade, altura, email);
    this.cim = cim;
    this.soldo = soldo;
    console.log(this.validaEmail() ? "Válido" : "e-Mail inválido!");
    console.log(
      this.requisitos()
        ? "Está apto ao Serviço Militar."
        : "Não está apto ao Serviço Militar."
    );
  }

  validaEmail(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.email)) return false;
    return /@(eb|marinha|fab)\.mil\.br$/.test(this.email);
  }

  requisitos(): boolean {
    return this.altura >= 1.6 && this.idade >= 18 && this.idade <= 32;
  }
}

export default Soldado;
