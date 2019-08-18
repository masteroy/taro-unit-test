import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

interface Props {
  initCount: number
}

export function MultipleUseEffect({ initCount }: Props) {
  const [counter, setCounter] = useState(initCount);

  useEffect(() => {
    console.log('useEffect 1');
  }, []);

  useEffect(() => {
    console.log('useEffect 2');
  }, []);

  return (
    <View>
      <Button onClick={() => setCounter(counter + 1)} >+1</Button>
      <Text>{counter}</Text>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
    </View>
  )
}