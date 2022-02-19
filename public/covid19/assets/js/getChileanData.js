var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getConfir = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('http://localhost:3000/api/confirmed', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const { data } = yield response.json();
        //if (data) {
        //fillFeed(data, "imgesDiv", counter);
        // hide(form);
        //show(divFeed);
        //}
        return data;
    }
    catch (err) {
        localStorage.clear();
        console.error(`Error: ${err}`);
    }
});
export const getDeaths = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('http://localhost:3000/api/deaths', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const { data } = yield response.json();
        //if (data) {
        //fillFeed(data, "imgesDiv", counter);
        // hide(form);
        //show(divFeed);
        //}
        return data;
    }
    catch (err) {
        localStorage.clear();
        console.error(`Error: ${err}`);
    }
});
export const getReco = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(' http://localhost:3000/api/recovered', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const { data } = yield response.json();
        //if (data) {
        //fillFeed(data, "imgesDiv", counter);
        // hide(form);
        //show(divFeed);
        //}
        return data;
    }
    catch (err) {
        localStorage.clear();
        console.error(`Error: ${err}`);
    }
});
