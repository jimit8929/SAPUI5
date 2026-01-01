sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
  ],
  function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("ui5.quickstart.controller.InvoiceList", {
      formatter: formatter,
      onInit() {
        const oViewmodel = new JSONModel({ currency: "EUR" });
        this.getView().setModel(oViewmodel, "view");
      },
    });
  }
);
