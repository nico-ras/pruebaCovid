import { getConfir, getDeaths, getReco } from "./getChileanData.js";
import { chileanChartConstructor } from "./chileanChart.js";
import { show, hide } from "./showHide.js";

export const init = async () => {
  const token = localStorage.getItem("jwt-token");
  if (token) {
    let confirData = await getConfir(token);
    let deathsData = await getDeaths(token);
    let recoData = await getReco(token);

    chileanChartConstructor(confirData, deathsData, recoData);
    hide(document.getElementById("logSessionButton"));
    show(document.getElementById("clDataButton"));
    show(document.getElementById("logOutButton"));
    
  }
};
