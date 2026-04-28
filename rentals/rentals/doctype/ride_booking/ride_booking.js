// Copyright (c) 2026, mcdave umoh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},
    rate(frm){
        //recalculate the total
        frm.trigger("update_total_distance")
    },
    update_total_distance(frm){
        let total_d = 0
        for(let item of frm.doc.items) {
            total_d += item.distance
        }

        const amount = frm.doc.rate * total_d
        frm.set_value("total_amount", amount)
    }
});


frappe.ui.form.on ('Ride Booking Item', {
    refresh(frm){

    },
    distance(frm, cdt, cdn){
        frm.trigger("update_total_distance")
    },
    items_remove(frm){
        frm.trigger("update_total_distance")
    }
});