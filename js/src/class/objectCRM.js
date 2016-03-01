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
		this.initMainCell();
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

		this.dhxLayout.cells("b").setText("Post");
		this.dhxLayout.cells("b").hideHeader();

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

	this.initMainCell = function () {
		this.mainTab = this.dhxLayout.cells("b").attachTabbar({
			align: "left",
			mode: "top",
			tabs: [
				{id: "postsList", text: "Danh sách bài viết", active: true},
				{id: "a2", text: "Danh sách Page"}
			]
		});
		this.postslistGrid = this.mainTab.tabs("postsList").attachGrid();
		this.postslistGrid.setImagePath("imgs/");
		this.postslistGrid.setHeader("Sales,Book Title,Author,Price,In Store,Shipping,Bestseller,Date of Publication");
		this.postslistGrid.setInitWidths("50,150,120,80,80,80,80,200");
		this.postslistGrid.setColAlign("right,left,left,right,center,left,center,center");
		this.postslistGrid.setColTypes("dyn,ed,txt,price,ch,coro,ra,ro");
		this.postslistGrid.setColSorting("int,str,str,int,str,str,str,date");
		this.postslistGrid.getCombo(5).put(2, 2);
		this.postslistGrid.init();
		this.postslistGrid.load("templates/xml/grid.xml");
	};
}
