// Banco de dados dos abrigos disponíveis no estado
//O nome do "bando de dados" era abrigos, e não abrigosCadastrados
let abrigos = []

// Variáveis
let menu
const listarAbrigos = []
while (menu !== 5) {
    menu = Number(
    prompt(`===== ABRIGOS TEMPORÁRIOS =====

    1. Cadastrar abrigo

    2. Listar abrigos

    3. Procurar abrigo

    4. Sair

    Escolha uma opção:`)
  )

  switch (menu) {
    case 1:
        cadastrar()
        break;
    case 2:
        listar()
        break;
    case 3:
        buscarAbrigo()
        break;
    case 4:
        alert("Obrigado por acessar este sistema")
        break;
    default:
        alert("Não existe essa opção no menu!")
        break;
  }

function cadastrar() {
    const nome = prompt("Digite o nome do abrigo")
    const endereco = prompt("Digite a rua, número e bairro do abrigo")
    const cidade = prompt("Digite a cidade do seu abrigo:").toLowerCase()
    const telefone = Number(prompt("Digite  o telefone do abrigo:"))
    const capacidade = Number(prompt("Digite a capacidade do abrigo"))
    abrigos.push({nome,endereco,cidade,telefone,capacidade})
    //Registra no objeto
    //abrigosCadastrados.push(abrigo);
    //alert("Abrigo cadastrado com sucesso!");
  }

function listar() {
    if (abrigos.length === 0) {
        alert("Ainda não existem abrigos cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO       |   TELEFONE  |   CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        mensagem += `\n   ${abrigo.nome}  ${abrigo.endereco}  ${abrigo.cidade}  ${abrigo.telefone}  ${abrigo.capacidade}`
    }
    alert(mensagem);
    }
}
    
function buscarAbrigo() {
if (abrigos.length === 0) {
    alert("Ainda não existem abrigos cadastrados na sua cidade.");
} else {
    const localizarAbrigo = prompt("Digite sua cidade").toLowerCase();
    let mensagem = 
    
    `LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO          |   TELEFONE  | CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        if (abrigo.cidade.includes(localizarAbrigo))
        {
            mensagem += "\n" + abrigo.nome + " " +  abrigo.endereco + " " + abrigo.cidade + " " + abrigo.telefone + " " + abrigo.capacidade
        }
    }
    alert(mensagem);
    }
}
}