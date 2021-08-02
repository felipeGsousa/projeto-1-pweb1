class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    inserir(novoDependente) {
        this._dependentes.push(novoDependente);
    }
    listar() {
        return this._dependentes;
    }
}
