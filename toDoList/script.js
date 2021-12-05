const button=document.querySelector('#push');

function outputtask() {
    if(document.querySelector('#newtask input').value.length!=0) {
        const info=document.querySelector('#newtask input').value;
        console.log(info);
        document.querySelector('.task').innerHTML+=info;
    }
    else if(document.querySelector('#newtask input').value.length==0) {
        alert('Molim vas, unesite podatke u polje!');
    }
}

button.addEventListener('click',outputtask);


var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    alert('Molim vas, unesite podatke u polje!');
    var div = document.querySelector('.tasks');
    div.style.display = "none";
  }
}

function checked() {
    close.style.textDecoration="line-through";
}
close.addEventListener('clicl',checked);