class ClienteEspecial extends Cliente {

    private _dependentes:Array<Cliente>;

    constructor(nome:string, cpf:string, conta:Conta){
        super(nome, cpf, conta);
    }

    inserir (novoDependente:Cliente){
        this._dependentes.push(novoDependente);
    }

    listar (): Array<Cliente>{
        return this._dependentes;
    }

}