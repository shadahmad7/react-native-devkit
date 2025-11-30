import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';

const visibilityRef = { current: (_: boolean) => {} };

export const DebugPanel = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    visibilityRef.current = setVisible;
  }, []);

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Debug Panel</Text>
        <Button title="Close" onPress={() => setVisible(false)} />
      </View>
    </Modal>
  );
};

export const showDebugPanel = () => {
  visibilityRef.current(true);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 20, color: 'white', marginBottom: 20 },
});
