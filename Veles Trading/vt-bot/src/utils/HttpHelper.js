export default class HttpHelper{
    static async getValue(){
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
}