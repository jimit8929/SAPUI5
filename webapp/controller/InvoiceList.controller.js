sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.quickstart.controller.InvoiceList", {
      formatter: formatter,
      onInit() {
        const oViewmodel = new JSONModel({ currency: "EUR" });
        this.getView().setModel(oViewmodel, "view");
      },

      onSearchFieldInvoicesSearch(oEvent) {
        //Build Filter Array
        const aFilter = [];

        const sQuery = oEvent.getParameter("query");

        if (sQuery) {
          aFilter.push(new Filter("ProductName", FilterOperator.Contains));
        }

        //Filter Binding
        const oList = this.byId("idInvoicesList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
