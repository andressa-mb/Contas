/*    
https://replit.com/@andressamb/Contas#index.html
*/
let formInserir = document.querySelector("#formInserir");
let fData = document.querySelector("#fData");
let fDescricao = document.querySelector("#fDescricao");
let fValor = document.querySelector("#fValor");
let botao = document.querySelector("#botao");

function adicionarLinha(event){
    event.preventDefault();

    if(!fData.value || !fDescricao.value || !fValor.value){
        alert("Favor preencher os campos");
        return; //interrompe a exec da função se algum campo estiver vazio
        
    }else{
        event.preventDefault(); //evita a ação padrão do formulário
        let tabela = document.querySelector("#tabela");
        let tLinha = document.createElement("tr");
        let tData = document.createElement("td");
        let tDescricao = document.createElement("td");
        let tValor = document.createElement("td");
        tabela.appendChild(tLinha);
        tLinha.appendChild(tData);
        tLinha.appendChild(tDescricao);
        tLinha.appendChild(tValor);
        tData.innerHTML = fData.value;
        tDescricao.innerHTML = fDescricao.value;
        tValor.innerHTML = "R$ " + fValor.value;
        fData.value = "";
        fDescricao.value = "";
        fValor.value = "";
        
        fData.focus();
    }

}

function foco(){
    fData.focus();
    document.getElementById("fData").addEventListener("keypress",
    function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            document.getElementById("botao").click();
        }
    });

    document.getElementById("fDescricao").addEventListener("keypress",
    function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            document.getElementById("botao").click();
        }
    });

    document.getElementById("fValor").addEventListener("keypress",
    function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            document.getElementById("botao").click();
        }
    });
}