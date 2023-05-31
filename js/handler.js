AFRAME.registerComponent("markerhandler",{
  init: async function(){
      this.el.addEventListener("markerFound", ()=>{
          console.log("Marker FOUND");
          this.handleMarkerFound();
      })

      this.el.addEventListener("markerLost",()=>{
          console.log("Marker LOST");
          this.handleMarkerLost();
      })
  },
  handleMarkerFound: function (){
      var buttonDiv = document.getElementById("button-div") ;
      buttonDiv.style.display = "flex";
      
      var orderSummaryButton = document.getElementById("order-summary-button")
      orderSummaryButton.addEventListener("click", ()=>{
          swal({
            icon:"warning",
            title:"Order Summary",
            text:"Work in progres"
          });
      });

      var orderButton = document.getElementById("order-button");
      orderButton.addEventListener("click", ()=>{
          swal({
            icon: "https://i.imgur.com/4NZ6uLY.jpg",
            title:"Thanks for Order!!",
            text:"Your order will be served soon at your table",
            timer: 2000,
            button: false
          });
      });
  },
  handleMarkerLost: function (){
      var buttonDiv = document.getElementById("button-div") ;
      buttonDiv.style.display = "none";
  },
})