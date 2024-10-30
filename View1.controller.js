sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SBAProject.controller.View1", {
 onInit: function() {
            // Set the language to Arabic
            sap.ui.getCore().getConfiguration().setLanguage("ar");
        }
    });
});
