/**
 *  @project: CRM_CLIENT_WEB
 *  @uthor: hieunc.
 *  @created 02/03/2016.
 */

function crmMainTab(dhxLayoutObject) {
	"use strict";
	var that = this;

	this.init = function () {
		this.tabToolBar = dhxLayoutObject.attachToolbar();
		this.tabToolBar.loadStruct("templates/PostListTabToolbar.json", function () {
		});
		this.tabToolBar.setIconSize(24);

		this.tabBar = dhxLayoutObject.attachTabbar({
			align: "left",
			mode: "top",
			tabs: [
				{id: "postsList", text: "Danh sách bài viết", active: true},
				{id: "fbPagesList", text: "Danh sách trang"},
				{id: "fbGroupsList", text: "Danh sách Nhóm"}
			]
		});
		this.postslistGrid = this.tabBar.tabs("postsList").attachGrid();
		this.postslistGrid.setImagePath("imgs/");
		this.postslistGrid.setHeader("Sales,Book Title,Author,Price,In Store,Shipping,Bestseller,Date of Publication");
		this.postslistGrid.setInitWidths("72,150,120,80,80,80,80");
		this.postslistGrid.setColAlign("right,left,left,right,center,left,center,left");
		this.postslistGrid.setColTypes("dyn,ed,txt,price,ch,coro,ra,ro");
		this.postslistGrid.setColSorting("int,str,str,int,str,str,str,date");
		this.postslistGrid.getCombo(5).put(2, 2);
		this.postslistGrid.init();
		this.postslistGrid.load("templates/xml/grid.xml");
	};

}
