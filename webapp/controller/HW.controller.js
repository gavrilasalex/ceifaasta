sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("org.ubb.hw.controller.HW", {
      onShowHello : function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			alert("Hello World");
			/* eslint-enable no-alert */
		}
    });
 });