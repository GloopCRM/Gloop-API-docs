---
sidebar_position: 1
---

# מחלקות תמיכה
מחלקות תמיכה מאפשרות לשייך את הפניה לטיפול במחלקה הנכונה.

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם המחלקה הזאת תוצג במערכת או שהיא תוסתר ולא ניתן יהיה לבחור בה.


<div class="api-docs api-sec">

## Get Ticket Departments

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/tickets/departments</code></div>

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
            "id": "234958546424545049094831573616695088550",
            "name": "🟢 נמוכה",
            "is_active": "Y"
        },
        {
            "id": "234958546424546258020651188245869794726",
            "name": "🟠 בינונית",
            "is_active": "Y"
        },
        {
            "id": "234958546424547466946470802875044500902",
            "name": "🔴 דחוף",
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