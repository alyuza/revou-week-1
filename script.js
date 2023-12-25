function button(){ //on click button
    let x = 'Hi ';
    let y = document.getElementById('name').value;
    let z = ', Nice to Meet You ^^';
    let message = x + y + z;
    var letters = /^[A-Za-z]+$/; //Letters Only
    
    if(y.match(letters)){ 
        alert(message)
    }else{
        alert('Please Input Correct Name')
    }
}