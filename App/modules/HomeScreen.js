import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Button from '../components/Button'
import { Col, Container, Row } from '../resources/layout'
import useCarregaDatas from '../services/useCarregaDatas'
import ListaCalendario from '../components/ListaCalendario'
import { Picker } from '@react-native-picker/picker';
import {CALENDARIO_SCREEN} from '../App'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {
  const {calendario, isLoading, loadHollidays} = useCarregaDatas(2020, 'MT', 'CUIABA')

  useEffect(() => {
    if(Object.keys(calendario).length){
      navigation.navigate('calendario', {calendario})
    }
  }, [calendario])

  return (
    <Container>
      <Col>
        <Button title="Buscar datas" onPress={loadHollidays} />
      </Col>
    </Container>
  )
}