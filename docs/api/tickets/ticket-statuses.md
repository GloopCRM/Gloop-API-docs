---
sidebar_position: 1
---

# סטטוסי טיקטים
באמצעות סטטוסי טיקטים ניתן לסגמנט את הרשומות לפי המצב הרלוונטי של המשימה.  


### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם הסטטוס הזה יהיה מוצג במערכת או שהוא יוסתר ולא ניתן יהיה לבחור בו.


<div class="api-docs api-sec">

## Get Ticket Statuses

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/tickets/statuses</code></div>

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
            "id": "234958461663827606436640835426029570923",
            "name": "פתוח",
            "is_active": "Y"
        },
        {
            "id": "234958461663828815362460450055204277099",
            "name": "❗️ בטיפול",
            "is_active": "Y"
        },
        {
            "id": "234958461663830024288280064684378983275",
            "name": "✅ סגור",
            "is_active": "Y"
        }
    ],
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "count": 3,
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