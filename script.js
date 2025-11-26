function SomarTabuada() {
    let num = document.getElementById('num').value
    let seltab = document.getElementById('seltab')
    seltab.innerHTML = ''
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num)
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');// Cria um elemento option
            item.text = `${n} + ${i} = ${n + i}`;// Texto exibido no item
            item.value = `tab${i}` // Valor usado para identificar o item
            seltab.appendChild(item) // Adiciona o item à lista
        }
    }
}

//let ou var podem ser usados para declarar variáveis
//let tem escopo de bloco {}
//var não tem escopo de bloco, só de função function() {}   

function SubtrairTabuada() {
    let num = document.querySelector('input#num').value
    let seltab = document.querySelector('select#seltab')
    seltab.innerHTML = ''
    if (num.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num)
        let cont = n+1
        let ContFinal = n+10
        for (let i = cont; i <= ContFinal; i++) {
            let item = document.createElement('option') // Cria um elemento option
            item.text = `${i} - ${n} = ${i - n}`
            item.value = `tab${i}`
            seltab.appendChild(item)
        }

    }
}

function MultiplicarTabuada() {
    let num = document.getElementById('num').value
    let seltab = document.getElementById('seltab')
    seltab.innerHTML = ''
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num)
        for (let i = 1; i <=10; i++) {
           let item = document.createElement('option')
           item.text = `${n} x ${i} = ${n * i}`
           item.value = `tab${i}`
           seltab.appendChild(item)
        }
    }
}

function DividirTabuada() {
    let num = document.querySelector('input#num').value
    let seltab = document.querySelector('select#seltab')
    seltab.innerHTML = ''
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num)
        let cont = n*10
        for (let i = n; i <= cont; i+=n) {
           let item = document.createElement('option')
           item.text = `${i} ÷ ${n} = ${i / n}`
           item.value = `tab${i}`
           seltab.appendChild(item)
        }
    }
}