function zodi() {
    let dia, mes;
    dia = parseInt(document.Formulario.dia.value);
    mes = parseInt(document.Formulario.mes.value);
    
    var image = document.getElementById("imagenes");
    if ((dia>=21&&mes==3 ) || (dia<=20&&mes==4)) {
        document.getElementById("imagenes").src="aries.jpg";
    }
    if ((dia>=24 && mes == 9 ) || (dia<=23&&mes==10)) 
        document.getElementById("imagenes").src="libra.jpg";
    
    if ((dia>=21 && mes == 4 ) || (dia<=21&&mes==5)) 
        document.getElementById("imagenes").src("tauro.jpg");
    
    if ((dia>=24 && mes == 10 ) || (dia<=22&&mes==11)) 
        document.getElementById("imagenes").src="escorpion.jpg";
    
    if ((dia>=22 && mes == 5 ) || (dia<=21&&mes==6)) 
        document.getElementById("imagenes").src="geminis.jpg";
    
    if ((dia>=23 && mes == 11 ) || (dia<=21&&mes==12)) 
        document.getElementById("imagenes").src="sagitario.jpg";
    
    if ((dia>=21 && mes == 6 ) || (dia<=23&&mes==7)) 
        document.getElementById("imagenes").src="cancer.jpg";
    
    if ((dia>=22 && mes == 12 ) || (dia<=20&&mes==1)) 
        document.getElementById("imagenes").src="capricornio.jpg";
    
    if ((dia>=24 && mes == 7 ) || (dia<=23&&mes==8)) 
        document.getElementById("imagenes").src="leo.jpg";
    
    if ((dia>=21 && mes == 1 ) || (dia<=19&&mes==2)) 
        document.getElementById("imagenes").src="acuario.jpg";
    
    if ((dia>=24 && mes == 8 ) || (dia<=23&&mes==9)) 
        document.getElementById("imagenes").src="virgo.jpg";
    
    if ((dia>=20 && mes == 2 ) || (dia<=20&&mes==3)) 
        document.getElementById("imagenes").src="picis.jpg";
    
    }  
    