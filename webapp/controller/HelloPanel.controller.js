sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.quickstart.controller.HelloPanel", {
      onSayHelloButtonPress: function () {
        // alert("Hello World");
        const sText = this.getView()
          .getModel("i18n")
          .getResourceBundle()
          .getText("helloMsg", ["0", "1", 2, "Jimit"]);

        console.log(sText);
        MessageToast.show("Hello World From Message Toast");
      },

      async onOpenDialogButtonPress() {
        //Create Dialog Lazily
        this.oDialog ??= await this.loadFragment({
          name: "ui5.quickstart.view.HelloDialog",
        });
        this.byId("idHelloDialog").open();
      },
      onCloseButtonPress() {
        this.byId("idHelloDialog").close();
      },
    });
  }
);
