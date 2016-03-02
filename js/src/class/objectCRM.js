/**
 * Created by HieuNguyen on 2/25/2016.
 */

function objectCRM(parentNode) {
	"use strict";
	var that = this;
	crmConfig.screenType.parent = parentNode;

	this.init = function () {
		that.initLayout(crmConfig.screenType);
		that.initToolbar();
		this.initFacebookAccountTree();
		this.initColumns();
	};

	this.initLayout = function (screenType) {
		if (this.dhxLayout != null) {
			this.dhxLayout.unload();
		}
		this.dhxLayout = new dhtmlXLayoutObject(screenType);
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

	this.initColumns = function () {
		this.mainTab = new crmMainTab(this.dhxLayout.cells("b"));
		this.mainTab.init();
	};
}
