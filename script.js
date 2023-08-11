let bulb = document.getElementById('bulb')
let btn = document.getElementById('btn')
btn.addEventListener('click', togglebulb)

function togglebulb(e) {
    if (btn.textContent.includes('On')){
        bulb.src = 'light on.png'
        btn.textContent = 'Turn Off'
    } else {
        bulb.src = 'light off.png'
        btn.textContent = 'Turn On'
    }

}