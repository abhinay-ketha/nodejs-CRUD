# nodejs-CRUD

setps to setup:  
1.git clone  
2.create .env file in root directory  
3.Add four environment variables into .env file

  MONGODB_URI = mongodb://localhost:27017/products  
  TOKEN_KEY = somerandontext  //
  TEST_USERNAME = test_user  
  TEST_PWD = test_password  
  HOSTNAME = http://localhost:3000  
  
4. npm install  
5. npm start  // for starting nodejs server
6. npm test  //for running unit test cases

Two api's implemented for create user registration and fetch user details

6. url: hostname+ '/user/register'  
    method: POST,  
    payload: {  
              username: String,  
              firstname: String,  
              lastname: String,  
              email: Email,  
              password: String  
              }  
              
 7. url: hostname+'/user/login'  
    method: POST,  
    payload: {  
              username: String,  
              password: String  
             }  
             

  
