var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { logout } from './logOut.js';
import { init } from './logValidation.js';
import { getConfir, getDeaths, getReco } from "./getChileanData.js";
import { chileanChartConstructor } from "./chileanChart.js";
let callClChart = () => __awaiter(void 0, void 0, void 0, function* () {
    let token = yield init();
    let confirData = yield getConfir(token);
    let deathsData = yield getDeaths(token);
    let recoData = yield getReco(token);
    chileanChartConstructor(confirData, deathsData, recoData);
});
callClChart();
logout();
