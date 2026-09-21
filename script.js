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

const inputBusca = document.getElementById('input-busca');
const produtos = document.querySelectorAll('.cartao-produto');
const feedbackIa = document.getElementById('feedback-ia');
const secaoRanking = document.getElementById('secao-ranking');
const containerRanking = document.getElementById('lista-ranking');

const fazendasRanqueadas = [
  { nome: "Fazenda Boa Esperança", nota: "4.9", selo: "Top Qualidade & Entrega Pontual", produtos: "Cheiro-verde, Pimentão", imagem: "imagens/fazenda1.jpeg" },
  { nome: "Sítio Alvorada Verde", nota: "4.7", selo: "Cultivo 100% Sustentável", produtos: "Pimenta cheirosa, Hortaliças", imagem: "imagens/fazenda2.jpeg" },
  { nome: "Horta Comunitária Ribanceira", nota: "4.5", selo: "Preço Justo Direto", produtos: "Cheiro-verde", imagem: "imagens/fazenda3.jpeg" }
];

if (containerRanking) {
  containerRanking.innerHTML = "";
  fazendasRanqueadas.forEach(f => {
    const card = document.createElement('div');
    card.className = 'cartao-ranking';
    card.innerHTML = `
      <img src="${f.imagem}" alt="${f.nome}" class="foto-ranking">
      <h3>${f.nome}</h3>
      <p>⭐ ${f.nota} - <em>${f.selo}</em></p>
      <small>Especialidade: ${f.produtos}</small>
    `;
    containerRanking.appendChild(card);
  });
}

if (inputBusca) {
  inputBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase().trim();

    if (termo === 'ranking') {
      if (secaoRanking) secaoRanking.classList.remove('oculto');
      if (feedbackIa) {
        feedbackIa.classList.remove('oculto');
        feedbackIa.innerHTML = ` <strong>IA Insights:</strong> Exibindo o ranqueamento inteligente de fazendas baseado em avaliações e qualidade de cultivo.`;
      }

      produtos.forEach(prod => prod.style.display = "flex");
      return;
    } else {
      if (secaoRanking) secaoRanking.classList.add('oculto');
    }

    let encontrados = 0;
    produtos.forEach(prod => {
      const tags = prod.getAttribute('data-tags') || "";
      if (tags.includes(termo) || termo === "") {
        prod.style.display = "flex";
        encontrados++;
      } else {
        prod.style.display = "none";
      }
    });

    if (feedbackIa) {
      if (termo.length > 2) {
        feedbackIa.classList.remove('oculto');
        feedbackIa.innerHTML = ` <strong>IA Insights:</strong> Encontrados ${encontrados} itens baseados na sua intenção de busca ("${termo}").`;
      } else {
        feedbackIa.classList.add('oculto');
      }
    }
  });
}
