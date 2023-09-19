invitados=[];
function abc()
{
    mostrar_lista=[];
    for(var i =1;i<14;i++ )
    {
      n1=document.getElementById("nombre_"+i).value;

invitados.push(n1);
    }

var longitud= invitados.length;
document.getElementById("Nombres").innerHTML=duvalines;

 document.getElementById("ordenar").style.display = "inline-block";
 for(var l =1;l<longitud;l++ )
 {
 

mostrar_lista.push("<h4>"+duvalines[l]+"</h4>");
 }
 document.getElementById("Nombres").innerHTML=mostrar_lista;
}
function searching()
var s = document.getElementById("s1").value;
var found= 0;
var j;
for( j=0, j<invitados.length; j++)
{
    if(s==ivitados[j])}
    found=found+1;
    document.getElementById("p2").innerHTML="name found"+found+" time/s";
    console.log("found name"+found+"time/s");