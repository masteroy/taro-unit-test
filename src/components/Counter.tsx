import Taro, { useState } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

interface Props {
  initCount: number
}

export function Counter({ initCount }: Props) {
  const [counter, setCounter] = useState(initCount);
  return (
    <View>
      <Button onClick={() => setCounter(counter + 1)} >+1</Button>
      <Text>{counter}</Text>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
    </View>
  )
}