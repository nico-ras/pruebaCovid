export let countryName = (e) => {
    return e.location;
};
export let overTenThou = (e) => {
    if (e.active >= 10000) {
        return e;
    }
};
export let addRecoveredActive = (e) => {
    e.recovered = Math.round((e.confirmed - e.deaths) * 0.7);
    e.active = Math.round((e.confirmed - e.deaths) * 0.3);
    return e;
};
