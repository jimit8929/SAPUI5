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
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        //Filter Binding
        const oList = this.byId("idInvoicesList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },

      //OnPress Controller for Lists
      onObjectListItemPress(oEvent) {
        const oItem = oEvent.getSource();
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail", {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext("invoice").getPath().substring(1)
          ),
        });
      },
    });
  }
);
