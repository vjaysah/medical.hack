var videoSrc;
var oModel = new sap.ui.model.json.JSONModel();
var jModel = new sap.ui.model.json.JSONModel();
var oOverlayContainer;
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("medicalHack.controller.V5", {
		onInit: function() {
			this.byId("mainPage").addStyleClass("mainPage");

		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		goBack: function() {
			this.getRouter().navTo("");
		},
		handleKidneyPress: function() {
			videoSrc = "https://www.youtube.com/embed/HJrpkEhSsgo";
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/kidneysurgery.json"));
			jModel.loadData(jQuery.sap.getModulePath("medicalHack", "/surgeryinsurance.json"));
			this.openView();
		},
		handleHeartPress: function() {
			videoSrc = "https://www.youtube.com/embed/xeMEAmwzJVw";
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/heartsurgery.json"));
			jModel.loadData(jQuery.sap.getModulePath("medicalHack", "/surgeryinsurance.json"));
			this.openView();
		},
		handleEyePress: function() {
			videoSrc = "https://www.youtube.com/embed/q9Txm5Bf89E";
			oModel.loadData(jQuery.sap.getModulePath("medicalHack", "/eyesurgery.json"));
			jModel.loadData(jQuery.sap.getModulePath("medicalHack", "/surgeryinsurance.json"));
			this.openView();
		},
		openView: function() {
			var oTable = new sap.ui.table.Table({
				title: "Operation Cost",
				visibleRowCount: 5,
				width: "90%"
			});

			//Define the columns and the control templates to be used
			var oColumn = new sap.ui.table.Column({
				label: new sap.m.Label({
					text: "Hospital Name"
				}),
				template: new sap.ui.commons.TextView().bindProperty("text", "Hospital"),
				width: "200px"
			});
			oTable.addColumn(oColumn);
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Surgery Cost"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "Surgerycost"),
				width: "100px"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Under Govt Plan"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "UnderGovtplan"),
				width: "75px"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Distance"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "UnderGovtplan")
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Rating"
				}),
				template: new sap.ui.commons.RatingIndicator().bindProperty("value", "Ratingoutof5")
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Doctor"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "Doctor")
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Best mode of Transport"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "BestmodeofTransport")
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Nearest Hotel"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "NearestHotel")
			}));

			//Create a model and bind the table rows to this model
			oTable.setModel(oModel);
			oTable.bindRows("/");

			var oTable2 = new sap.ui.table.Table({
				title: "Insurance Policies",
				visibleRowCount: 5,
				width: "30%"
			});

			//Define the columns and the control templates to be used
			var oColumn2 = new sap.ui.table.Column({
				label: new sap.m.Label({
					text: "Insurance plans"
				}),
				template: new sap.ui.commons.TextView().bindProperty("text", "Insuranceplans"),
				width: "100px"
			});
			oTable2.addColumn(oColumn2);
			oTable2.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Total cover"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "Totalcover"),
				width: "100px"
			}));
			oTable2.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({
					text: "Insurance premium"
				}),
				template: new sap.ui.commons.TextField().bindProperty("value", "Insurancepremium"),
				width: "75px"
			}));
			//Create a model and bind the table rows to this model
			oTable2.setModel(jModel);
			oTable2.bindRows("/");

			var oVideo = new sap.ui.core.HTML({
				content: '<iframe width="600" height="340" style="margin-right:100px; margin-left:100px" src="' + videoSrc +
					'" frameborder="0" allowfullscreen="true"></iframe>'
			});

			var hLayout = new sap.ui.layout.HorizontalLayout({
				content: [oVideo, oTable2]
			});
			var oLayout = new sap.ui.layout.VerticalLayout({
				content: [oTable, hLayout]
			});

			oOverlayContainer = new sap.ui.ux3.OverlayContainer({
				content: [oLayout]
			});

			oOverlayContainer.open();

		}
	});

});