class Cliente {
    private _nome:string;
    private _cpf:string;
    private _conta:Conta;
    private contas:Contas;

    constructor (nome:string, cpf:string, conta:Conta){
        this._nome=nome;
        this._cpf=cpf;
        this._conta=conta;
        this.contas = new Contas;
        this.contas.inserir(this._conta);
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome:string){
        this._nome=novoNome;
    }

    get cpf(){
        return this._cpf;
    }

    get conta(){
        return this._conta;
    }

}