// Valor del ticket
function calctotal() {
	let cant = document.getElementById("cantInput").value;
	cant = parseInt; { cant };
	let total = 0;
	total = cant * 200;
	let categoria = document.getElementById("categ").value;

	if (categoria == 1) {

		total = 80000;
	}
	if (categoria == 2) {
		total = 78000;

	}
	if (categoría == 3) {
		total = 2;

	}

	document.getElementById("canttotal").innerHTML = "Total a pagar:$" + total;
}
function clearform() {
	document.getElementById("canttotal").innerHTML = "Total a pagar:$";
}



//Descuento al cliente
desc = document.getElementById("categoria").value;
desc = parseInt(desc);
if (desc == 1) {
	desc = 80;
} else if (desc == 2) {
	desc = 50;
} else if (desc == 3) {
	desc = 15;
} else {
	desc = 80;
}


valor = document.getElementById('cantinput').value;
valor = parseInt(valor);
total1 = 0;
total1 = (valor * 200);
total2 = total1 - ((descuento * total1) / 100);



document.getElementById('total').innerHTML = " Total a pagar: $" + total2.toString();





