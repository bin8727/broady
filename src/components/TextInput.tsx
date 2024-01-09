import React,{ forwardRef} from "react";
import { TextInput as Input } from "react-native";

const TextInput = forwardRef<Input>(ref) => {
  return <Input ref={ref} />
};

export default TextInput;
