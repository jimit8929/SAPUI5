sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.quickstart.controller.App", {
      onInit: function () {
        const oData = {
          recipient: {
            name: "World",
          },
          course: {
            name: "SAPUI5",
          },
        };

        const data = new JSONModel(oData);
        this.getView().setModel(data, "dataModel");

        //set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "ui5.quickstart.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
        // alert("Hello World");
        const sText = this.getView()
          .getModel("i18n")
          .getResourceBundle()
          .getText("helloMsg", ["0", "1", 2, "Jimit"]);

        console.log(sText);
        MessageToast.show("Hello World From Message Toast");
      },
    });
  }
);
