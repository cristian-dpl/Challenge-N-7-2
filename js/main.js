// punto 2
document.addEventListener('DOMContentLoaded', () =>{
    console.log('Contenido del DOM cargado')
    // punto 3
    let contentValue = document.getElementById('origen');
    contentValue.innerHTML = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'
    // punto 4
    const inputs = document.querySelectorAll('input, button');
    inputs.forEach((item) =>{
        item.disabled = false
    // punto 5
        let dest = document.getElementById('destino')
        if (item.id === 'btn-reemplazar') {
            item.addEventListener('click', () =>{
                reemplazaContendio();
            })
            const reemplazaContendio = () => dest.innerText = contentValue.value
        }
        let agregar = item
        if (agregar.value === 'Agregar') {
            agregar.addEventListener('click', () =>{
                dest.innerText += contentValue.value
            })
        }
        let agregarCincoVeces = item
        if (agregarCincoVeces.value === 'Agregar 5 veces') {
            agregarCincoVeces.addEventListener('click', () =>{
                for (let i = 1; i <= 5; i++) {
                    dest.innerText += contentValue.value
                }
            })
        }
        let agregarDiezVeces = item
        if (agregarDiezVeces.value === 'Agregar 10 veces') {
            agregarDiezVeces.addEventListener('click', () =>{
                for (let i = 1; i <= 10; i++) {
                    dest.innerText += contentValue.value
                }
            })
        }
        let agregarNVeces = item
        if (agregarNVeces.value === 'Agregar n veces') {
            agregarNVeces.addEventListener('click', () =>{
                let veces = parseInt(prompt('Ingrese la cantidad de veces que quiere que se repita'))
                if (!isNaN(veces)) {
                    for (let i = 1; i <= veces; i++) {
                        let concatText = dest.innerText += ' ' +  contentValue.value 
                        concatText += veces
                    }
                }else{
                    alert('Por favor ingrese un numero')
                }
            })
        }

        // punto 6

        let vaciar = item
        if (vaciar.value === 'Vaciar') {
            vaciar.addEventListener('click', () =>{
                dest.innerText = ''
            })
        }

        let mayuscula = item
        if (mayuscula.value === 'Convertir a mayúsculas') {
            mayuscula.addEventListener('click', () =>{
                let convertir = dest.innerText.toUpperCase();
                dest.textContent = convertir
            })
            
        }
        let minuscula = item
        if (minuscula.tagName === 'BUTTON') {
            minuscula.addEventListener('click', () =>{
                let convertir = dest.innerText.toLowerCase();
                dest.textContent = convertir
            })
            
        }
    })
    // punto 7
    
    const listas = document.getElementsByTagName('li')
    for (let i = 0; i < listas.length; i++) {
        const element = listas[i];
        element.innerHTML = `[OK] ${element.innerHTML}`
        
    }
})
