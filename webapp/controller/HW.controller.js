sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
 ], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("org.ubb.hw.controller.HW", {
      onInit : function () {
        // set data model on view
        var oData = {
           recipient : {
              name : "World"
           }
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
     },
      onShowHello : function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			alert("Hello World");
			/* eslint-enable no-alert */
		}
    });
 });