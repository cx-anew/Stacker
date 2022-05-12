
function switcher(e) {
    //const ids = {'new_eq': '#new_items', 'out': '#out_items', 'raport': '#create_raport'}; 
    const ids = ['#new_items', '#out_items', '#create_raport']

    switch (e) {
        case 0:
            document.querySelector(ids[0]).classList.remove('d-none')
            document.querySelector(ids[0]).classList.add('d-block')
            document.querySelector(ids[1]).classList.remove('d-block')
            document.querySelector(ids[1]).classList.add('d-none')
            document.querySelector(ids[2]).classList.remove('d-block')
            document.querySelector(ids[2]).classList.add('d-none')
            break
        case 1:
            document.querySelector(ids[0]).classList.remove('d-block')
            document.querySelector(ids[0]).classList.add('d-none')
            document.querySelector(ids[1]).classList.remove('d-none')
            document.querySelector(ids[1]).classList.add('d-block')
            document.querySelector(ids[2]).classList.remove('d-block')
            document.querySelector(ids[2]).classList.add('d-none')
            break
        case 2:
            document.querySelector(ids[0]).classList.remove('d-block')
            document.querySelector(ids[0]).classList.add('d-none')
            document.querySelector(ids[1]).classList.remove('d-block')
            document.querySelector(ids[1]).classList.add('d-none')
            document.querySelector(ids[2]).classList.remove('d-none')
            document.querySelector(ids[2]).classList.add('d-block')
            break
    }
}



// NEW ITEMS SCREEN
new_eq = document.querySelector('#new_eq')
new_eq.addEventListener('click', function items() {
    switcher(0)
})

// OUT ITEMS SCREEN
out_eq = document.querySelector('#out')
out_eq.addEventListener('click', function items() {
    switcher(1)
})

// RAPORT SCREEN
new_eq = document.querySelector('#raport')
new_eq.addEventListener('click', function items() {
    switcher(2)
})

let serial = document.querySelector('#sn')
serial.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key == 'Enter') {
        sn = serial.value
        ent = document.querySelector('#serials')
        ent.innerHTML += createSN(sn)

        //document.querySelector('#snSuccess').innerHTML = 'Zapisano'

        snbg = document.querySelector('#snbg')
        snbg.classList.add('bg-success', 'text-white')
        setTimeout(() => {
            snbg.classList.remove('bg-success', 'text-white')
        }, 200)
        serial.value = ''
        console.log('Saved: '+sn)

    }
});

function createSN(sn) {
    let btn = '<div class="col-2"><button type="button" class="btn btn-outline-danger">X</button></div></div>'
    let num = '<div class="row" id="' + sn + '"><div class="col-10"><p class="input-group-text">' + sn + '</p></div>'

    return num + btn
}