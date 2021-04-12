sap.ui.define([
    "com/everis/myApp/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    var oView, oController;

    return Controller.extend("com.everis.myApp.controller.MainView", {

      onInit: function() {
        oView       = this.getView();
        oController = this.getView().getController();
      },

      onAfterRendering: async function() {
        oView.setModel( new JSONModel(await oController.getDataFromNowrthwindAPI()), 'NorthWindData' );
      },

      getDataFromNowrthwindAPI: async function() {
        return await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json')
          .then(response => response.json())
          .then(data => data);
      }

    });
});
