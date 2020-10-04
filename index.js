let count = 0

function placeUrl(e) {
    let form = document.getElementById('form')
    //let inputSubmit = form[0].querySelector('input[type = "submit"]')
    e.preventDefault()
    let formData = new FormData(document.getElementById("form"))

// grab section2 and add new elements
    let section2 = document.getElementById('section2')
    let memeDiv = document.createElement('div')
        memeDiv.setAttribute('id', 'memeDiv' + count)
        count++
        memeDiv.setAttribute('class', 'memeDiv')
        section2.appendChild(memeDiv)

// create x button to delete meme, set attributes, append to memeDiv
    let xButton = document.createElement('input')
        xButton.setAttribute('type', 'submit')
        xButton.setAttribute('class', 'xButton')
        xButton.setAttribute('value', 'X')
        xButton.setAttribute('onclick', "remove(event)")
        memeDiv.appendChild(xButton)
    
// add event listener to xButton && notify user of removal && remove    
        xButton.addEventListener('click', function (event) {
            const hasUserConfirmedDelete = confirm('You are about to delete this bitchin\' meme.\n\nClick "OK" to proceed.')
            if (hasUserConfirmedDelete) {
                section2.removeChild(memeDiv)
            }
        })

// create top text divs and h1 for text
    let topTextDiv = document.createElement('div')
        topTextDiv.setAttribute('class', 'topText')
        memeDiv.appendChild(topTextDiv)
    
    let h1Top = document.createElement('h1')
        h1Top.setAttribute('id', 'h1Top')
        h1Top.innerText = formData.get('topText')
        topTextDiv.appendChild(h1Top)
    
// create new image      
    let newImage = document.createElement('img')
        newImage.setAttribute('class', 'pic')
        newImage.setAttribute('src', formData.get('url'))
        memeDiv.appendChild(newImage)
    
// create bottom txt divs and h1 for text
    let btmTextDiv = document.createElement('div')
        btmTextDiv.setAttribute('class', 'btmText')
        memeDiv.appendChild(btmTextDiv)

    let h1Btm = document.createElement('h1')
        h1Btm.innerText = formData.get('bottomText')
        btmTextDiv.appendChild(h1Btm)
    

    //if x is clicked
    //remove image

    form.reset()
}

document.addEventListener('DOMContentLoaded', function () {
    //inputSubmit.addEventListener('submit', placeUrl, false)
}, false)
