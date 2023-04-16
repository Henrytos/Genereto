const form = document.getElementById('formulario');
const conteudoQR = document.getElementById('conteudoQR');
const QR = new QRCode(conteudoQR);
form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    QR.makeCode(form.link.value);
    form.link.value=''
})