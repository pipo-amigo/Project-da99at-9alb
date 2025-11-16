import { View, Text, ScrollView } from 'react-native';

export default function Page1() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        Page One — Introduction
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
        volutpat odio, et consequat neque facilisis non. Nullam rhoncus, risus
        quis egestas suscipit, justo erat pellentesque neque, id convallis
        ipsum felis vel velit. Suspendisse nec massa urna. Maecenas tincidunt
        orci ut sapien euismod, quis pretium orci porta. Curabitur posuere
        scelerisque leo, a rutrum velit pellentesque et. Integer gravida
        suscipit interdum. Vestibulum non nibh feugiat, cursus arcu at,
        porttitor nunc.
      </Text>
    </ScrollView>
  );
}
