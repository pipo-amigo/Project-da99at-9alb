import { View, Text, ScrollView } from 'react-native';

export default function Page2() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        Page Two — Story
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        Once upon a time in a small quiet town, there was a hidden library
        known only by those who truly loved stories. The books inside were
        ancient, filled with tales of forgotten kingdoms, lost treasures, and
        heroes who never sought glory. People who visited said that the pages
        felt alive, whispering their secrets as you read. The more time you
        spent in the library, the more it felt like you were stepping into
        another world entirely.
      </Text>
    </ScrollView>
  );
}
