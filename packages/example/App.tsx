import React from 'react';
import { View, Button } from 'react-native';
import { showDebugPanel, log, fetchInterceptor, saveItem, CONFIG, sendToNative } from '@shadahmad7/core';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Show Debug Panel"
        onPress={() => {
          showDebugPanel();
          log('Debug panel opened');
          fetchInterceptor('https://example.com', { method: 'GET' });
          saveItem('test', { a: 1 });
          sendToNative('testEvent', { data: 123 });
          console.log(CONFIG);
        }}
      />
    </View>
  );
}
