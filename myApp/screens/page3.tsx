import { View, Text, ScrollView } from 'react-native';

export default function Page3() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        Page Three — Random Facts
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        • The longest recorded echo lasted 75 seconds inside an underground fuel tank.
        {"\n\n"}
        • Octopuses have three hearts and their blood is blue because it uses copper.
        {"\n\n"}
        • Bananas are berries, but strawberries are not.
        {"\n\n"}
        • Honey never spoils — jars found in ancient Egyptian tombs were still edible.
        {"\n\n"}
        • A cloud can weigh more than a million kilograms.
      </Text>
    </ScrollView>
  );
}
