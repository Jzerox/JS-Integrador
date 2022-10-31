
var cantidad= document getelementbyid("cantidad")
cantidad.addEventListener("change", function () {
	var precioUnitario = document.getElementById("200$");
	console.log(typeof precioticket, typeof cantidad.value)
	document.getElementById("total").innerHTML = parseInt(cantidad.value) * precioticket.value;
	
	desc = document.getElementById("category").value;
	desc = parseInt(desc);
	if (desc == 1) {
		descuento = 80
	} else if (desc == 2) {
		descuento = 50
	} else if (desc == 3) {
		descuento = 15
	} else {
		descuento = 80
	}

	
	valor = document.getElementById('cantidad').value;
	valor = parseInt(valor);
	total1 = 0;
	total1 = (valor * 200);
	total2 = total1 - ((descuento * total1) / 100);

	

	document.getElementById('total').innerHTML = " Total a pagar: $" + total2.toString();

}
);



const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', () => {
	document.getElementById('total').innerHTML = " Total a pagar: $";

}
);







