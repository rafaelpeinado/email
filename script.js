var assuntos = [];
var assuntosIguais = [];
var novaLista = "";
var nomes = [];
var tempos = [];
var assuntosIncluidos = [];
var existeAssunto = false;
function ordernarAssunto() {
  novaLista = "";
    assuntos = document.getElementsByName("assunto");
    nomes = document.getElementsByName("nome");
    tempos = document.getElementsByName("tempo");

    var i = 0;
    var j = 0;
    var z = 0;
    novaLista += "<h1>Email</h1>" +
                "<ul id='novaOrd'>";



    for (i = 0; i < assuntos.length; i += 1) {
        if (i === 0) {
            existeAssunto = false;
            assuntosIncluidos.push(assuntos[i].textContent);
        } else {
            existeAssunto = false;
            for (j = 0; j < assuntosIncluidos.length; j += 1) {
                if (assuntos[i].textContent === assuntosIncluidos[j]) {
                    existeAssunto = true;
                }
            }
        }

        if (!existeAssunto) {
            assuntosIncluidos.push(assuntos[i].textContent);

            for (z = assuntos.length - 1; z > i; z -= 1) {
                if (assuntos[i].textContent === assuntos[z].textContent) {
                    assuntosIguais.push(z);
                }
            }

            if (assuntosIguais.length > 0) {
                if (!existeAssunto) {
                    novaLista += "<h2>"
                              + assuntos[i].textContent
                              + "</h2>";
                    novaLista += "<li class='titulo_li'>"
                             + "<span class='titulo'>Nome</span>"
                             + "<span class='titulo'>Assunto</span>"
                             + "<span class='titulo'>Data</span>"
                             + "</li>";
                    novaLista += "<li class='corpo'>";
                    novaLista += "<span class='nome' name='nome'>"
                              + nomes[i].textContent
                              + "</span> ";
                    novaLista += "<span class='assunto' name='assunto'>"
                              + assuntos[i].textContent
                              + "</span> ";
                    novaLista += "<span class='tempo' name='tempo'>"
                              + tempos[i].textContent
                              + "</span> ";
                    novaLista += "</li>";
                    for (j = assuntosIguais.length - 1; j >= 0; j -= 1) {
                        novaLista += "<li class='corpo'>";
                        novaLista += "<span class='nome' name='nome'>"
                                  + nomes[assuntosIguais[j]].textContent
                                  + "</span> ";
                        novaLista += "<span class='assunto' name='assunto'>"
                                  + assuntos[assuntosIguais[j]].textContent
                                  + "</span> ";
                        novaLista += "<span class='tempo' name='tempo'>"
                                  + tempos[assuntosIguais[j]].textContent
                                  + "</span> ";
                        novaLista += "</li>";
                    }
                    assuntosIguais = [];
                }
            } else {
                novaLista += "<h2>"
                          + assuntos[i].textContent
                          + "</h2>";
                novaLista += "<li class='titulo_li'>"
                         + "<span class='titulo'>Nome</span>"
                         + "<span class='titulo'>Assunto</span>"
                         + "<span class='titulo'>Data</span>"
                         + "</li>";
                novaLista += "<li  class='corpo'>";
                novaLista += "<span class='nome' name='nome'>"
                          + nomes[i].textContent
                          + "</span> ";
                novaLista += "<span class='assunto' name='assunto'>"
                          + assuntos[i].textContent
                          + "</span> ";
                novaLista += "<span class='tempo' name='tempo'>"
                          + tempos[i].textContent
                          + "</span> ";
                novaLista += "</li>";
            }
        }
    }
    novaLista += "</ul>";
    novaLista += "<button onclick='ordernarData()'>Ordernar por Data</button>";
    document.getElementById("conteudo").innerHTML = novaLista;
    novaLista = "";
}

function ordernarData(){
  novaLista = "";
  novaLista += "<h1>Email</h1>" +
                "<ul id='novaOrd'>";
  assuntos = document.getElementsByName("assunto");
  nomes = document.getElementsByName("nome");
  tempos = document.getElementsByName("tempo");
  tudo = document.getElementsByClassName("corpo");
  var datas = [];
  var data = "";
  var novaData = "";
  var i = 0;
  var j = 0;
  var auxData = 0;
  var auxOrdem = 0;

  for(i = 0; i < tempos.length; i += 1){
    data = (tempos[i].textContent).toString();
    datas[i] = new Date(data.substring(6,10), data.substring(3,5), data.substring(0,2), data.substring(11,13), data.substring(14,16), data.substring(17,19), i);
  }

  for(i = 1; i < tudo.length; i += 1){
      for(j = 0; j < tudo.length-1; j += 1){
        if(datas[j] < datas[j+1]){
          auxData = datas[j];
          datas[j] = datas[j+1];
          datas[j+1] = auxData;
        }
      }
  }

  novaLista += "<li class='titulo_li'>"
             + "<span class='titulo'>Nome</span>"
             + "<span class='titulo'>Assunto</span>"
             + "<span class='titulo'>Data</span>"
             + "</li>";

  for(i = 0; i < tempos.length; i += 1){
    novaLista += "<li>";
    novaLista += "<span class='nome' name='nome'>"
              + nomes[datas[i].getMilliseconds()].textContent
              + "</span> ";
    novaLista += "<span class='assunto' name='assunto'>"
              + assuntos[datas[i].getMilliseconds()].textContent
              + "</span> ";
    novaLista += "<span class='tempo' name='tempo'>"
              + tempos[datas[i].getMilliseconds()].textContent
              + "</span> ";
    novaLista += "</li>";

  }

  novaLista += "</ul>";
  novaLista += "<button onclick='ordernarAssunto()'>Ordernar por Assunto</button>";
  document.getElementById("conteudo").innerHTML = novaLista;
  novaLista = "";
}