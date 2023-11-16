import { toast } from "react-toastify";

export const showToast = (text: string, type: "error" | "success") => {
  toast[type](text, {
    position: "top-center",
    autoClose: 1500,
  });
};
