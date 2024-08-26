var tent=0
var button=document.getElementById('login').addEventListener('click',function(){
    var nome=document.getElementById('iemail').value 
    var senha=document.getElementById('isenha').value

    var num_n=Number(String(nome).length)
    var num_s=Number(String(senha).length)
    console.log(num_n,num_s)

    if(num_n>3 && num_s>5){
        if(tent>2){
            alert(`unfortunately we couldn't find your account because of your religion. Please try with your email`)
            var img=document.getElementById('ico')
            img.src='google_2.png'
        }
        else{
            alert('Incorrect password or username')
        }
        tent+=1
        document.getElementById('form').submit()
    }else{
        alert('Incorrect password or username')
    }
    
})