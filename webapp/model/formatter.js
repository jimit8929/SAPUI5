sap.ui.define([], function () {
  "use strict";

  return {
    statusText: function (sStatus) {
      // This function is called with the controller as context when used with formatter binding
      // Access the resource bundle through the controller's owner component
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();

      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
  };
});
