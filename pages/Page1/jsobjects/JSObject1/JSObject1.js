export default {

	isValidInput(){
		if(!name_input.text||!username_input.text||!email_input.text) return false;
		return true;
	},

	async add_user_btnonClick() {
		if (!this.isValidInput()) {
			showAlert("Please fill in the Name, Username, and Email fields.", "warning");
			return;
		}

		try {
			const result = await addUser.run();
			if (result) {
				showAlert("User added successfully!", "success");
			} else {
				showAlert("Failed to add user. Please try again.", "error");
			}
		} catch (error) {
			console.error("Error during user addition:", error);
			showAlert("An unexpected error occurred. Please try again.", "error");
		}
	}

}