import { dataTotal } from './totalRequest.js'
import{ fillTable } from './table.js';
import { countryName, overTenThou, addRecoveredActive } from './filters.js';
import { chartConstructor } from './chartBuild.js';
import { countryData } from './dataCountry.js';
import { countryModalChart } from './countryChart.js'
import { logData } from './loginChile.js'
import { init} from './logValidation.js'
import { logout } from './logOut.js'
import { CountriesData } from './objects.d.js'


init()

let buttonlog = document.getElementById('loginButton') as HTMLButtonElement

buttonlog.addEventListener("click",( async (e) => {
    
    let email: string = ((document.getElementById('Form-email')) as HTMLInputElement).value
    let pass: string = ((document.getElementById('Form-pass')) as HTMLInputElement).value
    
    if (email && pass) {
        let JWT = await logData(email, pass)
    } else {
        alert("Debes ingresar todos los campos")
    }

      
}))

logout()

let covData = async () => {
    let info = await dataTotal();
    info.map(addRecoveredActive);

    let userTestStatus: { id: number, name: string }[] = [ { "id": 0, "name": "Available" },
     { "id": 1, "name": "Ready" }, { "id": 2, "name": "Started" } ];

    let moreActive: CountriesData = info.filter(overTenThou)
    let firstTenActv: CountriesData = (info.sort((a, b) => (a.active > b.active) ? -1 : 1)).slice(0, 10)
    let countryLabels: Array<string> = firstTenActv.map(countryName)
    let ftaActive: Array<number> = firstTenActv.map((e) => e.active)
    let ftaConfirmed: Array<number> = firstTenActv.map((e) => e.confirmed)
    let ftaDeaths: Array<number> = firstTenActv.map((e) => e.deaths)
    let ftaRecovered: Array<number> = firstTenActv.map((e) => e.recovered)
    let ftaCountryData: Array<any> = firstTenActv.map((e) => [e.confirmed, e.deaths, e.recovered, e.active]) 
    
    chartConstructor(countryLabels, ftaConfirmed, ftaDeaths, ftaRecovered, ftaActive);
    
    fillTable(moreActive, "tableBody");

    buttonModal()

}

let specificData = async (url: string) => {
    let countryResponse = await countryData(url)
    let countryOnlyData = countryResponse.data
    let countryTotalInfo = addRecoveredActive(countryOnlyData)
    countryModalChart(countryTotalInfo)
}



covData()

let buttonModal = async () => {

 let pressedButtons = document.querySelectorAll('.modalButton'); 
 
 pressedButtons.forEach(elem => {
     elem.addEventListener('click', (event) => {
      let objetiveCountry = elem.getAttribute("data-country")

      let abbrCountry: string

      switch (objetiveCountry) {
          case 'UnitedKingdom':
              abbrCountry = 'GB'
              break;
          case 'SouthAfrica':
              abbrCountry = 'ZA'
              break;
          case 'UnitedArabEmirates':
              abbrCountry = 'AE'
              break;
              case 'KoreaSouth':
              abbrCountry = 'KR'
              break;
          case 'CostaRica':
              abbrCountry = 'CR'
              break;
          case 'SaudiArabia':
              abbrCountry = 'SA'
              break;
          case 'SriLanka':
              abbrCountry = 'LK'
              break;
          case 'WestBankandGaza':
              abbrCountry = 'PS'
              break;
          case 'DominicanRepublic':
              abbrCountry = 'DO'
              break;
          case 'BosniaandHerzegovina':
              abbrCountry = 'BA'
              break;
          case 'NorthMacedonia':
              abbrCountry = 'MK'
              break;
          case 'ElSalvador':
              abbrCountry = 'SV'
              break;
          case 'TrinidadandTobago':
              abbrCountry = 'TT'
              break;
          case 'CongoKinshasa':
              abbrCountry = 'CD'
              break;
          case "CotedIvoire":
            abbrCountry = 'CI'
            break;  
          case 'CaboVerde':
            abbrCountry = 'CV'
            break;
         case 'PapuaNewGuinea':
             abbrCountry = 'PG'
             break;
         default:
             abbrCountry = objetiveCountry
             break;                                                     
      }

      
      specificData(abbrCountry)
     })
 });
}



















