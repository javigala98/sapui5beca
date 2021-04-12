sap.ui.define([
    "com/everis/myApp2/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    var oView, oController;

    return Controller.extend("com.everis.myApp.controller.MainView", {

      onInit: function() {
        oView       = this.getView();
        oController = this.getView().getController();
      },

      onAfterRendering: function() {
        oController.setDataFromNorthwindApiToTableModel();
      },

      setDataFromNorthwindApiToTableModel: function() {

        oView.getModel('oModelNorthwind').read('/Orders', {
          success: function (response) {
            oView.setModel( new JSONModel(response), 'NorthWindData' );
          },
          error: function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        });

      }

    });
});
