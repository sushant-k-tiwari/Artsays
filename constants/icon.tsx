import { Feather } from "@expo/vector-icons";

export const icon = {
  index: (props: any) => (
    <Feather name="home" size={24} color={"#6F4E37"} {...props} />
  ),
  explore: (props: any) => (
    <Feather name="compass" size={24} color={"#6F4E37"} {...props} />
  ),
  account: (props: any) => (
    <Feather name="user" size={24} color={"#6F4E37"} {...props} />
  ),
};
