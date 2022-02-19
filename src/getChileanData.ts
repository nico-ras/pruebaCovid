export const getConfir = async (jwt) => {
    try {
        const response = await fetch('http://localhost:3000/api/confirmed', {

        method: 'GET',
        headers: {
            Authorization: `Bearer ${jwt}`
        }
        })

        const {data} = await response.json();
        
        //if (data) {
            //fillFeed(data, "imgesDiv", counter);
           // hide(form);
            //show(divFeed);
            
        //}
        return data
    } catch (err) {
        localStorage.clear()
        console.error(`Error: ${err}`)
    }
}

export const getDeaths = async (jwt) => {
    try {
        const response = await fetch('http://localhost:3000/api/deaths', {

        method: 'GET',
        headers: {
            Authorization: `Bearer ${jwt}`
        }
        })

        const {data} = await response.json();
        
        //if (data) {
            //fillFeed(data, "imgesDiv", counter);
           // hide(form);
            //show(divFeed);
            
        //}
        return data
    } catch (err) {
        localStorage.clear()
        console.error(`Error: ${err}`)
    }
}

export const getReco = async (jwt) => {
    try {
        const response = await fetch(' http://localhost:3000/api/recovered', {

        method: 'GET',
        headers: {
            Authorization: `Bearer ${jwt}`
        }
        })

        const {data} = await response.json();
        
        //if (data) {
            //fillFeed(data, "imgesDiv", counter);
           // hide(form);
            //show(divFeed);
            
        //}
        return data
    } catch (err) {
        localStorage.clear()
        console.error(`Error: ${err}`)
    }
}

