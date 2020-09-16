console.log ('script was used')

const fitPlan = () => {
    const biggestHeight = document.querySelector('#highSub').clientHeight
    const cardArray = document.querySelectorAll('.plan-sub-div')
    for (let i = 0; i <cardArray.length; i++) {
        cardArray[i].style.height = biggestHeight
        
    }
}

//eb5ca408-f90e-4ede-a417-983b9d825ca7
fitPlan ()

// document.querySelector('#btn-plan-0').addEventListener('click', planProc(0))
// document.querySelector('#btn-plan-1').addEventListener('click', planProc(1))
// document.querySelector('#btn-plan-2').addEventListener('click', planProc(2))

function planProc (plan) {
    console.log (plan)
    // const scrollFoot = document.body.clientHeight - window.pageYOffset
    // window.scrollBy(0, scrollFoot)
    document.body.scrollIntoView(false)
    let textInput = document.querySelector('#text-input')
    if (plan === 0) textInput.value = 'Hello, I want to join an one hour class'
    else if (plan === 1) textInput.value = 'Hello, I want to join your courses on the month base'
    else textInput.value = 'Hello, I want to join your courses on the year base'
}

function triggerForm (form) {
    if (form === 'name') {
        document.querySelector('#name-span').innerHTML = 'Enter Your Name'
        document.querySelector('#name-input').style.boxShadow = 'inset -2px -2px 3px #ff6565, inset 3px 3px 5px rgba(0, 0, 0, 0.22)'
    } else if (form === 'email') {
        document.querySelector('#email-span').innerHTML = 'Enter Vaild E-mail'
        document.querySelector('#email-input').style.boxShadow = 'inset -2px -2px 3px #ff6565, inset 3px 3px 5px rgba(0, 0, 0, 0.22)' 
    } else if (form === 'text') {
        document.querySelector('#text-span').innerHTML = 'Enter Text'
        document.querySelector('#text-input').style.boxShadow = 'inset -2px -2px 3px #ff6565, inset 3px 3px 5px rgba(0, 0, 0, 0.22)' 
    }
}

function calmForm (form) {
    if (form === 'name') {
        document.querySelector('#name-span').innerHTML = ''
        document.querySelector('#name-input').style.boxShadow = 'inset -2px -2px 3px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.22)'
    } else if (form === 'email') {
        document.querySelector('#email-span').innerHTML = ''
        document.querySelector('#email-input').style.boxShadow = 'inset -2px -2px 3px #fff, inset 3px 3px 5px rgba(0, 0, 0, 0.22)' 
    } else if (form === 'text') {
        document.querySelector('#text-span').innerHTML = ''
        document.querySelector('#text-input').style.boxShadow = 'inset -2px -2px 3px #fff, inset 3px 3px 5px rgba(0, 0, 0, 0.22)' 
    }
}

function postSend () {
    alert ('Message is sent')
    document.querySelector('#name-input').value = ''
    document.querySelector('#email-input').value = ''
    document.querySelector('#text-input').value = ''
}