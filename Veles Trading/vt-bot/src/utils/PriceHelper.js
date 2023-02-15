import HttpHelper from "./HttpHelper";

export default class PriceHelper{
    static getCource(){
        return HttpHelper.getValue();
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
}