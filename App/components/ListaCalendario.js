import React from 'react'
import {} from 'react-native'
import {CalendarList, LocaleConfig} from 'react-native-calendars'

export default function ListaCalendario({feriados}) {
  configuraIdioma()
  feriados.map(data => {FormataStringData(data)});
  return (
    <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={6}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={6}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
      markedDates={feriados}
    />
  )
}

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

function configuraIdioma(){

  LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul.','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'br';
}

