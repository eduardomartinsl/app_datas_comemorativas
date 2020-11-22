import React from 'react'

export default function FormataStringData(feriado) {
  var dia = feriado.split("/")[0];
  var mes = feriado.split("/")[1];
  var ano = feriado.split("/")[2];
  var formatado = ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
  return formatado
}