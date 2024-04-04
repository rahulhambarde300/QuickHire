# Gitlab Repository

[https://git.cs.dal.ca/gupta2/csci_5709_grp-04](https://git.cs.dal.ca/gupta2/csci_5709_grp-04)

## Personal Branch in Repository

[https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/tree/parth-modi?ref_type=heads](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/tree/parth-modi?ref_type=heads)

## Group Members

- _Angel Christian_
- _Hiteshkumar Gupta_
- _Parth Modi_
- _Rahul Hambarde_
- _Tijil Parmar_
- _Yash Khorja_

## Features Developed

- _Checkout feature and Stripe Integration_
- _Register user as a Freelancer_

## Technologies/Frameworks Used

### Front-end

- _React_
- _Material UI_

### Back-end

- _Node_
- _Express_

## W3C Compliance

- This assignment follws the W3C compliance standards.

## Folder Structure

- Code is organized in two folders: Backend and Frontend
- Frontend code follows the React folder structure.
- Backend code follows the Express backend structure like Models, Controllers and Routes.

## Personal Feature 1: Checkout screen and Stripe Integration

#### URLs:

_For ease of testing the functionality, please use the following account credentials:_

- **Username:** pmodi5000
- **Password:** Test@123

- You can navigate to Checkout page from the Profile icon dropdown in Navbar once you are logged in.

**Main Website URL:** [https://quick-hire.netlify.app/](https://quick-hire.netlify.app/)

**Checkout Page (available after login):** [https://quick-hire.netlify.app/checkout](https://quick-hire.netlify.app/checkout)

**Payment Gateway:** You will be redirected to a secure Stripe page for payment processing once you click Checkout button on Checkout page.

**Payment Success:** [https://quick-hire.netlify.app/payment-success](https://quick-hire.netlify.app/payment-success)

**Payment Failure:** [https://quick-hire.netlify.app/payment-failure](https://quick-hire.netlify.app/payment-failure)

### Code Files:

#### Frontend:

- **Checkout Page (`Checkout.js`):**  
  [csci_5709_grp-04\Frontend\quickhire\src\Features\Checkout\Checkout.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Frontend/quickhire/src/Features/Checkout/Checkout.js?ref_type=heads)

- **Payment Failure Page (`PaymentFailure.js`):**  
  [csci_5709_grp-04\Frontend\quickhire\src\Features\Payment\PaymentFailure.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Frontend/quickhire/src/Features/Payment/PaymentFailure.js?ref_type=heads)

- **Payment Success Page (`PaymentSuccess.js`):**  
  [csci_5709_grp-04\Frontend\quickhire\src\Features\Payment\PaymentSuccess.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Frontend/quickhire/src/Features/Payment/PaymentSuccess.js?ref_type=heads)

#### Backend:

- **Payment Routes (`payment.routes.js`):**  
  [csci_5709_grp-04\Backend\src\routes\v1\payment.routes.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Backend/src/routes/v1/payment.routes.js?ref_type=heads)

- **Cart Controller (`cart.controller.js`):**  
  [csci_5709_grp-04\Backend\src\controllers\cart.controller.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Backend/src/controllers/cart.controller.js?ref_type=heads)

- **Cart Model (`cart.model.js`):**  
  [csci_5709_grp-04\Backend\src\models\cart.model.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Backend/src/models/cart.model.js?ref_type=heads)

#### Screenshots:

_Empty Cart Screen:_

![Empty Cart Screen](https://lh3.googleusercontent.com/drive-viewer/AKGpihYq7JUmfKxou3PQgwCX8k5294IJHRfmX8xjjl8YeaUfa9wfYsqVJsIe2F4TySc-K-jbf8AJ6OwTmGpzaTvOpkhENmWky5bXl4o=w1370-h943-rw-v1)

_Service added to Cart:_
![Service added to Cart](https://lh3.googleusercontent.com/drive-viewer/AKGpihY984AZ-JNJ0VjFi4eR1ayYxr1c7TUChynIXm6As8vvl_qV9c4Szs4NCaB73pt0zwDqn5lUMFGI-BZ7MqG6Xd_VhSg_neRrQ_U=w1910-h943-rw-v1)

_Payment gateway screen (Stripe):_

![Payment gateway screen (Stripe)](https://lh3.googleusercontent.com/drive-viewer/AKGpihYK20AXA5oqYrghsw9jmEARMSpSkrdwIubZGJ9Zf0hNViHSjEYKtHyLEDLW8BLVO8ndB3nBQV8SEV_lRs14JcfxJhbn1Gcgwg=w1910-h943-rw-v1)

_Payment Success Screen:_

![Payment Success](https://lh3.googleusercontent.com/drive-viewer/AKGpihaK9yG9VWjVA8JxEtpkY5cxVXwkitW7gmqPdCmSUSP6b4jAwK0bsKfHXmN_t_q3bPFRfF_nP6JW3Ylrw0X-j3w0-Je52GS-Ew=w1370-h943-rw-v1)

_Payment Failure Screen:_

![Payment Failure](https://lh3.googleusercontent.com/drive-viewer/AKGpihaqAMcNP4HZKKHDbjWYMM4EJC0Mv9SJ2xmtWqMXQ9dlwdJ2fU0MAX71_0kGxMtMQkU7lZJlZFKgi8pPaikTaRPC599UiG-pllI=w1370-h943-rw-v1)

## Personal Feature 2: Register user as a Freelancer

#### URLs:

_To test the functionality, please use the following account credentials:_

- **Username:** pmodi5000
- **Password:** Test@123

_Once logged in, please go to profile page and click on "BECOME A FREELANCER" button._

**Main Website URL:** [https://quick-hire.netlify.app/](https://quick-hire.netlify.app/)

**Profile Page (available after login):** [https://quick-hire.netlify.app/profile](https://quick-hire.netlify.app/profile)

**Freelancer Registration Page:** [https://quick-hire.netlify.app/register-freelancer](https://quick-hire.netlify.app/register-freelancer)

### Code Files:

#### Frontend:

- **Register Freelancer Page (`SignUpFreelancer.js`):**  
  [csci_5709_grp-04\Frontend\quickhire\src\Features\SignUpFreelancer\SignUpFreelancer.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Frontend/quickhire/src/Features/SignUpFreelancer/SignUpFreelancer.js?ref_type=heads)

#### Backend:

- **User Model (`user.model.js`):**
  [csci_5709_grp-04\Backend\src\models\user.model.js](https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/blob/main/Backend/src/routes/v1/payment.routes.js?ref_type=heads)

#### Screenshots:

_Freelancer Registration Screen:_

![_Freelancer Registration Screen](https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYqh_1T1sXqOWISNE8VbswT3YCIuxDOLcX_dejTVY5eBF9GQuTm_ZJeSQvx7JHOA9yNzE9mKrqMdJKI-qXUwXiLcIqir32DHXU=w1860-h943-rw-v1)

## References

[1] Material UI. "Overview." [Online]. Available: [https://mui.com/material-ui/getting-started/](https://mui.com/material-ui/getting-started/) Accessed February 21, 2024.

[2] Payments, "stripe docs", [Online]. Available: [https://docs.stripe.com/payments](https://docs.stripe.com/payments), Accessed: February 28, 2024.

[3] 4.x API, "ExpressJS", [Online]. Available: [https://expressjs.com/en/api.html](https://expressjs.com/en/api.html), Accessed: February 23, 2024.