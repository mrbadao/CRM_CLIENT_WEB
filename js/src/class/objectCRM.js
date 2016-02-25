/**
 * Created by HieuNguyen on 2/25/2016.
 */

function objectCRM() {
	"use strict";
	var that = this;

	this.init = function () {
		that.initLayout({pattern: "3W"});
	};

	this.initLayout = function (screenType) {
		if (this.dhxLayout != null) {
			this.dhxLayout.unload();
		}

		this.dhxLayout = new dhtmlXLayoutObject(document.body, screenType['pattern']);
		this.dhxLayout.cells("a").attachTree();
	};
}
