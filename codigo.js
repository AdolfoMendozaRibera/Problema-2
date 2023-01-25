/*

problema b
Coflan no compra nada, le rompe la cara al vendedor  y decide
darle el dinero a un vagabundo y este decide comprar un boleto de loteria.
-Si le alcanza un boleto, lo compra.
-Si le alcanza dos boleto, compra dos.
-Si le alcanza tres y sobra , regala el vuelto.
-Debe mostrar que compro y el vuelto.

*/

let Dinero=prompt("Cuanto dinero le da Coflan al vagabundo");
let Costo=prompt("Cuanto cuesta el boleto");
let Cant=0;

while ((Dinero>=Costo) && (Cant< 3))
{
    Dinero=Dinero-Costo;
    Cant=Cant+1;
}

if (Cant==0)
{
    document.write("No te alcanza te falta "+ (Costo-Dinero))
}
else if (Cant>0)
{
    document.write(`<br>`)
    document.write("Compraste "+ Cant + " Boleto ")
    document.write(`<br>`)
    document.write("Te sobro "+ Dinero);
}

if (Cant==3)
{
    document.write(`<br>`)
    document.write("Le regalas al vendedor " + Dinero);
    document.write(`<br>`)
}


