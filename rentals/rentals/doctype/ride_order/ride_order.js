// Copyright (c) 2026, mcdave umoh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm){
        console.log("running load...");
    },
    setup(frm){
        console.log("setup....");
    },
	refresh(frm) {
        console.log("Refresh")

        if(frm.doc.status !== "Accepted"){
            frm.add_custom_button( "Accept", () => {
            // status = Accepted
            frm.set_value("status", "Accepted");
            // save the form
            frm.save();
        }

        )
        }
        f
	},
});
