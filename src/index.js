"use strict";

var form = document.getElementById('formulario');
var conteudoQR = document.getElementById('conteudoQR');
var QR = new QRCode(conteudoQR);
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  QR.makeCode(form.link.value);
  form.link.value = '';
});