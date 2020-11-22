import React from 'react'
import { useEffect } from 'react-native'
import { Col, Container, Row } from '../resources/layout'
import ListaCalendario from '../components/ListaCalendario'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function CalendarioScreen({ route, navigation }) {

  const datas = route.params.calendario

  return (
    <Container>
      <Col>
        <ListaCalendario feriados={datas} />
      </Col>
    </Container>
  )
}