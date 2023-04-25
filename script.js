function retornarValores(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('endereco').value = (conteudo.logradouro)
        document.getElementById('inputbairro').value = (conteudo.bairro)
        document.getElementById('inputcomp').value = (conteudo.complemento)
        document.getElementById('inputcidade').value = (conteudo.localidade)
    }
    else {
        alert("CEP não encontrado")
    }
}

function buscaCep(valor){
    var cep = valor.replace(/\D/g, '')
    if(cep != ""){
        var validarCEP = /^[0-9]{8}$/ 
        if(validarCEP.test(cep)){
            document.getElementById('endereco').value = "..."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)
        }else{
            alert("Formato invalido")
        }
    }
}
