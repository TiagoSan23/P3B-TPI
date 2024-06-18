abstract class Militar {
  public nome: string;
  public idade: number;
  public altura: number;
  public email: string;

  constructor(nome:string,idade:number,altura:number,email:string) {
    this.nome = nome,
    this.idade = idade,
    this.altura = altura,
    this.email = email
  }

  abstract validaEmail(): boolean;
}

export default Militar;
