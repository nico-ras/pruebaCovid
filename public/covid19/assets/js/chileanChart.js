export let chileanChartConstructor = (confirData, deathsData, recoData) => {
    const data = {
        labels: confirData.map((e) => e.date),
        datasets: [{
                label: "Confirmed",
                borderColor: "blue",
                data: confirData.map((e) => e.total),
                backgroundColor: 'transparent',
                tension: 0.1
            },
            {
                label: "Muertos",
                borderColor: "red",
                data: deathsData.map((e) => e.total),
                backgroundColor: 'transparent'
            },
            {
                label: "Recuperados",
                borderColor: "green",
                data: recoData.map((e) => e.total),
                backgroundColor: 'transparent',
            },
        ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    const myChart = new Chart(document.getElementById('myChileanChart'), config);
};
