import React from 'react'
import { View } from 'react-native'
import Button from '../components/Button'
import { Col, Container, Row } from '../resources/layout'
import useCarregaDatas from '../services/useCarregaDatas'
import ListaCalendario from '../components/ListaCalendario'


export default function HomeScreen() {



  const [buscarDatasComemorativas, loading] = useCarregaDatas(2020, 'MT', 'CUIABA')

  return (
    <Container>
      <View style={{ flex: 1 }} >
        <Col>
          <Button title="Buscar datas" onPress={buscarDatasComemorativas} />
          <ListaCalendario />
        </Col>
      </View>
    </Container>
  )
}