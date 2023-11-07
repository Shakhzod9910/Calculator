button.addEventListener( 'click',(evt)=>{
    evt.preventDefault()
    
    let calculate = select.value
    if(calculate == 'plus'){
        let result = Number(first.value) + Number(second.value)
        output.textContent = result
    }else if(calculate == 'minus'){
        let result = Number(first.value) - Number(second.value)
        output.textContent = result
    }
    else if(calculate == 'div'){
        let result = Number(first.value) * Number(second.value)
        output.textContent = result
    }
    else if(calculate == 'mul'){
        let result = Number(first.value) / Number(second.value)
        output.textContent = result
    }
})

clear.addEventListener( 'click',(evt)=>{
    evt.preventDefault()
    first.value = null
    second.value = null
    output.textContent = null
})