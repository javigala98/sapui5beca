sap.ui.define([
    "com/everis/myApp2/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    // Definición de variables globales
    var oView, oController;

    return Controller.extend("com.everis.myApp.controller.MainView", {

      // Seteamos las variables globales para contener la vista y el controlador de la vista
      onInit: function() {
        oView       = this.getView();
        oController = this.getView().getController();
      },

      // Despues de que haya cargado la web, se ejecuta la llamada a la función 'setDataFromNorthwindApiToTableModel'
      onAfterRendering: function() {
        oController.setDataFromNorthwindApiToTableModel();
      },

      /**
       *  Obtenemos de la vista el modelo 'oModelNorthwind' el cual contiene el oModelData,
       *    se realiza la llamada a la función, y se setea la respuesta al modelo 'NorthWindData',
       *    en formato JSONModel, el cual esta bindeado al contenido de la tabla.
       */
      setDataFromNorthwindApiToTableModel: function() {

        oView.getModel("oModelNorthwind").read("/Orders", {
          success: function (response) {
            oView.setModel( new JSONModel(response), "NorthWindData" );
          },
          error: function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        });

      }

    });
});
