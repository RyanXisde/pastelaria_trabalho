const cardapio_loja = [
    { id: "carne", pastel: " Pastel de Carne ", preco: 15.00                  },
    { id: "frango", pastel: " Pastel de Frango ", preco: 15.00                },
    { id: "chocolate", pastel: " Pastel de Chocolate ", preco: 20.00          },
    { id: "queijo", pastel: " Pastel de Queijo ", preco: 15.00                },
    { id: "carneQueijo", pastel: " Pastel de Carne com Queijo ", preco: 15.00 },
    { id: "cheddar", pastel: " Pastel de Carne com Cheddar ", preco: 20.00    }
];

const tamanho_loja = [
    { id: "pequeno", tamanho: " Pequeno ", preco: 5.00 },
    { id: "médio", tamanho: " Médio ", preco: 7.00     },
    { id: "grande", tamanho: " Grande ", preco: 10.00  }
];

const entrega_loja = [
    { id: "entrega", tipo: "Entrega", preco: 5.00  },
    { id: "buscar", tipo: "Busca", preco: 0.00   }
]

function preecher(){
    const selectCardapio = document.getElementById("cardapio");
     for (let i = 0; i < cardapio_loja.length; i++) {
         const item = cardapio_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapio.appendChild(option);
    }

    const selectTamanho = document.getElementById("tamanho");
     for (let i = 0; i < tamanho_loja.length; i++) {
         const item = tamanho_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tamanho.trim();
         selectTamanho.appendChild(option);
    }
    const selectEntrega = document.getElementById("entrega");
     for (let i = 0; i < entrega_loja.length; i ++) {
         const item = entrega_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tipo.trim();
         selectEntrega.appendChild(option);
     }
}
preecher();

function procurarPorId(lista, idProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idProcurado) {
            return lista[i];
        }
    }
    return null;
}
preencherOpcoes();

function gerarRelatorio() {
    
      const nomeId = document.getElementById("nome").value;   
      const cpfId = document.getElementById("cpf").value;
      const enderecoId = document.getElementById("endereco").value;
      const cardapioId = document.getElementById("cardapio").value;
      const tamanhoId = document.getElementById("tamanho").value;
      const entregaId = document.getElementById("entrega").value;
     
      var cardapioo = procurarPorId(cardapio_loja, cardapioId);
      var tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
      var entregaa = procurarPorId(entrega_loja, entregaId);
      const total = cardapioo.preco + tamanhoo.preco + entregaa.preco;

      const relatorioHTML =`
         <h2>Relatório do Pedido</h2>
         <p><strong>Comprador: </strong> ${nomeId} </p>
         <p><strong>CPF: </strong> ${cpfId} </p>
         <p><strong>Endereço: </strong> ${enderecoId} </p>
         <p><strong>Cardápio: </strong> ${cardapioId} -  R$ ${cardapioo.preco.ToFixed(2)}  </p>
         <p><strong>Tamanho: </strong> ${tamanhoId} - R$ ${tamanhoo.preco.ToFixed(2)} </p>
         <p><strong>Modo de Recebimento: </strong> ${entregaId} - R$ ${entregaa.ToFixed(2)} </p>
         <p>Obrigado por usar o relatório da Lá casa de Pastel!</p>
         `;
         
         document.getElementById("relatorio").innerHTML = relatorioHTML;
}
