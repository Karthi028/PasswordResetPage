In this apll we have three pages one is login and the other oe is forgot password page & passwordchange page
to make API calss we used Fetch and for error handling we used then and Catch...

we used _redirects file ...so that when user trys to get to the page that is deep in ...no matter what the url is the index.html file need to be served fot the user ....

Forgot password page : where user enters the Email Id registered with their Account inorder send a reset password link to their mail..

passwordchange page : once the user clicks the link the reset password page renders where the user can enter their new password ...
and the new password gets saved to the database...

login page : is just for visual where the user gets the option or link to enter forgetpassword page...
this page dosent have any user untraction feature ...the main goal or the task focuses on password reset alone...


""
TO ENTER TO THE RESET password Page Use this LINK: "https://resetpasswordpage.netlify.app/passwordchange/${randomString}"

Only For Auditing Purpose : RandomString is Made be consoled in the Browser

where the randomString will be available in the browser console once you enter the register User Email in the forget password page ....
In Database the available user Email is "karthi@guvi.com"
once entering this you will recive the RandomString in the browser Console...

""



