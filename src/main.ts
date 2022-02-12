import { dataTotal } from './totalRequest.js'
import{ fillTable } from './table.js';
import { countryName, overTenThou, addRecoveredActive } from './filters.js';
import { chartConstructor } from './chartBuild.js';
import { countryData } from './dataCountry.js';
import { countryModalChart } from './countryChart.js'

let covData = async () => {
    let info = await dataTotal();


    info.map(addRecoveredActive);

    let moreActive = info.filter(overTenThou)

    let firstTenActv = (info.sort((a, b) => (a.active > b.active) ? -1 : 1)).slice(0, 10)

    let countryLabels = firstTenActv.map(countryName)

    let ftaActive = firstTenActv.map((e) => e.active)

    let ftaConfirmed = firstTenActv.map((e) => e.confirmed)

    let ftaDeaths = firstTenActv.map((e) => e.deaths)

    let ftaRecovered = firstTenActv.map((e) => e.recovered)



    let ftaCountryData: Array<any> = firstTenActv.map((e) => [e.confirmed, e.deaths, e.recovered, e.active]) 

    console.log(ftaCountryData)

    console.log(info);

    console.log(moreActive);

    console.log(firstTenActv)

    console.log(countryLabels)

    console.log(ftaActive)

    
    chartConstructor(countryLabels, ftaConfirmed, ftaDeaths, ftaRecovered, ftaActive);

    fillTable(moreActive, "tableBody");

    

   




}

let specificData = async (url) => {
    let countryResponse = await countryData(url)
    let countryOnlyData = countryResponse.data
    let countryTotalInfo = addRecoveredActive(countryOnlyData)

    console.log(countryTotalInfo)

    countryModalChart(countryTotalInfo)
}

// let pressedButtons = document.querySelectorAll('.modalButton'); 
// pressedButtons.addEventListener('click', )

specificData('Brazil')

covData()













