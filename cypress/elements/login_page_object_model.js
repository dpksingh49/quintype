export class Login{
    loginIcon = '[data-test-id="user-profile"]';
    name = "input[type = 'text']";
    email = 'input[type="email"]';
    emailInvalidMessage = '[data-testid="email-invalid"]';
    pass = 'input[type="password"]';
    passInvalidMessage = '[data-testid="password-invalid"]';
    wrongCredentials = '[data-testid="wrong-credentials"]';
    loginButton = 'button[data-testid=signin-submit]';
    subscribeButton = '[data-test-id="subscribe"]';
    MyProfile = "user-profile-m__white__2AI0Z";
    subscribePlan = '[data-testid="plans-subscribe-btn"]';
    phoneNumber = "#contact";
    menu_India =".header-three-m__default-menu__24xMV > ul > li:nth-child(1) > a";
    menu_SubscriptionStory =".header-three-m__default-menu__24xMV > ul > li:nth-child(2) > a";
    menu_Politics =".header-three-m__default-menu__24xMV > ul > li:nth-child(3) > a";
    menu_Technology =".header-three-m__default-menu__24xMV > ul > li:nth-child(4) > a";
    menu_Culture =".header-three-m__default-menu__24xMV > ul > li:nth-child(5) > a";
    submenu_Health = ".header-three-m__default-menu__24xMV > ul > li:nth-child(1) > ul > li:nth-child(1) > a";
    submenu_Technology = ".header-three-m__default-menu__24xMV > ul > li:nth-child(1) > ul > li:nth-child(2) > a";
    searchIcon = "[data-test-id=search-icon]";
    searchTypeArea = "#searchForm"
    //clickForSearch =   "svg.icon > use"

    verifyingLogin(element) {
      cy.get(element).click({ force: true });

    }
    verifyingElement(element, text) {
      cy.get(element)
        .contains(text)
        .click({ force: true });
    }
    verifyingInvalidCredentialsMessage(element, text) {
      cy.get(element).contains(text);
    }
  
    verifyingElementVisibility(element, text) {
      cy.get(element).type(text);
    }
    verifyingSubscription(element, text) {
      cy.get(element)
        .contains(text)
        .click({ force: true });
    }
    verifyingFormField(element, text) {
      cy.get(element)
        .clear()
        .type(text);
    }
    verifyingElementEnabled(element, text) {
      cy.get(element).contains(text);
    }
    verifyingSearchBtn(element) {
      cy.get(element).click({ force: true });
    }
    verifyingSearchForm(element,text){
      cy.get(element).type(text, {force: true});
    }
   // verifyingSearchingText(element){
   //   cy.get(element).click({ force: true });
    //s}
}