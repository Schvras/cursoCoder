const carro ={
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
};

const clio = {
    modelo: 'Clio 1.0',
    velMax: 140
}

const gol = {
    modelo: 'Gol 1.0',
    velMax: 145,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(clio, carro);
Object.setPrototypeOf(gol, carro);

clio.acelerar(200);
console.log(clio.status())

gol.acelerar(200);
console.log(gol.status())