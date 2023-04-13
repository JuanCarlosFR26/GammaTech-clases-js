// Ejercicios

// Ejercicios Nivel 1

// Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
class Animal {
    constructor(nombre, edad, color, piernas) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.piernas = piernas;
    }

    sonido() {
        return `Guau`;
    }

    getInfo() {
        const fullAnimal = `Soy un ${this.nombre}, tengo ${this.edad}, soy de color ${this.color} y tengo ${this.piernas}`
        return fullAnimal;
    }
}

// Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
class Perro extends Animal {
    constructor(nombre, edad, color, piernas, cola) {
        super(nombre, edad, color, piernas);
        this.cola = cola;
    }

    sonido() {
        return `Soy un ${this.nombre} y digo Guau!`;
    }

    getInfo() {
        const fullAnimal = `Soy un ${this.nombre}, tengo ${this.edad}, soy de color ${this.color} y tengo ${this.piernas}. Además ${this.cola} tengo cola`;
        return fullAnimal;
    }
}

class Gato extends Animal {
    constructor(nombre, edad, color, piernas, vidas) {
        super(nombre, edad, color, piernas);
        this.vidas = vidas;
    }

    sonido() {
        return `Soy un ${this.nombre} y digo Miau!`;
    }

    getInfo() {
        const fullAnimal = `Soy un ${this.nombre}, tengo ${this.edad}, soy de color ${this.color} y tengo ${this.piernas}. Me quedan ${this.vidas} vidas`;
        return fullAnimal;
    }
}


// Ejercicios Nivel 2
// Sobrescribir el método que se crea en la clase Animal.
const gato1 = new Gato('Gato Persa', 8, "marrón", "4", 7)
console.log(gato1.sonido());
console.log(gato1.getInfo());


// Ejercicios Nivel 3

// Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos estadísticos como método para la clase Statistics. Comprueba el resultado que aparece a continuación.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // el resultado debería ser el siguiente
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class Statistics {
    count(arr) {
        return arr.length
    }

    sum(arr) {
        let suma = (acc, cur) => acc + cur;
        return arr.reduce(suma)
    }

    min(arr) {
        arr.sort((a,b) => {
            return a - b;
        })
        return arr[0]
    }

    max(arr) {
        arr.sort((a,b) => {
            return b - a;
        })
        return arr[0]
    }

    range(arr) {
        return this.max(arr) - this.min(arr);
    }

    mean(arr) {
        return Math.round(this.sum(arr) / arr.length);
    }

    median(arr) {
        arr.sort((a,b) => {
            return a - b;
        })
        return arr[Math.floor(arr.length / 2)];
    }

    mode(arr) {
        let frecuencia = {};
        let numMasRepetido;
        let maxFrecuenc = -1;

        for(let i = 0; i < arr.length; i++) {
            let num = arr[i];
            if(frecuencia[num] == null) {
                frecuencia[num] = 1;
            } else {
                frecuencia[num]++;
            }
        }

        for(let numero in frecuencia) {
            if(frecuencia[numero] > maxFrecuenc) {
                maxFrecuenc = frecuencia[numero];
                numMasRepetido = numero;
            }
        }

        return `(${numMasRepetido}, ${maxFrecuenc})`
    }

    variance(arr) {
        const media = arr.reduce((acc, age) => acc + age, 0) / arr.length;

        const sum = arr.reduce((acc, age) => acc + ((age - media) ** 2), 0);

        const varianza = sum / (arr.length - 1);

        return varianza;
    }

    frecuenciaDIstribucion(arr) {
        const frecuency = {};

        let arrFrecuency = [];

        arr.forEach((age) => {
            if(frecuency[age]) {
                frecuency[age]++;
            } else {
                frecuency[age] = 1;
            }
        });

        let newFrecuency = Object.entries(frecuency);

        for(const [keys, values] of newFrecuency) {
            arrFrecuency.push([keys, values]);
        }

        return arrFrecuency;
    }
}

const statistics = new Statistics();

console.log(statistics.count(ages));
console.log(statistics.sum(ages));
console.log(statistics.min(ages));
console.log(statistics.max(ages));
console.log(statistics.range(ages));
console.log(statistics.mean(ages));
console.log(statistics.median(ages));
console.log(statistics.mode(ages));
console.log(statistics.variance(ages));
console.log(statistics.frecuenciaDIstribucion(ages));

// Crea una clase llamada PersonAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
class PersonAccount {
    constructor(nombre, apellido, ingresos, gastos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ingresos = ingresos;
        this.gastos = gastos;
    }

    totalIncome() {
        return this.ingresos
    }

    totalExpense() {
        return this.gastos
    }

    accountInfo() {
        return `El cliente se llama ${this.nombre} ${this.apellido}. Tiene un saldo total de ${this.ingresos}€ y gastos totales igual a ${this.gastos}€`;
    }

    addIncome(cantidad) {
        return `Ingresos totales: ${this.ingresos + cantidad}€`
    }

    addExpense(cantidad) {
        return `Gastos totales: ${this.gastos + cantidad}€`
    }

    accountBalance() {
        return this.ingresos - this.gastos;
    }

}

const client1 = new PersonAccount('Juan', 'Fernández', 1000, 500);

console.log(client1.totalIncome());
console.log(client1.totalExpense());
console.log(client1.accountInfo());
console.log(client1.addIncome(1000));
console.log(client1.addExpense(100));
console.log(client1.accountBalance());