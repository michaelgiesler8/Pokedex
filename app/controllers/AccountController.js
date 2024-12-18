import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawAccount() {
  if (!AppState.account) return;

  const accountDetails = document.getElementById("account-details");
  if (!accountDetails) {
    console.error("Element with ID 'account-details' not found");
    return;
  }
  setHTML('account-details', AppState.account.AccountCardTemplate)
  setHTML('account-form', AppState.account.AccountFormTemplate)
}

export class AccountController {
  constructor() {
    AppState.on('account', _drawAccount)
    _drawAccount()
  }

  async updateAccount() {
    try {
      event.preventDefault()
      const form = event.target
      const updateData = getFormData(form)
      await accountService.editAccount(updateData)
    } catch (error) {
      Pop.error(error)
    }
  }

}
