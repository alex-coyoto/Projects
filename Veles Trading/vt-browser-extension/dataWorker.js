
let listener = undefined;
const getPrice = async() => {
    try{
        const response = await fetch(process.env.URL, {
            method: 'GET',
            headers: {"Accept": "application/json"}
        });
        if(!response?.ok){
            throw new Error(`${response.status} (${response.statusText})`);
        }
        const marketData = await response.json();
        return marketData.find(e => e.symbol === "BTC/USDT")["24h_close"];
    }
    catch(err){
        throw err;
    }
}

const listen = () => {
    getPrice()
        .then(price => self.postMessage({price, timestamp: new Date()}),
            err => self.postMessage({error: err.message}));
}

self.addEventListener("message", e => {
    switch(e.data.type){
        case "stop":
            clearInterval(listener);
            break;
        case "update":
            clearInterval(listener);
        case "start":
            listen();
            listener = setInterval(() => {listen(); console.log('resolved')}, 10000);
            break;
    }
  });