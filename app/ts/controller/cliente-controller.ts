class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private clientes:Clientes;
    private contas:Contas;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.contas = new Contas();
        this.clientes = new Clientes();
    }

    inserir(evento: Event){
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));

        this.contas.inserir(novaConta);
        
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.nome + '  ' +cliente.cpf + '  ' + cliente.conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.nome + ' dono do CPF ' + cliente.cpf);
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}