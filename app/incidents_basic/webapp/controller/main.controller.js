sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel"
],
function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("ns.incidentsbasic.controller.main", {
        onInit: function () {
            // Create OData model with correct parameters
            const oModel = new ODataModel({
                serviceUrl: "/odata/v4/processor/",
                synchronizationMode: "None"
            });
            this.getView().setModel(oModel);
        }
    });
});
