sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oDialog;
	var costDialog;
	var that;
	var docDialog;
	return Controller.extend("medicalHack.controller.V3", {

		onInit: function() {
			that = this;
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/vaccines.json"));
			this.getView().setModel(oModel);
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
				text: "I am "
			});
			var oLabel2 = new sap.m.Text({
				text: "Enter your mobile no"
			});
			var oLabel3 = new sap.m.Text({
				text: "Month Pregnant"
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
				id: "h1",
				width: "100%",
				contentLeft: oLabel1,
				contentMiddle: [oInputM, oLabel3]
				// contentRight: oLabel3 
			});
			var hLay2 = new sap.m.Bar({
				id: "h2",
				width: "100%",
				contentLeft: oLabel2,
				contentRight: oInput
			});
			var vLayout = new sap.ui.layout.VerticalLayout({
				id: "vLay",
				width: "100%",
				content: [
					hLay1,
					hLay2
				]
			});
			var button = new sap.m.Button({
				id: "startBtn",
				text: "Subscribe",
				press: function() {
					oDialog.close();
					var msg = 'Successfully subscribed to the alerts';
					new sap.m.MessageToast.show(msg);
				},
				type: "Accept"
			});
			var buttonC = new sap.m.Button({
				id: "cancelBtn",
				text: "Cancel",
				press: function() {
					oDialog.close();
				},
				type: "Reject"
			});

			oDialog = new sap.m.Dialog({
				id: "dialog",
				title: "Please fill details",
				buttons: [button, buttonC],
				content: [vLayout]
			});
			var allianzBtn = new sap.m.Button({
				text: "Allianz",
				type: "Transparent",
				press: function() {
					that.getRouter().navTo("V7", {
						Insurance: "ALLIANZ"
					});
				}
			});

			var licBtn = new sap.m.Button({
				text: "LIC",
				type: "Transparent",
				press: function() {
					that.getRouter().navTo("V7", {
						Insurance: "LIC"
					});
				}
			});
			var tataBtn = new sap.m.Button({
				text: "Tata AIG",
				type: "Transparent",
				press: function() {
					that.getRouter().navTo("V7", {
						Insurance: "TATA"
					});
				}
			});
			var oBar2 = new sap.m.Bar({
				visible: false,
				contentMiddle: [allianzBtn, licBtn, tataBtn]
			});

			var btn1 = new sap.m.Button({
				id: "ButA",
				text: "I am Insured",
				press: function() {
					oBar2.setVisible(true);
				},
				type: "Emphasized"
			});
			var btn2 = new sap.m.Button({
				text: "I am not Insured",
				press: function() {
					that.getRouter().navTo("V7", {
						Insurance: "NONE"
					});
				},
				type: "Emphasized"
			});

			var oBar = new sap.m.Bar({
				contentMiddle: [btn1, btn2]
			});

			costDialog = new sap.m.Dialog({
				id: "costDialog",
				title: "Please select",
				content: [oBar, oBar2]
			});
			var xmlFrag = new sap.m.Text({
				text: "Doctor Info"
			});
			var buttonClose = new sap.m.Button({
				text: "Close",
				press: function() {
					docDialog.close();
				},
				type: "Reject"
			});

			var oLabel4 = new sap.m.Text({
				text: "Doctor Name : "
			});
			var oLabel5 = new sap.m.Text({
				text: "Address : "
			});
			var oLabel6 = new sap.m.Text({
				text: "Clinic Timing :"
			});
			var oText = new sap.m.Text({
				id: "",
				text: "Mrs. Saritha V"
			});
			var oText2 = new sap.m.Text({
				id: "",
				text: "Aastha Chikitsalya, Near Gram Panchayat"
			});
			var oText3 = new sap.m.Text({
				id: "",
				text: "Mon - Sat 8 AM to 6 PM"
			});
			var bar1 = new sap.m.Bar({
				width: "100%",
				contentLeft: oLabel4,
				contentMiddle: [oText]
				// contentRight: oLabel3 
			});
			var bar2 = new sap.m.Bar({
				width: "100%",
				contentLeft: oLabel5,
				contentRight: oText2
			});
			var bar3 = new sap.m.Bar({
				width: "100%",
				contentLeft: oLabel6,
				contentRight: oText3
			});
			docDialog = new sap.m.Dialog({
				id: "docDialog",
				title: "Doctor Info",
				content: [bar1, bar2,bar3],
				buttons: buttonClose
			});
		},
		subscribeUser: function() {
			oDialog.open();
		},

		findCost: function() {
			costDialog.open();
		},

		findDoc: function() {
			docDialog.open();
		}
	});

});