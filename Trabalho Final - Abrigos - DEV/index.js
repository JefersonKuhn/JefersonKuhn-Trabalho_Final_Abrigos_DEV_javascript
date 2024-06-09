//O programa deve ter um menu com as seguintes opções:

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
  /*O programa deve permitir que o usuário encontre um abrigo temporário
 na sua cidade, informando a sua localização. Para isso, deve ser criado um
 banco de dados com informações dos abrigos disponíveis no estado,
 como nome, endereço, cidade, telefone e capacidade de lotação.*/


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

/*Cadastro de Abrigo:** essa opção permite cadastrar um novo abrigo no sistema.
 O programa deve solicitar o nome, endereço, telefone e capacidade de lotação do abrigo.
 Os dados devem ser armazenados em um objeto e este objeto deve ser incluído em um `array` de abrigos.*/

function cadastrar() {
    const nome = prompt("Digite o nome do abrigo")
    const endereco = prompt("Digite a rua, número e bairro do abrigo")
    const cidade = prompt("Digite a cidade do seu abrigo:").toLowerCase()
    const telefone = Number(prompt("Digite  o telefone do abrigo:"))
    const capacidade = Number(prompt("Digite a capacidade do abrigo"))
    abrigos.push({nome,endereco,cidade,telefone,capacidade})
    
  }

  function listar() {
    if (abrigos.length === 0) {
        alert("Ainda não existem abrigos cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE ABRIGOS:

     --------------------------------------------------------------------

      NOME      |    ENDEREÇO       |   TELEFONE  |   CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        mensagem += `\n   ${abrigo.nome} \t ${abrigo.endereco}  ${abrigo.cidade} \t ${abrigo.telefone} \t ${abrigo.capacidade}`
    }
    alert(mensagem);
    }
}
 
/*Listar Abrigos:** essa opção lista todos os abrigos cadastrados no sistema,
 mostrando seus códigos, nomes, endereços, telefones e capacidade de lotação.
 O código é sempre a posição do objeto no `array`.*/

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
/*Procurar Abrigo:** essa opção permite que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização.
 O programa deve perguntar ao usuário a sua cidade e mostrar todos os abrigos cadastrados naquela cidade,
 com suas informações completas, além de informar a disponibilidade de vagas.*/
