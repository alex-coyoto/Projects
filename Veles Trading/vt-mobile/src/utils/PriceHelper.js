import HttpHelper from "./HttpHelper";
import 'intl';
import 'intl/locale-data/jsonp/en';

export default class PriceHelper{
    static async getCource(){
        return await HttpHelper.getValue();
    }

    static convertBtcToUsdt(btcAmount, currentCourse){
        return btcAmount * currentCourse;
    }

    static convertUsdtToBtc(usdtAmount, currentCourse){
        return usdtAmount / currentCourse;
    }

    static formatPrice(price){
        return new Intl.NumberFormat("en", {maximumFractionDigits: 10}).format(price);
    }

    static getNumberFromString = data =>{
        if(data){
            const value = Number(data.replace(/,/, '.'));
            if(!isNaN(value) && value > 0 && value < 10e10 && data.match(/^[0-9]+([.,]?[0-9]+)?$/)) {
                return value;
            } 
        }
        return undefined;
    }
}