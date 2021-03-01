const p = document.querySelectorAll('p')

p.forEach(function(t){
    if (t.textContent.includes('the')){
        t.remove()
    }
    
})