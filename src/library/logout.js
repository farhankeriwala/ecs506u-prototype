import { signOut } from "firebase/auth";
import { authentication } from "../config/firebase";
const logout = async () => {
  try {
    await signOut(authentication);
  } catch (error) {
    console.log(error.message);
  }
};

export { logout };
