import { hide } from "./showHide.js";

export let chartConstructor = (labels: Array<string>, confirmeds: Array<any>, deaths: Array<any>, recovereds: Array<any>, actives: Array<any>) => {
    const data = {
        labels: labels,
        datasets: [{
            label: "Confirmed",
            backgroundColor: "blue",
            data: confirmeds
        },
        {
            label: "Muertos",
            backgroundColor: "red",
            data: deaths
        },
        {
            label: "Recuperados",
            backgroundColor: "green",
            data: recovereds
        },
        {
            label: "Activos",
            backgroundColor: "rgb(255, 165, 0)",
            data: actives
        }
        
    ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {}
    };


     const myChart = new Chart(
         document.getElementById('myChart'),
         config
     );

     hide(document.getElementById('loaderFt'));
} 