import { useState } from "react";

const useTextInputFocus = () => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const onFocus = () => setHasFocus(true);
  const onBlur = () => setHasFocus(false);

  return { hasFocus, onBlur, onFocus };
};

export default useTextInputFocus;
