Step 1: Clone app
Step 2: install dependencies by "npm i" in the terminal of the directory chosen
Step 3: rename the file ".env-sample" to ".env" and update the file entries in the file
Step 4: run script to start the app


Registered routes:
1. Get all users
http://<baseURL:portnumber>/users/get/all

2. Get user by id
http://<baseURL:portnumber>/users/get/{id}
Change {id} to user id number to be fetched

3. Add new user
http://<baseURL:portnumber>/users/new
fields required sample:
{
    "first_name": "John",
    "last_name": "Doe",
    "address": "Philippines",
    "post_code": "1200",
    "contact_number": "099999999999",
    "email": "john@mail.com",
    "password": "password",
    "user_name": "John"
}

4. Update user by id
http://<baseURL:portnumber>/users/update/{id}
Change {id} to user id number to be updated
fileds required sample:
{
    "first_name": "John",
    "last_name": "Doe",
    "address": "Philippines",
    "post_code": "1200",
    "contact_number": "099999999999",
    "email": "john@mail.com",
    "password": "password",
    "user_name": "John"
}

5. Remove user by id
http://<baseURL:portnumber>/users/remove/{id}
Change {id} to user id number to be deleted

6. Remove multiple users by ids
http://<baseURL:portnumber>/users/remove-all
fields required sample:
{
    "id": [
        "1",
        "2",
        "3"
    ]
}


