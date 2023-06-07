import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function GoalItem(props) {
  function goalItemPressed() {
    props.onDelete(props.id);
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goalItemPressed}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
    color: 'white',
  },

  goalText: {
    color: 'white',
  },
});
