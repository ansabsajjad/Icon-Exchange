/// <reference types="Cypress" /> 

import Deactivate_BF from "./Deactivate.cy"
import Add_Brokerage_Firm from "./Add_BrokerageFirm.cy"
import Edit_Brokerage_Firm from "./Edit_BrokerageFirm.cy"
import SA_Properties from "./Properties.cy"
import Super_Admin_Login from "./Super_Admin_login.cy"
import Activate_BF from "./Activate.cy"
import Logout from "./Logout.cy"



describe("let's Automate Fortra.", function(){
    Super_Admin_Login()
     SA_Properties()
    Add_Brokerage_Firm()
    Edit_Brokerage_Firm()
    Deactivate_BF()
    Activate_BF()
    Logout()
})