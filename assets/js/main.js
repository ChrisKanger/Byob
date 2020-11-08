const vtbDataTransformer = require('@sitespirit/vtb-transformer');

console.log('tst');
class MyCustomVTB {

    constructor() {
        this.getItinerary();
        console.log('wtf');
    }

    getItinerary()
    {
        console.log('abc');
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = () => {
          if (oReq.readyState === 4) {
            this.itinerary = JSON.parse(oReq.response);
            this.buildPage();
          }
        }
      
        oReq.open("GET", 'assets/json/itinerary.json', true);
        oReq.send();
    }

    buildPage()
    {
        this.itinerary = vtbDataTransformer.transform(this.itinerary);
        console.log(this.itinerary);
    }
}

new MyCustomVTB();