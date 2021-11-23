
// /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;




function validation(){
    let input=document.getElementById('email').value;
    // let div=document.querySelector('.inp');
    let form=document.getElementById('form');
    let print=document.getElementById('print');
    let pattern=/^[^ ]+@[^]+\.[a-z]{3,7}$/

    if(input.match(pattern)){
        print.textContent = ''
        form.classList.remove('invalid');
        email.style.borderColor='hsl(0, 36%, 70%)';
    }else if(input==''){
        print.textContent = ''
        form.classList.remove('invalid');
        email.style.borderColor='hsl(0, 36%, 70%)';
    }else{
        print.textContent="Please provide a valid email"
        form.classList.add('invalid');
        email.style.borderColor=' hsl(0, 93%, 68%)';
    }
}