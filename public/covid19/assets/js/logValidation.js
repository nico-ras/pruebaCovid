var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { show, hide } from "./showHide.js";
export const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = localStorage.getItem("jwt-token");
    if (token) {
        hide(document.getElementById("logSessionButton"));
        show(document.getElementById("clDataButton"));
        show(document.getElementById("logOutButton"));
    }
    return token;
});
