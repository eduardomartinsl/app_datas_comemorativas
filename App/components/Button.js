import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../resources/colors'
import { http } from '../resources/http'
import { Row } from '../resources/layout'

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.primary, 
    padding: 8, 
    alignItems: 'center',
    borderRadius: 4,
    margin: 8
  }
}) 