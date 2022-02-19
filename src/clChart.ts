import { logout } from './logOut.js'
import { init } from './logValidation.js'
import { getConfir, getDeaths, getReco } from "./getChileanData.js";
import { chileanChartConstructor } from "./chileanChart.js";




let callClChart = async () => {
      
    let token = await init()

    let confirData = await getConfir(token);
    let deathsData = await getDeaths(token);
    let recoData = await getReco(token);

    chileanChartConstructor(confirData, deathsData, recoData);
}

callClChart()

logout()