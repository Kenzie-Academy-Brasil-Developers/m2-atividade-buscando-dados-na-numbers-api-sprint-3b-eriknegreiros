const secondDiv = document.querySelector('.second-div')

const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    const input = document.querySelector('.input')
    Numeros.imprimirCuriosidade(input.value)  
    secondDiv.innerHTML = ''
})

class Numeros {
    static async imprimirCuriosidade(number){
        const data = await fetch(`http://numbersapi.com/${number}/trivia?json`)
        .then(res => res.json())
        .then(res =>{
            const p = document.createElement('p')

            p.classList.add('facts')

            p.innerText = res.text
              
            secondDiv.append(p) 
        })
        .catch(err => console.log(err))

        return data
    }
}

