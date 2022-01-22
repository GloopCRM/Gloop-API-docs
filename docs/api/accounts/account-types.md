---
sidebar_position: 1
---

# סוגי לקוח
אם אתם מספקים מספר שירותים לסוגי לקוחות שונים ניתן לחלק את הלקוחות לפי קטגוריות.  
המטרה היא שבעת הצורך תוכלו לבצע דיוור ממוקד או לקבל נתונים כספיים לפי סוגי או גודל הלקוח.

עסקים בדר״כ משתמשים בזה ככלי לסינון לקוחות ״שמנים״ או לקוחות ״רזים״ או לקוחות בעייתיים שאנו לא רוצים ליצור איתם קשר (מקווים שלא תפגוש כאלו!).

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם הסוג הזה יהיה מוצג במערכת או שהוא יוסתר ולא ניתן יהיה לבחור בו.



<div class="api-docs api-sec">

## Get Account Types

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/accounts/types</code></div>

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
            "id": "233476065495938695080047208242730387249",
            "name": "לקוח עסקי",
            "is_active": "Y"
        },
        {
            "id": "233476065495939904005866822871905093425",
            "name": "לקוח פרטי",
            "is_active": "Y"
        },
        {
            "id": "233476065495941112931686437501079799601",
            "name": "לקוח VIP",
            "is_active": "Y"
        },
        {
            "id": "233476065495942321857506052130254505777",
            "name": "לקוח בעייתי",
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