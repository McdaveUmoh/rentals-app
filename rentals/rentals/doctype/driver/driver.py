# Copyright (c) 2026, mcdave umoh and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_save(self):
		self.full_name = f"{self.first_name} {self.last_name}"

	def send_alert(self):
		print("sending message")

# API KEY: df598cd081e700a
# API SECRET: d82f16800c2ef1f