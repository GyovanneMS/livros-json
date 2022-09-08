/*=========================================================
* Objetivo: API para a procura de livros;
* Data: 08/09/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

//import da biblioteca da express para criar a API
const express = require("express");

//import da biblioteca do cors para manipular as permissões de protocolo HTTP
const cors = require("cors");

//import da bibliotexa do body-parser que irá manipular o corpo das requisições do protocolo HTTP
const bodyParser = require("body-parser");

const { getLivros } = require("./modulos/livrosPalavraChave");

const app = express();

app.get('/livros/:livro', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let livros = request.params.livro;

    let todosLivros = getLivros(livros);

    if(todosLivros){
        response.status(200);
        response.json(todosLivros);
    } else{
        response.status(404);
    }

})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições...')
});