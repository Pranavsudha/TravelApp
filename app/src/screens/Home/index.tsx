import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PlacesCard from '../../components/PlacesCard'
import { reusable } from '../../components/Reusable/resusable.style'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../../../constants/theme'
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles"
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import Places from './Places'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
        <ReusableText
        text={'Hey User!'}
        family={"regular"}
        size={TEXT.large}
        color={COLORS.black}
        />
        <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Search')}>
        <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>

    
        
        </View>
        <HeightSpacer height={SIZES.xLarge}/>
        <ReusableText
        text={'Places'}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
        />
        <Places/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen


