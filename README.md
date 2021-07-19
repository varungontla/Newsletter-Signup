# Newsletter-Signup


A simple sign-up page for subscribing to your content or to your event or any other kind which needs a email, first and last name details.

# requirements
1.A text editor
2.node and npm installed pc
3.A mailchimp api (required to have a API KEY, autherization details, url of your api,List ID)


# Usage
1.after done cloning use the below command in your command line while the path is in your directory.
npm i express https body-parser request

2. this will download the required modules for this project.url of your website,
3. In the app.js url part add your api from mailchimp + list ID
    EX:   const url = https://us6.api.mailchimp.com/3.0/lists/ + <listID>
  in the above url the server(us6 for me) may vary.
  
# Demo
https://young-atoll-19224.herokuapp.com/
