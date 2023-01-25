/*
problema b
Coflan no compra nada, le rompe la cara al vendedor  y decide
darle el dinero a un vagabundo y este decide comprar un boleto de loteria.
-Si le alcanza un boleto, lo compra.
-Si le alcanza dos boleto, compra dos.
-Si le alcanza tres y sobra , regala el vuelto.
-Debe mostrar que compro y el vuelto.
*/

const Comprar=(Dinero,Cant)=>
{
    let recibo;
    let i=0;
    let boleto=Number(prompt("Cuanto cuesta el boleto"));
    
    if (Dinero<boleto)
    {
        recibo="No te alcanza para ningun boleto"
    }
    else 
    {
        while(Dinero>=boleto && i<Cant)
        {
            Dinero=Dinero-boleto;
            i++;
        }
        recibo=`Compraste ${i} boletos y te sobro ${Dinero}$`
    }
    
    return recibo;
}

Dinero=Number(prompt("Cuanto dinero tiene el vagabundo"));
Cant=Number(prompt("Cuantos boletos quieres"));
document.write(Comprar(Dinero,Cant));