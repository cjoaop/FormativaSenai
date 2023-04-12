// -- Atividade 1 -- //

function validandoDados() {
  let data = frmRegistro.inData.value;
  let nome = frmRegistro.inCli.value;
  let telefone = frmRegistro.inFone.value;
  let email = frmRegistro.inMail.value;
  let produto = frmRegistro.inProd.value;
  let quantidade = frmRegistro.inQtd.value;
  let valor = frmRegistro.inVal.value; 

  let erro = document.getElementById('mensagem-erro');
  let contem = email.includes('@'); 
  
  if (nome.trim() == '' || contem == false || email == '' || valor == '' || valor < 0 || quantidade == '' || quantidade < 0 || produto == '' ||
  telefone == '') {

    erro.style.display = 'block';
    erro.innerHTML = 'Mensagem de erro: Os dados estão incorretos! Preencha novamente.';
  }
  else 
  alert('Obrigado por preencher nosso formulário!')

  if (nome.trim() == '' || contem == false || email == '' || valor == '' || valor > 0 || quantidade == '' || quantidade > 0 || produto == '' ||
  telefone == '') {

    erro.style.display = 'block'
    erro.innerHTML = 'Todos os campos são obrigatórios!';
  }
}

// -- Atividade 2 -- // 

function gerandoImagens() {
  let img = document.getElementById('canvas');
  img.innerHTML = '';

  let valor = inQtdImg.value;
  
  for (let i=0; i<valor; i++){
      img.innerHTML +='<img src="img/pasta.jpg" alt="img" class="imagens">';
  }

  
}

// -- Atividade 3 -- // 

function alterarAcender() {
  let imagem = document.getElementById('lampada');
  let caminho = imagem.src;
  let arquivo = caminho.substring( caminho.lastIndexOf('/')+1 );
  

  if (arquivo=='apagada.jpg' || arquivo=='')
      imagem.src = 'img/acesa.jpg';
  else 
      imagem.src = 'img/apagada.jpg';
      
      let botao = document.getElementById('btnEnviar');

      if (botao.textContent == 'Apagar') {
          botao.textContent = 'Acender';
      }
      else {
          botao.textContent = 'Apagar';
      } 
}

// -- Atividade 4 -- // 

function calcular() {

  var valor = document.getElementById('inValorPedido').value;
  var perc = document.getElementById('inPercDesc').value;
  var desc = document.getElementById('inValDesc').value;
  var valorL = document.getElementById('inValFinal').value;


  if (valor <= 500)
      document.getElementById('inPercDesc').value = 0.5;
  document.getElementById('inValDesc').value = (0.5 * valor) / 100;

  if (valor < 0)
      alert('Somente valores positivos!');
  let valordesc = document.getElementById('inValDesc').value;
  let valor2 = valor - valordesc;
  var valorL = document.getElementById('inValFinal').value= valor2

  if (valor > 500 && valor <= 1000)
      document.getElementById('inPercDesc').value = 0.8;
  if (valor > 1000 && valor <= 1500)
      document.getElementById('inPercDesc').value = 1.0;
  if (valor > 1500 && valor <= 2000)
      document.getElementById('inPercDesc').value = 1.5;
}