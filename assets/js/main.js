const vtbMessenger = require('vtb-messenger');

class MyCustomVTB {

    constructor() {
      this.$title = document.querySelector('#title');
      this.$proposal = document.querySelector('#proposal');

      this.vtbInit();
    }

    vtbInit()
    {
      vtbMessenger.init();

      window.vtb.addEventListener('vtbData', (msg) => {
        console.log('MINIWEBSITE: vtbData', msg.detail);
        this.buidApp(msg.detail);
      });

      let event = new CustomEvent("vtbReady");
      window.vtb.dispatchEvent(event);
    }


    buidApp(itinerary)
    {
      this.$title.value = itinerary.title;
      this.$title.setAttribute('data-vtbobjectid', itinerary.vtbObjectId);

      this.$proposal.value = itinerary.TSOrder.texts.proposal;
      this.$proposal.setAttribute('data-vtbobjectid', itinerary.TSOrder.texts.vtbObjectId);
      
      console.log('isLivePreview', vtbMessenger.isLivePreview);
      if(vtbMessenger.isLivePreview)
        this.edit();
    }


    edit()
    {
      console.log('INIT EDIT');
      let inputs = document.querySelectorAll('input, textarea');
      if(!inputs) return;

      inputs.forEach(element => {
        element.addEventListener('change', (e) => {
            console.log('MINIWEBSITE: vtbTextChanged');
            let event = new CustomEvent("vtbTextChanged", { detail: {
              propertyName: e.target.getAttribute('name'),
              newValue: e.target.value,
              vtbObjectId: e.target.getAttribute('data-vtbobjectid'),
            }});
            window.vtb.dispatchEvent(event);
        });
      })
    }
    
}
new MyCustomVTB();