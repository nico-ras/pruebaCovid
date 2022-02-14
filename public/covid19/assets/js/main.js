var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dataTotal } from './totalRequest.js';
import { fillTable } from './table.js';
import { countryName, overTenThou, addRecoveredActive } from './filters.js';
import { chartConstructor } from './chartBuild.js';
import { countryData } from './dataCountry.js';
import { countryModalChart } from './countryChart.js';
let covData = () => __awaiter(void 0, void 0, void 0, function* () {
    let info = yield dataTotal();
    info.map(addRecoveredActive);
    let moreActive = info.filter(overTenThou);
    let firstTenActv = (info.sort((a, b) => (a.active > b.active) ? -1 : 1)).slice(0, 10);
    let countryLabels = firstTenActv.map(countryName);
    let ftaActive = firstTenActv.map((e) => e.active);
    let ftaConfirmed = firstTenActv.map((e) => e.confirmed);
    let ftaDeaths = firstTenActv.map((e) => e.deaths);
    let ftaRecovered = firstTenActv.map((e) => e.recovered);
    let ftaCountryData = firstTenActv.map((e) => [e.confirmed, e.deaths, e.recovered, e.active]);
    //console.log(ftaCountryData)
    //console.log(info);
    //console.log(moreActive);
    //console.log(firstTenActv)
    //console.log(countryLabels)
    //console.log(ftaActive)
    chartConstructor(countryLabels, ftaConfirmed, ftaDeaths, ftaRecovered, ftaActive);
    fillTable(moreActive, "tableBody");
    buttonModal();
});
let specificData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let countryResponse = yield countryData(url);
    let countryOnlyData = countryResponse.data;
    let countryTotalInfo = addRecoveredActive(countryOnlyData);
    //console.log(countryTotalInfo)
    countryModalChart(countryTotalInfo);
});
covData();
let buttonModal = () => __awaiter(void 0, void 0, void 0, function* () {
    let pressedButtons = document.querySelectorAll('.modalButton');
    pressedButtons.forEach(elem => {
        elem.addEventListener('click', (event) => {
            let objetiveCountry = elem.getAttribute("data-country");
            let abbrCountry;
            switch (objetiveCountry) {
                case 'UnitedKingdom':
                    abbrCountry = 'GB';
                    break;
                case 'SouthAfrica':
                    abbrCountry = 'ZA';
                    break;
                case 'UnitedArabEmirates':
                    abbrCountry = 'AE';
                    break;
                case 'KoreaSouth':
                    abbrCountry = 'KR';
                    break;
                case 'CostaRica':
                    abbrCountry = 'CR';
                    break;
                case 'SaudiArabia':
                    abbrCountry = 'SA';
                    break;
                case 'SriLanka':
                    abbrCountry = 'LK';
                    break;
                case 'WestBankandGaza':
                    abbrCountry = 'PS';
                    break;
                case 'DominicanRepublic':
                    abbrCountry = 'DO';
                    break;
                case 'BosniaandHerzegovina':
                    abbrCountry = 'BA';
                    break;
                case 'NorthMacedonia':
                    abbrCountry = 'MK';
                    break;
                case 'ElSalvador':
                    abbrCountry = 'SV';
                    break;
                case 'TrinidadandTobago':
                    abbrCountry = 'TT';
                    break;
                case 'CongoKinshasa':
                    abbrCountry = 'CD';
                    break;
                case "CotedIvoire":
                    abbrCountry = 'CI';
                    break;
                case 'CaboVerde':
                    abbrCountry = 'CV';
                    break;
                case 'PapuaNewGuinea':
                    abbrCountry = 'PG';
                    break;
                default:
                    abbrCountry = objetiveCountry;
                    break;
            }
            console.log(abbrCountry);
            specificData(abbrCountry);
        });
    });
});
