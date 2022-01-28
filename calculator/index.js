// const calculator = document.querySelector('.container');
// const keys = document.querySelector('.charac')
// 
// keys.addEventListener('click', e => {
//     if(e.target.matches('button')){
//         return;
//     }
// })
// 
// const key = e.target;
// const action = key.dataset.action;
// 
// for(let i =0; i<nodes.length;i++)
// {
//         node[i].addEventListener('click', populateInput)
// }


function populateInput(element)
{
    var nodes = document.getElementsByTagName('input');
    
    if (element.getAttribute('value')=='AC')
    {
        document.getElementById('input').innerHTML='0';
        return;
    }
    if (element.getAttribute('value')=='=')
    {
        document.getElementById('input').innerHTML = eval(document.getElementById('input').innerHTML);
        result = eval(document.getElementById())
        return;
    }

    character = element.getAttribute('value');
    current=document.getElementById('input').innerHTML;
    if (current=='0')
    {
        document.getElementById('input').innerHTML=character;
        return;
    }
    document.getElementById('input').innerHTML+= character;
    
}