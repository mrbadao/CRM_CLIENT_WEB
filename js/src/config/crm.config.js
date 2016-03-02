/**
 *  @project: CRM_CLIENT_WEB
 *  @uthor: hieunc.
 *  @created 02/03/2016.
 */
var crmConfig = (function () {
	return {
		screenType: {
			parent: null,
			pattern: "3W",
			skin: "dhx_skyblue",
			cells: [
				{
					id: "a",
					text: "<i class='fa fa-facebook'></i> Tài khoản facebook",
					header: true,
					width: 350
				},
				{
					id: "b",
					header: false
				},
				{
					id: "c",
					text: "Text",
					header: false,
					width: 350
				}
			]
		}
	}
}());