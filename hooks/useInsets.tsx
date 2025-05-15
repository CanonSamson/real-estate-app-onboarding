import { useSafeAreaInsets } from "react-native-safe-area-context";

const useInsets = () => {
  const insets = useSafeAreaInsets();

  return { bottom: insets.bottom, top: insets.top };
};

export default useInsets;
