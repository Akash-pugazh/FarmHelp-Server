## Farmhelp Api

TO RUN SERVER LOCALLY

```
npm i
npm run dev
```

#### TO TEST ENDPOINTS
**POSTMAN LINK** 
\
 https://lunar-meteor-318016.postman.co/workspace/FarmHelp~1b8b6834-d4ea-40c8-8b66-4a277b91254b/collection/28494434-78d1d7c3-2041-4874-a8fc-ab385af44d97?action=share&creator=28494434&active-environment=28494434-3675b33d-81f1-43b0-977c-53225060e23e

```
POST /api/v1/users
{
    userKey: "user key to fetch"
}
```

> Expects a body with userKey and returns the particular user details in object

---

<br>

```
GET /api/v1/users
```

> Returns all the users details from database

---

<br>

```
GET /api/v1/orders
```

> Returns all the orders details from database

---
