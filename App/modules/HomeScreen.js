import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import { Col, Container, Row } from '../resources/layout'
import useCarregaDatas from '../services/useCarregaDatas'
import CarregaDatas from '../services/useCarregaDatas'

export default function HomeScreen() {

  const [buscarDatasComemorativas, loading] = useCarregaDatas()

  return (
    <Container>
      <Col>
        <Button title="Buscar datas" onPress={buscarDatasComemorativas} />
      </Col>
    </Container>
  )
}