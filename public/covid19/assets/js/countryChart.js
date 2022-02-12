export let countryModalChart = (country) => {
    const data = {
        labels: [`Pais: ${country.location}`],
        datasets: [{
                label: 'Confirmados',
                backgroundColor: "blue",
                data: [country.confirmed]
            },
            {
                label: 'Muertes',
                backgroundColor: "red",
                data: [country.deaths]
            },
            {
                label: 'Recuperados',
                backgroundColor: "green",
                data: [country.recovered]
            },
            {
                label: 'Activos',
                backgroundColor: "rgb(255, 165, 0)",
                data: [country.active]
            }]
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
};
