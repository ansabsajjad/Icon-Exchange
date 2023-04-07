import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy"
import delete_facility from "./Delete Facility.cy"
import Delete_Icon_user from "./Delete_Icon_user.cy"
import Delete_Roles from "./Delete_Roles.cy"
import edit_facility from "./Edit Facility.cy"
import Edit_Roles from "./Edit Role.cy"
import Add_Icon_Exchange_Facilities from "./Facilities.cy"
import Icon_Users from "./icon-users.cy"
import Icon_Exchange_Login from "./Login.cy"
import Provider_SignIN from "./Provider_SignIn.cy"
import Provider_Signup from "./Provider_signup.cy"
import Create_Icon_Roles from "./Roles.cy"
import Facility_Search from "./Facilities_Search.cy"
import Icon_Users_Search from "./Icon_User_Search.cy"
import Icon_Role_Search from "./Role_Search.cy"
import Add_Provider from "./Add_Provider.cy"
import Provider_Search from "./Provider_Search.cy"
import Delete_Provider from "./Delete_Provider.cy"
import View_Provider from "./View_Provider.cy"
import Assign_Facility from "./Assign_Facility.cy"
import Add_Pay_Rates from "./Add_Pay_Rates.cy"
import Pay_Rate_Search from "./Pay_Rate_Search.cy"
import Add_Malpractice from "./Add_Malpractice.cy"
import Malpractice_Search from "./Malpractice_search.cy"
import Pay_Rate_View from "./Pay_Rate_View.cy"
import Edit_Pay_Rate from "./Edit_Pay_rate.cy"
import Delete_Pay_Rate from "./Delete_Pay_Rate.cy"
import Update_Malpractice from "./Update_Malpractice.cy"
import Provider_Expense from "./Provider_Expense.cy"
import Provider_Login from "./Provider_Login.cy"
import View_Provider_Expense from "./View_Provider_Expense.cy"
import Edit_Provider_Expense from "./Edit_Provider_Expense.cy"
import Provider_Expense_Search from "./Provider_Expense_Search.cy"
import Provider_test from "./Provider_Expense_Conditions.cy"


describe("let's Automate Icon Exchange.", function(){
  
    Icon_Exchange_URL()
    Icon_Exchange_Login() 
    
    // Add_Provider()
    // Provider_Search()
    // View_Provider() 
    // Delete_Provider()
    // Assign_Facility()
 
    // Add_Icon_Exchange_Facilities() 
    // edit_facility()
    // delete_facility()
    // Facility_Search()

    // Delete_Icon_user()
    // Icon_Users()
    // Icon_Users_Search()


    // Create_Icon_Roles()
    // Icon_Role_Search()
    // Edit_Roles()
    // Delete_Roles()

    // Provider_Signup()
    // Provider_SignIN()

    // Add_Pay_Rates()
    // Pay_Rate_Search()
    // Pay_Rate_View()
    // Edit_Pay_Rate()
    // Delete_Pay_Rate()

    //Add_Malpractice()
    // Malpractice_Search()
    // Update_Malpractice()

    // Provider_Login()
    // Provider_Expense()
    // View_Provider_Expense()
    // Edit_Provider_Expense()
    // Provider_Expense_Search()
    Provider_test()
})

