document.querySelector("#login").addEventListener("click",Entrar);

function Entrar(){
    let em = document.getElementById("femail").value;
    console.log(em);
    let sn = document.getElementById("fsenha").value;
    console.log(sn);
    if(em != "diogo.velozo@gmail.com"){
        let em_erro = document.getElementById("msg-erro");
        em_erro.style.display = "block";
    }
    if(sn != "123"){
        let sn_erro = document.getElementById("msg-erro");
        sn_erro.style.display = "block";
    }
}