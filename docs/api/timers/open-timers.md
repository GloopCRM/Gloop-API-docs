---
sidebar_position: 1
---

# רשימת טיימרים פתוחים
המודול חיוני על מנת להבין אם יש טיימרים שנשארו פתוחים מעבר לשעות הפעילות.


<div class="api-docs api-sec">

## Get Open Timers List

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/timer/open</code></div>

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
            "id": "271943382793100520363548064345779498371",
            "account_id": null,
            "start_time": "2021-09-22T16:33:08Z",
            "comment": "my sec timer"
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