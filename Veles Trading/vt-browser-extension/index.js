const priceSection = document.querySelector('#price-value');
const errorSection = document.querySelector('#error-value');
const dateSection = document.querySelector('#date-value');
const reloadButton = document.querySelector('#reload-button');

const dataWorker = new Worker("./dataWorker.js");
dataWorker.postMessage({type: 'start'});

dataWorker.addEventListener('message', e => {
    e.preventDefault();
    if(e.data.error){
        errorSection.innerText = e.data.error;
        priceSection.innerText = 'Something went wrong...';
        dataWorker.postMessage({type: 'stop'});
    }
    else{
        priceSection.innerText = new Intl.NumberFormat("en", {maximumFractionDigits: 10}).format(e.data.price);
        dateSection.innerText =  new Intl.DateTimeFormat("ru", {timeStyle: "medium"}).format(e.data.timestamp);
    }
});

reloadButton.addEventListener('click', (e) => {
    errorSection.innerText = '';
    dataWorker.postMessage({type: 'update'});
});