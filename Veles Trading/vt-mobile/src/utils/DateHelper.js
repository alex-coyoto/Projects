export default class DateHelper{
    static formatDate(date){
        return date.toTimeString().split(" ")[0];
    }
}