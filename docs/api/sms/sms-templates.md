---
sidebar_position: 1
---

# תבניות סמס
על מנת לשלוח הודעת סמס באמצעות תבנית נדרש להזין את המזהה של התבנית.  
באמצעות הקריאה תתקבל בחזרה רשימת כל התבניות הקיימות במערכת.


<div class="api-docs api-sec">

## Get SMS Templates

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/sms/templates</code></div>

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
            "id": "258123218108221845257206184125949190319",
            "name": "asdasd",
            "msg": "היי ***שם*** מה שלומך?",
            "is_active": "Y"
        }
    ],
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "count": 1,
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