---
sidebar_position: 1
---

# משתמשים
באמצעות המודול הבא ניתן לקבל את רשימת המשתמשים הקיימת במערכת.  
**עבור מה אני צריך את זה?**  
על מנת לשייך משימה, לקוח או כל אוביקט אחר לטיפול משתמש ספציפי - נדרש להזין את מספר ה``ID`` של אותו משתמש.

השם של המשתמש לא יוניקי ועלול להשנות בעתיד ולכן אנו משתמשים במזהה משתמש.

:::info יצירת ועדכון משתמשים

**לא ניתן לייצר משתמשים חדשים או לעדכן משתמשים קיימים באמצעות המודול** (סביר להניח שגם לא נאפשר את זה).

:::

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם המשתמש הזה פעיל או שהוא כבר לא נמצא איתנו.


<div class="api-docs api-sec">

## Get Users List

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/users</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

***
**Example:**
```json title="Request - Status Code: 200 OK"
NULL Body
```

```json title="Response"
{
    "items": [
        {
            "id": "253960413951646409173244928790043995930",
            "name": "משה",
            "is_active": "Y",
            "created": "2021-04-03T00:00:00Z"
        },
        {
            "id": "255013075949659715931731475988554107074",
            "name": "הילה",
            "is_active": "Y",
            "created": "2021-04-13T00:00:00Z"
        }
    ],
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "count": 2,
    "links": [
        {
            "rel": "self",
            "href": "https://...."
        },
        {
            "rel": "describedby",
            "href": "https://...."
        },
        {
            "rel": "first",
            "href": "https://...."
        }
    ]
}
```
</div>