---
sidebar_position: 1
---

# תבניות מסמכים
על מנת לשלוח מסמך דיגיטלי נדרש להשתמש במספר המזהה של התבנית.  
באמצעות הבקשה הבאה, ניתן לקבל את רשימת כל התבניות הקיימות במערכת.

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם האם המסמך הזה פעיל או לא... במידה ולא - לא ניתן יהיה לגשת למסמך.
2. ב``Response`` תקבלו פרמטר ``is_stand_alone`` - הפרמטר מציג האם ניתן לגשת למסמך הזה לחתימה חוזרת או האם המסמך מיועד לשליחה אישית.


<div class="api-docs api-sec">

## Get Documents Templates

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/signatures/templates</code></div>

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
            "id": "3",
            "name": "234234",
            "is_active": "Y",
            "is_stand_alone": "Y",
            "shorten_url": "https://e-sign.co.il/yyyyy"
        },
        {
            "id": "4",
            "name": "dddddd",
            "is_active": "Y",
            "is_stand_alone": "Y",
            "shorten_url": "https://e-sign.co.il/xxxxx"
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
            "rel": "edit",
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