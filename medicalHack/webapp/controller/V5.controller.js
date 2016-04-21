sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("medicalHack.controller.V5", {
		onInit: function() {
			this.byId("mainPage").addStyleClass("mainPage");
			var oModel = new sap.ui.model.json.JSONModel();
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.getRoute("V5").attachPatternMatched(this._onObjectMatched, this);
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/vaccines.json")); 
			this.getView().setModel(oModel);
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("");
		}
	});

});