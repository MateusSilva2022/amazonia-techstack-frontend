const radiosPerfil = document.querySelectorAll('input[name="perfil"]');
const campoProdutor = document.querySelector('.campo-produtor');
const campoComprador = document.querySelector('.campo-comprador');

function atualizarCamposPerfil() {
  const selecionado = document.querySelector('input[name="perfil"]:checked');
  if (!selecionado) return;

  if (campoProdutor && campoComprador) {
    if (selecionado.value === 'produtor') {
      campoProdutor.classList.remove('oculto');
      campoComprador.classList.add('oculto');
    } else {
        campoComprador.classList.remove('oculto');
        campoProdutor.classList.add('oculto');
      }
    }
  }

  if (radiosPerfil.length > 0) {
    radiosPerfil.forEach(function (radio) {
    radio.addEventListener('change', atualizarCamposPerfil);
  });
  atualizarCamposPerfil();
}

const containerRanking = document.getElementById('lista-ranking');

const fazendasRanqueadas = [
  { nome: "Fazenda Boa Esperança", estrelas: 5, produtor: "Alessandro Oliveira", imagem: "imagens/fazenda1.jpeg" },
  { nome: "Fazenda Serra do Sol", estrelas: 4, produtor: "Roger Matheus", imagem: "imagens/fazenda2.jpeg" },
  { nome: "Fazenda Rio Negro", estrelas: 3, produtor: "Fernando", imagem: "imagens/fazenda3.jpeg" }
];

if (containerRanking) {
  containerRanking.innerHTML = "";
  fazendasRanqueadas.forEach(f => {
    const card = document.createElement('div');
    card.className = 'cartao-ranking';
    
    const estrelasTexto = "⭐".repeat(f.estrelas);

    card.innerHTML = `
      <img src="${f.imagem}" alt="${f.nome}" class="foto-ranking">
      <h3>${f.nome}</h3>
      <p>${estrelasTexto} (${f.estrelas}/5)</p>
      <small>Produtor: ${f.produtor}</small>
    `;
    containerRanking.appendChild(card);
  });
}

