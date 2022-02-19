var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { show, hide } from './showHide.js';
export const logData = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password })
        });
        const { token } = yield response.json();
        localStorage.setItem('jwt-token', token.toString());
        if (token) {
            hide(document.getElementById('logSessionButton'));
            show(document.getElementById('clDataButton'));
            show(document.getElementById('logOutButton'));
        }
        else {
            show(document.getElementById('logSessionButton'));
            hide(document.getElementById('clDataButton'));
            hide(document.getElementById('logOutButton'));
        }
        return token;
    }
    catch (err) {
        console.error(`Error: ${err}`);
    }
});
