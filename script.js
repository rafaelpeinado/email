var assuntos = [];
var assuntosIguais = [];
var novaLista = "<h1>Emails</h1>";
var nomes = [];
var tempos = [];
var assuntosIncluidos = [];
var existeAssunto = false;
function ordernarAssunto() {
    assuntos = document.getElementsByName("assunto");
    nomes = document.getElementsByName("nome");
    tempos = document.getElementsByName("tempo");
    var i = 0;
    var j = 0;
    var z = 0;

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
                    novaLista += "<li>";
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
                        novaLista += "<li>";
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
                novaLista += "<li>";
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
    document.getElementById("novaOrd").innerHTML = novaLista;
}