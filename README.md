#Easily test your mandrill email templates that use handlebars with dynamic contents
This is a simple Node.js Express app that uses the example provided by mandrill team <a href="http://blog.mandrill.com/handlebars-for-templates-and-dynamic-content.html" target="_blank">handlebars-for-templates-and-dynamic-content</a> to get you going.

## Install

1. Clone this repo
2. CD into the directory and do `npm install`
3. Do `gulp` to run. 
4. Open browser at: localhost:3000
5. Click on LiveReload icon to enable and connect it to our node server.

## Install LiveReload Chrome browser extension
In order to refresh browser when change occurs, please install <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">livereload</a> extension. It shows up next to the browser's addressbar. 

## How to use
This project has two files: `template.hbs` and `templateValues.js`

1. `template.hbs` is the handlebar template (<a href='http://kbcdn.mandrill.com/handlebars-example-receipt-template.txt' target='_blank'>handlebars-example-receipt-template.txt</a>).
2. `templateValues.js` is the json that you'll pass to the template  (<a href='http://kbcdn.mandrill.com/handlebars-example-sendtemplate-api.txt' target='_blank'>handlebars-example-sendtemplate-api.txt</a>).
3. Make change the above two files to make it work for your project
4. See changes in browser. We use gulp and livereload to automatically restart server and refresh brower.

##Notes:
1. Once you are done, don't forget to update `templateValues.js` file. You'll have to change the 'template name', 'key' and 'message to' and other values to match your project.
2. The server currently ignores and returns same text passed to 'title' and 'upper' handlebar helpers.