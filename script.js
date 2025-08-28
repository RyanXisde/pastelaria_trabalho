const cardapio_loja = [
    { id: "carne", pastel: " Pastel de Carne ", preço: 15.00                  },
    { id: "frango", pastel: " Pastel de Frango ", preço: 15.00                },
    { id: "chocolate", pastel: " Pastel de Chocolate ", preço: 20.00          },
    { id: "queijo", pastel: " Pastel de Queijo ", preço: 15.00                },
    { id: "carneQueijo", pastel: " Pastel de Carne com Queijo ", preço: 15.00 },
    { id: "cheddar", pastel: " Pastel de Carne com Cheddar ", preço: 20.00    }
];

const tamanho_loja = [
    { id: "pequeno", tamanho: " Pequeno ", preço: 5.00 },
    { id: "médio", tamanho: " Médio ", preço: 7.00     },
    { id: "grande", tamanho: " Grande ", preço: 10.00  }
];

const entrega_loja = [
    { id: "entrega", tipo: "Entrega", preço: 5.00  },
    { id: "buscar", tipo: "Busca", preço: 0.00   }
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
    for (let i = 0; i < lista.lenght; i++) {
        if (lista[i].id === idProcurado) {
            return lista[i];
        }
    }
    return null;
}
preencherOpcoes();

function gerarRelatorio() {
      const nome = document.getElementById("nome").value;   
      const cpf = document.getElementById("cpf").value;
      const endereco = document.getElementById("endereco").value;
      const cardapio = parseInt(document.getElementById("cardapio").value);
      const tamanho = parseInt(document.getElementById("tamanho").value);
      const entrega = parseInt(document.getElementById("entrega").value);

      var 
}