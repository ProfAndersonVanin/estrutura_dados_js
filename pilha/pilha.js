function Pilha(){
    var itens = []

    this.push = function(elemento){
        //adciona um novo item a pilha
        itens.push(elemento)
    }

    this.pop = function(){
        //remove o ítem do topo da pilha
        return itens.pop()
    }

    this.peek = function(){
        //devolve o elemento que está no topo da pilha
        return itens[itens.length-1]
    }

    this.isEmpty = function(){
        //informar se a pilha está vazia ou não
        return itens.length == 0
    }
    
    this.clear = function(){
        //limpa a pilha
        itens = []
    }

    this.size = function(){
        //informa o tamanho da pilha
        return itens.length
    }

    this.print = function(){
        //imprime a pilha no console
        console.log(itens.toString())
    }

}


var minhaPilha = new Pilha()

minhaPilha.push(2)
minhaPilha.push(4)
minhaPilha.push(6)
minhaPilha.push(8)
minhaPilha.push(10)

//minhaPilha.clear()

//console.log(minhaPilha.isEmpty())

minhaPilha.print()