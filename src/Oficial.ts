const patentes: {
    10: string;
    9: string;
    8: string;
    7: string;
    6: string;
    5: string;
    4: string;
    3: string;
    2: string;
    1: string;
} = {
    10: "marechal",
    9: "general",
    8: "coronel",
    7: "tenente-coronel",
    6: "major",
    5: "capitão",
    4: "tenente",
    3: "sargento",
    2: "cabo",
    1: "soldado",
};

import Militar from './Militar';

class Oficial extends Militar {

    public cim: number
    public soldo: number
    public patente: number
    
    constructor(
        nome: string,
        idade: number,
        altura: number,
        email: string,
        cim: number,
        soldo: number,
        patente: number,
    ) {
        super(nome, idade, altura, email);
        this.cim = cim;
        this.soldo = soldo;
        this.patente = patente;
        console.log(this.validaEmail() ? "Válido" : "e-Mail inválido!");
    }

    validaEmail(): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(this.email)) return false;
        return /@(eb|marinha|fab)\.mil\.br$/.test(this.email);
    }

    getPatente(): string {
        return patentes[this.patente as keyof typeof patentes] || "Patente não encontrada.";
    }
}

export default Oficial;
