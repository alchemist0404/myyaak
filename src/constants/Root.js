export const Root = {
  baseurl:'http://capp.strandwebsites.com/contractor_app/index.php/',
  // baseurltherapy:'https://therapytracker.net/admin/therepy_api/',
  // Authorization:'Basic YWRtaW46MTIzNA==',
  // xapikey:'test@123',
  // apiPass:'1234'

  //*End URL
  login_EndURL:'web_service/login',
  forgetpassword_EndURL:'web_service/forgot_password',
  support_FAQ_EndURL:'web_service/supportFaqDetails',
    

  /* Attorney End URL*/
  attorney_signup_EndURL:'web_service/contractor_registration',
  attorney_profileDetail_EndURL:'web_service/contractor_profile_details',
  attorney_DeleteAccount_EndURL:'web_service/delete_contractor_record',
  attorney_UpdatePassword_EndURL:'web_service/change_contractor_password',
  attorney_updateProfile_EndURL:'web_service/update_contractor_profile',
  attorney_messageList_EndURL:'web_service/messageList',
  attorney_chatHistory_EndURL:'web_service/chatHistory',
  attorney_sendMessage_EndURL:'web_service/messageInformation',
  attorney_Myrequest_EndURL:'web_service/attorneyUpcomingOrPast',
  attorney_pendingRequestLoad_EndURL:'web_service/requestList',

  /* Client End URL*/
  client_signup_EndURL:'web_service/client_registration',
  client_getRequestType_EndURL:'web_service/getCategories',
  client_fetchCardsData_EndURL:'web_service/cardList',
  client_DefaultCard_EndURL:'Web_service/default_card',
  client_DeleteCard_EndURL:'Web_service/delete_card',
  client_AddCard_EndURL:'Web_service/payment',
  client_profileDetail_EndURL:'web_service/client_profile_details',
  client_DeleteAccount_EndURL:'web_service/delete_client_record',
  client_UpdatePassword_EndURL:'web_service/change_client_password',
  client_updateProfile_EndURL:'web_service/update_client_profile',
  client_MyRequestLoad:'web_service/upcomingOrpast',
}