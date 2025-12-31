sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.quickstart.controller.App", {
    onShowHello: function () {
      alert("Hello World");
    },
  });
});
