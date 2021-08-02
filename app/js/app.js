let contaController = new ContaController();
let clienteController = new ClienteController();
let title = document.title;
if (title === 'Contas') {
    contaController.listar();
}
else if (title === 'Clientes') {
    clienteController.listar();
}
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const contaCli1 = new Conta('5', 55.6);
const cli1 = new Cliente('Felipe', '555.999.888-51', contaCli1);
const contaCli2 = new Conta('18', 900);
const cli2 = new Cliente('José', '599.999.800-51', contaCli2);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
console.log('Nome: ' + cli1.nome + '\nCPF: ' + cli1.cpf + '\nConta: ' + cli1.conta.numero + '\nSaldo: ' + cli1.conta.saldo);
console.log('Nome: ' + cli2.nome + '\nCPF: ' + cli2.cpf + '\nConta: ' + cli2.conta.numero + '\nSaldo: ' + cli2.conta.saldo);
