
import { show, hide } from "./showHide.js";

export const init = async () => {
  const token = localStorage.getItem("jwt-token");
  
  if (token) {

    hide(document.getElementById("logSessionButton"));
    show(document.getElementById("clDataButton"));
    show(document.getElementById("logOutButton"));
    
  }
  return token
};
