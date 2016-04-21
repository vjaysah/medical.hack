sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oDialog;
	var costDialog;
	var that;
	return Controller.extend("medicalHack.controller.V2", {

		onInit: function() {
			that = this;
			this.byId("mainPage").addStyleClass("mainPage");
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("");
		},
		showCold : function(){
			console.log("msg");
			this.getRouter().navTo("V8",{
				Problem : "Cold"
			});
		}
	});

});