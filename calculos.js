function calcularSubtotal (){
	var cantPan = document.getElementById('cantPan').value;
	var valorPan = document.getElementById('valorPan').value;
	var subtotal = cantPan * valorPan;
	var cantLeche = document.getElementById('cantLeche').value;
	var valorLeche = document.getElementById('valorLeche').value;
	var subtotal1= cantLeche * valorLeche;
	var cantHuevos = document.getElementById('cantHuevos').value;
	var valorHuevos = document.getElementById('valorHuevos').value;
	var subtotal2= cantHuevos * valorHuevos;
	subtotaldef = subtotal + subtotal1 + subtotal2;

	var cantJabon = document.getElementById('cantJabon').value;
	var valorJabon = document.getElementById('valorJabon').value;
	var subtotal3 = cantJabon * valorJabon;
	var cantShampoo = document.getElementById('cantShampoo').value;
	var valorShampoo = document.getElementById('valorShampoo').value;
	var subtotal4 = cantShampoo * valorShampoo;
	var cantCrema = document.getElementById('cantCrema').value;
	var valorCrema = document.getElementById('valorCrema').value;
	var subtotal5 = cantCrema * valorCrema;
	subtotaldef1 = subtotal3 + subtotal4 + subtotal5;

	var subtotalfinal=  subtotaldef + subtotaldef1;

	document.getElementById('subtotal2').value = subtotalfinal;


   calcularIva();
	
	}

document.getElementById('btncalc').onclick= calcularSubtotal;

function calcularIva(){
	document.getElementById('subtotal').value =subtotaldef;
	var valorIva = document.getElementById('valorIva').value;
	document.getElementById('inputIva1').value =(subtotaldef * valorIva);

	document.getElementById('subtotal1').value =subtotaldef1;
	var valorIva1 = document.getElementById('valorIva1').value;
	document.getElementById('inputIva2').value =(subtotaldef1 * valorIva1);

	}