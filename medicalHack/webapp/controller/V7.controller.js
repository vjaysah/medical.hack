sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oArgs,that;
	return Controller.extend("medicalHack.controller.V7", {
		onInit: function() {
			that = this;
			this.byId("mainPage").addStyleClass("mainPage");
			var oModel = new sap.ui.model.json.JSONModel();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("V7").attachPatternMatched(this._onObjectMatched, this);
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/hospital.json"));
			this.getView().setModel(oModel);

		},
		_onObjectMatched: function(oEvent) {
			oArgs = oEvent.getParameter("arguments").Insurance;
			that.byId("table").getBinding("rows").filter();
			if (oArgs !== "NONE") {
				var oFilter = new sap.ui.model.Filter("Insurance",
						sap.ui.model.FilterOperator.EQ, oArgs);
				that.byId("table").getBinding("rows").filter(oFilter);
			}
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("V3");
		}
	});

});