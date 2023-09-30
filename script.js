let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  try {
    let lista = document.getElementById("lista");
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("valor").value;

    if (nome === '' || numero === "") {
      throw new Error("Digite um valor nos campos");
    }

    let itemLista = document.createElement("li");
    let contatoText = document.createElement("span");
    let excluir = document.createElement('button');
    let atualizar = document.createElement("button");

    contatoText.textContent = `Nome: ${nome}, Número: ${numero}`;
    itemLista.appendChild(contatoText);

    excluir.innerText = "Excluir";
    excluir.addEventListener("click", () => {
      itemLista.remove();
    });

    atualizar.innerText = "Atualizar";
    atualizar.addEventListener("click", () => {
      let novoNome = prompt("Novo nome:");
      let novoNumero = prompt("Novo número:");

      if (novoNome !== null && novoNumero !== null) {
        contatoText.textContent = `Nome: ${novoNome}, Número: ${novoNumero}`;
      }
    });

    itemLista.appendChild(atualizar);
    itemLista.appendChild(excluir);
    lista.appendChild(itemLista);

    document.getElementById("nome").value = '';
    document.getElementById("valor").value = '';
  } catch (e) {
    alert(e.message);
  }
});
