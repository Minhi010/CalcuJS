class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorAnterior;
        this.displayValorAnterior = displayValorActual;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: '*',
            restar: '-',
        }

    }
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        if (this.valorActual === 0) {
            this.valorAnterior = this.valorActual
        } else {
            this.valorAnterior = this.valorActual || this.valorAnterior;
        }
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores() {
        // console.log("valor actual: " + this.valorActual);
        // console.log("valor anterior: " + this.valorAnterior);
        if(this.valorActual.length<10){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;}
        
    }
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);

    }
}