const cardapio_loja = [
    { id: "Carne", pastel: " Pastel de Carne - R$ 15.00 ", preco: 15.00 },
    { id: "Frango", pastel: " Pastel de Frango - R$ 15.00 ", preco: 15.00 },
    { id: "Queijo", pastel: " Pastel de Queijo - R$ 15.00 ", preco: 15.00 },
    { id: "CarneQueijo", pastel: " Pastel de Carne c/ Queijo - R$ 15.00 ", preco: 15.00 },
    { id: "Chocolate", pastel: " Pastel de Chocolate - R$ 20.00 ", preco: 20.00 },
    { id: "Cheddar", pastel: " Pastel de Carne c/ Cheddar - R$ 20.00 ", preco: 20.00 }
];

const tamanho_loja = [
    { id: "Pequeno", tamanho: " Pequeno - R$ 5.00 ", preco: 5.00 },
    { id: "Médio", tamanho: " Médio - R$ 7.00 ", preco: 7.00 },
    { id: "Grande", tamanho: " Grande - R$ 10.00 ", preco: 10.00 }
];

const entrega_loja = [
    { id: "Entrega", tipo: "Entrega - R$ 5.00 ", preco: 5.00 },
    { id: "Buscar", tipo: "Buscar - R$ 0.00 ", preco: 0.00 }
];

const acompanhante_loja = [
    { id: "Caldo de Cana", acompanhante: "Caldo de Cana - R$ 5.00 ", preco: 5.00},
    { id: "Suco Natural", acompanhante: "Suco Natural - R$ 3.00 ", preco: 3.00 },
    { id: "Refrigerante", acompanhante: "Refrigerante - R$ 7.00 ", preco: 7.00 },
    { id: "Nada", acompanhante: "Nenhum - R$ 0.00 ", preco: 0.00 }
];

function preencher(){
    const selectCardapio = document.getElementById("cardapio");
    cardapio_loja.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.pastel;
        selectCardapio.appendChild(option);
    });

    const selectAcompanhante = document.getElementById("acompanhantee");
    acompanhante_loja.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.acompanhante;
        selectAcompanhante.appendChild(option);
    });

    const selectTamanho = document.getElementById("tamanho");
    tamanho_loja.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.tamanho;
        selectTamanho.appendChild(option);
    });

    const selectEntrega = document.getElementById("entrega");
    entrega_loja.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.tipo;
        selectEntrega.appendChild(option);
    });
}
preencher();

function procurarPorId(lista, idProcurado) {
    return lista.find(item => item.id === idProcurado) || null;
}

document.getElementById("nome").addEventListener("input", function() {
  const nome = this.value;
  const mensagem = document.getElementById("mensagemBoasVindas");

  if (nome.trim() !== "") {
    mensagem.textContent = `👋 Olá, ${nome}! Seja bem-vindo à La Casa de Pastel!`;
  } else {
    mensagem.textContent = "";
  }
});

function gerarRelatorio() {
    const PagamentoId = document.querySelector('input[name="pagamento"]:checked')?.value || "Indefinido";
    const nomeId = document.getElementById("nome").value;
    const cpfId = document.getElementById("cpf").value;
    const enderecoId = document.getElementById("endereco").value;

    const cardapioId = document.getElementById("cardapio").value;
    const tamanhoId = document.getElementById("tamanho").value;
    const entregaId = document.getElementById("entrega").value;
    const acompanhanteId = document.getElementById("acompanhantee").value;

    const qtdCardapio = parseInt(document.getElementById("qtdCardapio").value) || 0;
    const qtdAcompanhante = parseInt(document.getElementById("qtdAcompanhante").value) || 0;

    const pastel = procurarPorId(cardapio_loja, cardapioId);
    const tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
    const entrega = procurarPorId(entrega_loja, entregaId);
    const acompanhante = procurarPorId(acompanhante_loja, acompanhanteId);

    const total = (pastel.preco * qtdCardapio) +
                  (acompanhante.preco * qtdAcompanhante) +
                  tamanhoo.preco +
                  entrega.preco;

    const relatorioHTML = `
       <h2>Relatório do Pedido</h2>
       <p><strong>Comprador:</strong> ${nomeId}</p>
       <p><strong>CPF:</strong> ${cpfId}</p>
       <p><strong>Endereço:</strong> ${enderecoId}</p>
       <p><strong>Pastel:</strong> ${cardapioId} x${qtdCardapio} = R$ ${(pastel.preco * qtdCardapio).toFixed(2)}</p>
       <p><strong>Acompanhante:</strong> ${acompanhanteId} x${qtdAcompanhante} = R$ ${(acompanhante.preco * qtdAcompanhante).toFixed(2)}</p>
       <p><strong>Tamanho:</strong> ${tamanhoId} = R$ ${tamanhoo.preco.toFixed(2)}</p>
       <p><strong>Entrega/Busca:</strong> ${entregaId} = R$ ${entrega.preco.toFixed(2)}</p>
       <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
       <p><strong>Pagamento:</strong> ${PagamentoId}</p>
    `;

    document.getElementById("relatorio").innerHTML = relatorioHTML;
}