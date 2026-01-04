sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.quickstart.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      //Call the Init Function of the Parent
      init() {
        UIComponent.prototype.init.apply(this, arguments);

        //Set the DataModel
        const oData = {
          recipient: {
            name: "World",
          },
          course: {
            name: "SAPUI5",
          },
        };

        const data = new JSONModel(oData);
        this.setModel(data, "dataModel");

        //Set the i18n Model
        const i18nModel = new ResourceModel({
          bundleName: "ui5.quickstart.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");

        //Create the views based on the url
        this.getRouter().initialize();
      },
    });
  }
);
