

export const dataTotal = async () => {
    try {
        const response =  await fetch('http://localhost:3000/api/total')
        const {data} = await response.json();
        return data
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}

