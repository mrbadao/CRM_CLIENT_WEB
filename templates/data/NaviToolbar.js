/**
 * Created by HieuNguyen on 2/25/2016.
 */
myToolbar = new dhtmlXToolbarObject({
	parent:"a_toolbar",
	items:[
		{id: "new", type: "buttonSelect", text: "New", img: "new.gif",
			img_disabled: "new_dis.gif"},
		{id: "sep1", type: "separator" },
		{id: "open", type: "button", img: "open.gif"},
		{id: "autosave", type: "buttonTwoState", text: "Autosave", img: "save.gif"},
		{id: "inp", type: "buttonInput", text: "Input"},
		{id: "sld", type: "slider", text_min: "10 MBit", text_max: "100 MBit"},
		{id: "info", type: "text", text: "dhtmlxToolbar Demo"}
	]
});