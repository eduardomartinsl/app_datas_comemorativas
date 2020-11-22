import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../resources/colors'

export default function Button({ title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: colors.textOnPrimary }}>{title}</Text>
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
  },
}) 