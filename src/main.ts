import { dataTotal } from './totalRequest.js'
import{ fillTable } from './table.js';
import { countryName, overTenThou, addRecoveredActive } from './filters.js';
import { chartConstructor } from './chartBuild.js';
import { countryData } from './dataCountry.js';
import { countryModalChart } from './countryChart.js'
import { logData } from './loginChile.js'
import { getConfir, getDeaths, getReco } from './getChileanData.js'
import { init} from './logValidation.js'
import { logout } from './logOut.js'
import { chileanChartConstructor } from './chileanChart.js'

//init()

let buttonlog = document.getElementById('loginButton') as HTMLButtonElement

buttonlog.addEventListener("click",( async (e) => {
    
    let email: string = ((document.getElementById('Form-email')) as HTMLInputElement).value
    let pass: string = ((document.getElementById('Form-pass')) as HTMLInputElement).value
     
    let modalForm = document.getElementById('modalLoginForm')as HTMLDivElement
    

    

      let JWT = await logData(email, pass)
      localStorage.setItem('nombre', 'lala')
      let confirData = await getConfir(JWT)
      let deathsData = await getDeaths(JWT)
      let recoData = await getReco(JWT)
      

      console.log(confirData)
      console.log(deathsData)
      console.log(recoData)
      console.log(email)
      
    console.log(pass)

    chileanChartConstructor(confirData, deathsData, recoData)


}))

//logout()



//let dataChile = document.getElementById('clDataButton')
//dataChile.addEventListener("click", () => {
        //hide(document.getElementById('tableDivr'))
        //hide(document.getElementById('chartDiv'))
        
//})

//let homeButton = document.getElementById('homeBtn')
//homeButton.addEventListener("click", () => {
   // show(document.getElementById('tableDivr'))
   // show(document.getElementById('chartDiv'))
//})




let covData = async () => {
    let info = await dataTotal();


    info.map(addRecoveredActive);

    let userTestStatus: { id: number, name: string }[] = [ { "id": 0, "name": "Available" },
     { "id": 1, "name": "Ready" }, { "id": 2, "name": "Started" } ];

    let moreActive = info.filter(overTenThou)

    let firstTenActv = (info.sort((a, b) => (a.active > b.active) ? -1 : 1)).slice(0, 10)

    let countryLabels = firstTenActv.map(countryName)

    let ftaActive = firstTenActv.map((e) => e.active)

    let ftaConfirmed = firstTenActv.map((e) => e.confirmed)

    let ftaDeaths = firstTenActv.map((e) => e.deaths)

    let ftaRecovered = firstTenActv.map((e) => e.recovered)



    let ftaCountryData: Array<any> = firstTenActv.map((e) => [e.confirmed, e.deaths, e.recovered, e.active]) 

    //console.log(ftaCountryData)

    //console.log(info);

    //console.log(moreActive);

    //console.log(firstTenActv)

    //console.log(countryLabels)

    //console.log(ftaActive)

    
    chartConstructor(countryLabels, ftaConfirmed, ftaDeaths, ftaRecovered, ftaActive);

    fillTable(moreActive, "tableBody");

    
    buttonModal()
   




}

let specificData = async (url) => {
    let countryResponse = await countryData(url)
    let countryOnlyData = countryResponse.data
    let countryTotalInfo = addRecoveredActive(countryOnlyData)

    //console.log(countryTotalInfo)

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

      console.log(abbrCountry);
      specificData(abbrCountry)
     })
 });
}



















