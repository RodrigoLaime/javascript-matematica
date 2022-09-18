function calcularAlturaTriangulo(lado1, base){
    if (lado1 == base) {
        console.warn('?triangulo');
    } else {
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4))
    }
     
}

/* calcular Altura Triangulo Escaleno */

function calcularAlturaTrianguloEscaleno(a, b, c) {
	/*
	Calcula la altura (hb) de un triangulo escaleno
	a = lado1
	b = base
	c = lado2
	*/
	const x = (c**2 - a**2 + b**2) / (2 * b);
	const h = Math.sqrt(c**2 - x**2);
    return h;
}

