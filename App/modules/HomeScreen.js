import React, { useState } from 'react'
import { View } from 'react-native'
import Button from '../components/Button'
import { Col, Container, Row } from '../resources/layout'
import useCarregaDatas from '../services/useCarregaDatas'
import ListaCalendario from '../components/ListaCalendario'


export default function HomeScreen() {
  const [feriadosMapeados, setferiadosMapeados] = useState()
  const [buscarDatasComemorativas, loading] = useCarregaDatas(2020, 'MT', 'CUIABA', (feriados) => {
    setferiadosMapeados(feriados)
  })

  return (
    <Container>
      <View style={{ flex: 1 }} >
        <Col>
          <Button title="Buscar datas" onPress={buscarDatasComemorativas} />
          <ListaCalendario feriados={feriadosMapeados} />
        </Col>
      </View>
    </Container>
  )
}

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

// {
//   '2020-05-16': {selected: true, marked: true, selectedColor: 'green'},
//   '2020-05-17': {marked: true},
//   '2020-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
//   '2020-05-19': {disabled: true, disableTouchEvent: true}
// }