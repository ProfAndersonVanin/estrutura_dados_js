function Fila(){
    var itens = []

    this.enqueue = function(elemento){
        //adiciona um novo item a fila
        itens.push(elemento)
    }

    this.dequeue = function(){
        //remove um item da fila
        return itens.shift()
    }

    this.front = function(){
        //retorna o primeiro elemento da fila
        return itens[0]
    }

    this.isEmpty = function(){
        //verifica se a fila está vazia ou não
        return itens.length == 0
    }

    this.size = function(){
        //retorna o tamanho da fila
        return itens.length
    }

    this.print = function(){
        //imprime a fila no console
        console.log(itens.toString())
    }
}

var minhaFila = new Fila()

minhaFila.enqueue(10)
minhaFila.print()
minhaFila.enqueue(35)
minhaFila.print()
minhaFila.enqueue(2)
minhaFila.print()
minhaFila.enqueue(40)
minhaFila.print()

minhaFila.dequeue()
minhaFila.print()
minhaFila.dequeue()
minhaFila.print()
minhaFila.dequeue()
minhaFila.print()

console.log('Qtde de elementos na fila => ' + minhaFila.size())

minhaFila.enqueue(12)
minhaFila.print()

console.log('Qtde de elementos na fila => ' + minhaFila.size())
minhaFila.dequeue()
minhaFila.print()