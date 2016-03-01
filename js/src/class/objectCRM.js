/**
 * Created by HieuNguyen on 2/25/2016.
 */

function objectCRM() {
	"use strict";
	var that = this;

	this.init = function () {
		that.initLayout({pattern: "3W"});
		this.initToolbar();
		this.initFacebookAccountTree();
	};

	this.initLayout = function (screenType) {
		if (this.dhxLayout != null) {
			this.dhxLayout.unload();
		}

		this.dhxLayout = new dhtmlXLayoutObject(document.body, screenType['pattern']);
		this.dhxLayout.setSeparatorSize(1);
		this.dhxLayout.cells("a").setText("<i class='fa fa-facebook-official'></i> facebook");
		this.dhxLayout.cells("a").setWidth(350);
		this.dhxLayout.cells("a").attachTree();

		this.dhxLayout.cells("c").setText("Page");
		this.dhxLayout.cells("c").setWidth(350);
	};

	this.initToolbar = function () {
		this.toolbar = this.dhxLayout.attachToolbar();
		this.toolbar.loadStruct("templates/NaviToolbar.json", function () {
		});
		this.toolbar.setIconSize(24);
	};

	this.initFacebookAccountTree = function () {

		this.accountTree = this.dhxLayout.cells("a").attachTree();
		this.accountTree.setImagePath("imgs/icon/tree/");
		this.accountTree.load("templates/tree.json", function () {
		}, "json");
	};
}
