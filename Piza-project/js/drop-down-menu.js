function dropDownEle() {
    let dropElement = document.getElementsByClassName('drop-down-menu')[0]
    let profileBtn = document.getElementsByClassName('btn-wrapper')[0]

    window.addEventListener('click', eventHandler)

    function eventHandler(event) {
        let current_element = event.target

        if (current_element.closest('.btn-wrapper') === profileBtn) {
            changeDisplay(current_element)
        } else if(current_element != profileBtn && dropElement.style.display != 'none'){
            changeDisplay(current_element)
        }

    }

    function changeDisplay(current_element){
        if (dropElement.style.display == 'block') {
            dropElement.style.display = "none"
        } else {
            if (current_element.closest('.btn-wrapper')) {
                dropElement.style.display = 'block'
            }
        }
    }
}

dropDownEle()