sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oDialog;
	var that;
	return Controller.extend("medicalHack.controller.V4", {

		onInit: function() {
			that = this;
			this.initializeDialog();
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("");
		},
		initializeDialog: function() {
			var oLabel1 = new sap.m.Text({
				text: "My baby is"
			});
			var oLabel2 = new sap.m.Text({
				text: "Enter your mobile no"
			});
			var oLabel3 = new sap.m.Text({
				text: "months old"
			});
			var oInput = new sap.m.Input({
				id: "",
				placeholder: "Mobile no"
			});
			var oInputM = new sap.m.Input({
				id: "",
				width: "100px",
				placeholder: "Months"
			});
			var hLay1 = new sap.m.Bar({
				width: "100%",
				contentLeft: oLabel1,
				contentMiddle: [oInputM, oLabel3]
				// contentRight: oLabel3 
			});
			var hLay2 = new sap.m.Bar({
				width: "100%",
				contentLeft: oLabel2,
				contentRight: oInput
			});
			var vLayout = new sap.ui.layout.VerticalLayout({
				width: "100%",
				content: [
					hLay1,
					hLay2
				]
			});
			var button = new sap.m.Button({
				text: "Subscribe",
				press: function() {
					oDialog.close();
					var msg = 'Successfully subscribed to the alerts';
					new sap.m.MessageToast.show(msg);
				},
				type: "Accept"
			});
			var buttonC = new sap.m.Button({
				text: "Cancel",
				press: function() {
					oDialog.close();
				},
				type: "Reject"
			});

			oDialog = new sap.m.Dialog({
				title: "Please fill details",
				buttons: [button, buttonC],
				content: [vLayout]
			});
		},
		subscribeUser: function() {
			oDialog.open();
		},

		findCost: function() {
			this.getRouter().navTo("V9");
		}
	});

});