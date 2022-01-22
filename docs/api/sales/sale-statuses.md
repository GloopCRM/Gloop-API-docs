---
sidebar_position: 1
---

# סטטוסי מכירות
באמצעות סטטוסי מכירות ניתן לסגמנט את הרשומות לפי המצב הרלוונטי של המשימה.  


### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם הסטטוס הזה יהיה מוצג במערכת או שהוא יוסתר ולא ניתן יהיה לבחור בו.

<div class="api-docs api-sec">

## Get Sale Statuses

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/sales/statuses</code></div>

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
            "id": "234204384077945004415374675367894346525",
            "name": "טיוטה",
            "is_active": "Y"
        },
        {
            "id": "234208723204765111610925577932915778841",
            "name": "ממתין לתשלום",
            "is_active": "Y"
        },
        {
            "id": "234208736313783924216212667316296109106",
            "name": "שולם",
            "is_active": "Y"
        },
        {
            "id": "234208723204766320536745192562090485017",
            "name": "בוטל",
            "is_active": "Y"
        }
    ],
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "count": 4,
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