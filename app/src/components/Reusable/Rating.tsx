import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { reusable } from './resusable.style'
import { MaterialIcons } from '@expo/vector-icons';
import WidthSpacer from './WidthSpacer';
import ReusableText from './ReusableText';
import { COLORS } from '../../../../constants/theme';

const Rating = ({Rating}) => {
  return (
    <View style={reusable.rowWithSpace('flex-start')}>
     <MaterialIcons name="star" size={22} color="gold" />
     <WidthSpacer width={5}/>
     <ReusableText
        text={Rating}
        family={"medium"}
        size={15}
        color={COLORS.blue}
        />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})