class Clientes {
    constructor() {
        this.clientes = new Array();
        const contaCli1 = new Conta('5', 55.6);
        const cli1 = new Cliente('Felipe', '555.999.888-51', contaCli1);
        const contaCli2 = new Conta('18', 900);
        const cli2 = new Cliente('Felipe', '599.999.800-51', contaCli2);
        this.contas = new Contas();
        this.contas.inserir(contaCli1);
        this.contas.inserir(contaCli2);
        this.clientes.push(cli1, cli2);
    }
    inserir(novoCliente) {
        this.clientes.push(novoCliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
