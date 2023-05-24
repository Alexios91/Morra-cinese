//console.log("collegamento avvenuto");

document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("inizia").onclick=function(){
        //console.log("sei nella funzione");
        document.getElementById("scelta").style.display="block";
        document.getElementById("you").style.backgroundImage="";
        document.getElementById("cpu").style.backgroundImage="";
        document.getElementById("risultato").style="";
    }

/*
    0 foglia
    1 forbice
    2 sasso
*/

    var puntiYou=0, puntiCpu=0;

    document.getElementById("foglia").onclick=function(){
        // ha scelto 0
        var sceltaYou=0

        //var numCasuale=parseInt(Math.random()*3);
        var sceltaCpu=Math.floor(Math.random()*3);

        console.log(sceltaYou, sceltaCpu);

        document.getElementById("scelta").style.display="none"; //nascondo le immagini;

        document
            .getElementById("you")
            .style.backgroundImage="url(immagini/foglia.png)";

        var imgCpu,ris;

        if(sceltaCpu==0){
            imgCpu="foglia.png";
            ris="<span class='patta'>Partita patta</span>";
        }

        else if(sceltaCpu==1){
            imgCpu="forbice.png";
            ris="<span class='persa'>Mi dispiace, hai perso</span>";
            puntiCpu++;
        }

        else{
            imgCpu="sasso.png";
            ris="<span class='vinta'>Complimenti! Hai vinto</span>";
            puntiYou++;
        }

        console.log(imgCpu,ris);

        document
            .getElementById("cpu")
            .style.backgroundImage="url(immagini/"+imgCpu+")";

        console.log(puntiYou, puntiCpu);

        document.getElementById("risultato").innerHTML=ris;
        document.getElementById("risultato").style.display="block";
        document.getElementById("punteggioYou").innerHTML=puntiYou;
        document.getElementById("punteggioCpu").innerHTML=puntiCpu;  
    } //onclick di foglia


    document.getElementById("forbice").onclick=function(){
        // ha scelto 1
        var sceltaYou=1

        var sceltaCpu=Math.floor(Math.random()*3);

        console.log(sceltaYou, sceltaCpu);

        document.getElementById("scelta").style.display="none";

        document
            .getElementById("you")
            .style.backgroundImage="url(immagini/forbice.png";

        var imgCpu,ris;

        if(sceltaCpu==0){
            imgCpu="foglia.png";
            ris="<span class='vinta'>Complimenti! Hai vinto</span>";
            puntiYou++;
        }
    
        else if(sceltaCpu==1){
            imgCpu="forbice.png";
            ris="<span class='patta'>Partita patta</span>";
        }
    
        else{
            imgCpu="sasso.png";
            ris="<span class='persa'>Mi dispiace, hai perso</span>";
            puntiCpu++;
        }
    
        console.log(imgCpu,ris);

        document
            .getElementById("cpu")
            .style.backgroundImage="url(immagini/"+imgCpu+")";

            document.getElementById("risultato").innerHTML=ris;
            document.getElementById("risultato").style.display="block";
            document.getElementById("punteggioYou").innerHTML=puntiYou;
            document.getElementById("punteggioCpu").innerHTML=puntiCpu;                
    } //onclick di forbice
    

    document.getElementById("sasso").onclick=function(){
        // ha scelto 2
        var sceltaYou=2

        var sceltaCpu=Math.floor(Math.random()*3);

        console.log(sceltaYou, sceltaCpu);

        document.getElementById("scelta").style.display="none";

        document
            .getElementById("you")
            .style.backgroundImage="url(immagini/sasso.png)";

        var imgCpu,ris;

        if(sceltaCpu==0){
            imgCpu="foglia.png";
            ris="<span class='persa'>Mi dispiace, hai perso</span>";
            puntiCpu++;
        }
    
        else if(sceltaCpu==1){
            imgCpu="forbice.png";
            ris="<span class='vinta'>Complimenti! Hai vinto</span>";
            puntiYou++;
        }
    
        else{
            imgCpu="sasso.png";
            ris="<span class='patta'>Partita patta</span>";
        }
    
        console.log(imgCpu,ris);

        document
            .getElementById("cpu")
            .style.backgroundImage="url(immagini/"+imgCpu+")";

            document.getElementById("risultato").innerHTML=ris;
            document.getElementById("risultato").style.display="block";
            document.getElementById("punteggioYou").innerHTML=puntiYou;
            document.getElementById("punteggioCpu").innerHTML=puntiCpu;                
    } //onclick di sasso

}); 



