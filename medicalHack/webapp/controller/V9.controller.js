sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oArgs,that;
	return Controller.extend("medicalHack.controller.V9", {
		onInit: function() {
			that = this;
			this.byId("mainPage").addStyleClass("mainPage");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/baby.json"));
			this.getView().setModel(oModel);

		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("V4");
		}
	});

});