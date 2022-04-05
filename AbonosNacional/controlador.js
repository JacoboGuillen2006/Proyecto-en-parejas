let boton=document.getElementById ("boton") 
    boton.addEventListener ("click",function(event){

        let selector=document.getElementById("selector").value
        alert("ustred eligio el"+selector)
         
        let precio=0
        let total=0
        let cantidad=document.getElementById ("cantidad").value

        switch(selector){
            case "1":
                alert("elgiste la sur-norte")
                precio=144000
                total=precio*cantidad
                break 
            case "2":
                alert("elgiste la oriental")
                precio=215000
                total=precio*cantidad
                break 
            case "3":
                 alert("elgiste la occidental")
                 precio=444000
                total=precio*cantidad
                 break   
        }  

        alert ("el precio total del abono es"+total)
        
        
    } )