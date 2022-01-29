// var selection = getElementById('charac-con');
// selection.getElementsByTagName('INPUT').addEventListener('click', calc(this));
// 
// document.getElementsByTagName('input').addEventListener("click", calc(this));

const btn =document.querySelector(".btn-toggle");

const theme = document.querySelector("#theme-link");

btn.addEventListener('click', function(){
    if(theme.getAttribute('href') == 'css/light-mode.css'){
        theme.href = "css/dark-mode.css";
    }else{
        theme.href = "css/light-mode.css"
    }
});







function populateInput(element){
    // getting the current element on the display
    current = document.getElementById('input').innerHTML;
    character = element.getAttribute('value')

    // making AC to clear input
    if(character == 'AC'){
        document.getElementById('input').innerHTML = '0';
        return;
    }

    // making the equal '=' to work
    if(character == '='){
        document.getElementById('input').innerHTML = eval(document.getElementById('input').innerHTML);
        return;
    }


    // making number 0 not to display when pressed at the first instance 
    if(current == '0'){
        document.getElementById('input').innerHTML = character;
        return;
    }

    // remove last character 
    if(character == '<'){
        document.getElementById('input').innerHTML = document.getElementById('input').innerHTML.slice(0, -1);
        return;
    }

    
    document.getElementById('input').innerHTML += character;
}
