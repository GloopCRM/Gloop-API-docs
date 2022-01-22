---
sidebar_position: 1
---

# סטטוסי לקוח
באמצעות סטטוסי לקוחות ניתן לסגמנט את הרשומות לפי המצב הרלוונטי של הלקוח.  

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם הסטטוס הזה יהיה מוצג במערכת או שהוא יוסתר ולא ניתן יהיה לבחור בו.



<div class="api-docs api-sec">

## Get Account Statuses

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/accounts/statuses</code></div>

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
            "id": "233475749821730393808748733164117718913",
            "name": "💸 ממתין לתשלום",
            "is_active": "Y"
        },
        {
            "id": "233475749821729184882929118534943012737",
            "name": "✅ פעיל",
            "is_active": "Y"
        },
        {
            "id": "233475749821731602734568347793292425089",
            "name": "❗️לא פעיל",
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