const cardapio_loja = [
    { id: "Carne", pastel: " Pastel de Carne ", preco: 15.00                  },
    { id: "Frango", pastel: " Pastel de Frango ", preco: 15.00                },
    { id: "Chocolate", pastel: " Pastel de Chocolate ", preco: 20.00          },
    { id: "Queijo", pastel: " Pastel de Queijo ", preco: 15.00                },
    { id: "CarneQueijo", pastel: " Pastel de Carne com Queijo ", preco: 15.00 },
    { id: "Cheddar", pastel: " Pastel de Carne com Cheddar ", preco: 20.00    }
];

const cardapio_loja_2 = [
    { id: "Carne", pastel: " Pastel de Carne ", preco: 15.00                  },
    { id: "Frango", pastel: " Pastel de Frango ", preco: 15.00                },
    { id: "Chocolate", pastel: " Pastel de Chocolate ", preco: 20.00          },
    { id: "Queijo", pastel: " Pastel de Queijo ", preco: 15.00                },
    { id: "CarneQueijo", pastel: " Pastel de Carne com Queijo ", preco: 15.00 },
    { id: "Cheddar", pastel: " Pastel de Carne com Cheddar ", preco: 20.00    },
    { id: "Nada", pastel: " Nada ", preco: 0.00                               }
];

const tamanho_loja = [
    { id: "Pequeno", tamanho: " Pequeno ", preco: 5.00 },
    { id: "Médio", tamanho: " Médio ", preco: 7.00     },
    { id: "Grande", tamanho: " Grande ", preco: 10.00  }
];

const entrega_loja = [
    { id: "Entrega", tipo: "Entrega", preco: 5.00  },
    { id: "Buscar", tipo: "Busca", preco: 0.00     }
];

const acompanhante_loja = [
    { id: "Caldo de Cana", acompanhante: "Caldo de Cana", preco: 5.00},
    { id: "Suco Natural", acompanhante: "Suco Natural", preco: 3.00},
    { id: "Refrigerante", acompanhante: "Refrigerante", preco: 7.00}
];

function preencher(){
    const selectCardapio = document.getElementById("cardapio");
     for (let i = 0; i < cardapio_loja.length; i++) {
         const item = cardapio_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapio.appendChild(option);
    }

    const selectCardapioww = document.getElementById("cardapioww");
     for (let i = 0; i < cardapio_loja_2.length; i++) {
         const item = cardapio_loja_2[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapioww.appendChild(option);
    } 

    const selectAcompanhante = document.getElementById("acompanhantee");
     for (let i = 0; i < acompanhante_loja.length; i++) {
         const item = acompanhante_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.acompanhante;
         selectAcompanhante.appendChild(option);
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
preencher();

function procurarPorId(lista, idProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idProcurado) {
            return lista[i];
        }
    }
    return null;
}

function gerarRelatorio() {
    
      const PagamentoId = document.getElementById("pagamentow").value;
      const nomeId = document.getElementById("nome").value;   
      const cpfId = document.getElementById("cpf").value;
      const enderecoId = document.getElementById("endereco").value;
      const cardapioId = document.getElementById("cardapio").value;
      const cardapioId_2 = document.getElementById("cardapioww").value;
      const tamanhoId = document.getElementById("tamanho").value;
      const entregaId = document.getElementById("entrega").value;
      const acompanhanteId = document.getElementById("acompanhantee").value;
     
      var cardapioo = procurarPorId(cardapio_loja, cardapioId);
      var tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
      var entregaa = procurarPorId(entrega_loja, entregaId);
      var cardapioww = procurarPorId(cardapio_loja_2, cardapioId_2);
      var acompanhantee = procurarPorId(acompanhante_loja, acompanhanteId);
      const total = cardapioo.preco + tamanhoo.preco + entregaa.preco + cardapioww.preco + acompanhantee.preco;

      const relatorioHTML =`
         <h2>Relatório do Pedido</h2>
         <p><strong>Comprador: </strong> ${nomeId} </p>
         <p><strong>CPF: </strong> ${cpfId} </p>
         <p><strong>Endereço: </strong> ${enderecoId} </p>
         <p><strong>Pastel: </strong> ${cardapioId} -  R$ ${cardapioo.preco.toFixed(2)}  </p>
         <p><strong> Outro Pastel: </strong> ${cardapioId_2} -  R$ ${cardapioww.preco.toFixed(2)}  </p>
         <p><strong> Acompanhante: </strong> ${acompanhanteId} -  R$ ${acompanhantee.preco.toFixed(2)}  </p>
         <p><strong>Tamanho: </strong> ${tamanhoId} - R$ ${tamanhoo.preco.toFixed(2)} </p>
         <p><strong>Modo de Recebimento: </strong> ${entregaId} - R$ ${entregaa.preco.toFixed(2)} </p>
         <p><strong>Preço Total: </strong> - R$ ${total.toFixed(2)} </p>
         <p><strong>Modo de Pagamento: </strong> - ${PagamentoId}</p>
         <p>Obrigado por usar o relatório da Lá casa de Pastel!</p>
         `;
         
         document.getElementById("relatorio").innerHTML = relatorioHTML;
}
