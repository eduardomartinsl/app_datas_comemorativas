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
        <Row>
          <Text>Home screen eae man </Text>
          <Text>Home screen eae man </Text>
          <Text>Home screen eae man </Text>
        </Row>
        <Text>Home screen eae man</Text>
        <Text>Home screen eae man</Text>
        <Text>Home screen eae man</Text>
        <Button title="Titulo do botão" onPress={buscarDatasComemorativas} />
      </Col>
    </Container>
  )
}

function alertao(){
  return alert("bora la time")
}