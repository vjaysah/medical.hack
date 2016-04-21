sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	var oDialog;
	return Controller.extend("medicalHack.controller.V1", {
		onInit: function() {
			this.byId("mainPage").addStyleClass("mainPage");
			// this.initializeDialog();
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goToV5: function() {
			this.getRouter().navTo("V5");
		},
		goToV2: function() {
			this.getRouter().navTo("V2");
		},
		goToV3: function() {
			this.getRouter().navTo("V3");
		},
		goToV4: function() {
			this.getRouter().navTo("V4");
		},
		goToV6: function() {
			this.getRouter().navTo("V6");
		},
		initializeDialog: function() {
			var oComboBox1 = new sap.m.ComboBox("ComboBox1");
			oComboBox1.setTooltip("language");
			oComboBox1.setEditable(true);
			oComboBox1.setValue("English");
			oComboBox1.setWidth("200px");
			var oItem = new sap.ui.core.ListItem("Country1");
			oItem.setText("English");
			oComboBox1.addItem(oItem);
			oItem = new sap.ui.core.ListItem("Country2");
			oItem.setText("\u0939\u093F\u0902\u0926\u0940");
			oComboBox1.addItem(oItem);
			oItem = new sap.ui.core.ListItem("Country3");
			oItem.setText("\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41");
			oComboBox1.addItem(oItem);
			oItem = new sap.ui.core.ListItem("Country4");
			oItem.setText("\u0C95\u0CA8\u0CCD\u0CA8\u0CA1");
			oComboBox1.addItem(oItem);
			var oLabel1 = new sap.m.Label({
				text: "Select a Language"
			});
			var oLabel2 = new sap.m.Label({
				text: "Enter your mobile no"
			});
			var oInput = new sap.m.Input({
				id: "",
				placeholder: "Mobile no"
			});
			var hLay1 = new sap.m.Bar({
				id: "h1",
				width: "100%",
				contentLeft: oLabel1,
				contentRight: oComboBox1
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
				text: "Start",
				press: function() {
					oDialog.close();
				},
				type: "Accept"
			});
			oDialog = new sap.m.Dialog({
				id: "dialog",
				title: "Please select language",
				buttons: [button],
				content: [vLayout]
			});
			oDialog.open();
		},
		/**
		 *@memberOf medicalHack.controller.V1
		 */
		changeLanguage: function(oControlEvent) {
			var key = oControlEvent.getParameters().id;
			var btn;
			if (key === "__xmlview1--hindi") {
				btn = "2";
			} else {
				btn = "1";
			}
			if (btn === "1") {
				this.byId("mainPage").setProperty("title", "Medical Buddy");
			} else if (btn === "2") {
				this.byId("mainPage").setProperty("title", "मेडिकल बंधु");
			} else {
				this.byId("mainPage").setProperty("title", "Medical Buddy");
			}
		}
	});
});