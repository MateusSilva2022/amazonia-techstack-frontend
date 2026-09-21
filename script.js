const radiosPerfil = document.querySelectorAll('input[name="perfil"]');
const campoProdutor = document.querySelector('.campo-produtor');
const campoComprador = document.querySelector('.campo-comprador');

function atualizarCamposPerfil() {
  const selecionado = document.querySelector('input[name="perfil"]:checked');
  if (!selecionado) return;
  if (selecionado.value === 'produtor') {
    campoProdutor.classList.remove('oculto');
    campoComprador.classList.add('oculto');
  } else {
    campoComprador.classList.remove('oculto');
    campoProdutor.classList.add('oculto');
  }
}

radiosPerfil.forEach(function (radio) {
  radio.addEventListener('change', atualizarCamposPerfil);
});

atualizarCamposPerfil();