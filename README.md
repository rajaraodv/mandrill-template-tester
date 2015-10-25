#Easily test your mandrill email templates that use handlebars with dynamic contents
This is a simple Node.js Express app that uses the example provided by mandrill team <a href="http://blog.mandrill.com/handlebars-for-templates-and-dynamic-content.html" target="_blank">handlebars-for-templates-and-dynamic-content</a> to get you going.

## Install
1. Clone this repo
2. CD into the directory and do `npm install`
3. Do `npm start` to run. 
4. Open browser at: localhost:3000

## How to use
This project has two files: `template.hbs` and `templateValues.js`
1. `template.hbs` is the handlebar template (<a href='http://kbcdn.mandrill.com/handlebars-example-receipt-template.txt' target='_blank'>handlebars-example-receipt-template.txt</a>).
2. `templateValues.js` is the json that you'll pass to the template  (<a href='http://kbcdn.mandrill.com/handlebars-example-sendtemplate-api.txt' target='_blank'>handlebars-example-sendtemplate-api.txt</a>).
3. Make change the above two files to make it work for your project
4. Restart server and refresh browser

##Note:
1. Once you are done, don't forget to update `templateValues.js` file. You'll have to change the 'template name', 'key' and 'message to' and other values to match your project.