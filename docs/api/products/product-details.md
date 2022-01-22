---
sidebar_position: 1
---

# פרטי מוצר
באמצעות המודול ניתן לקבל את רשימת המוצרים או פרטים של מוצר ספציפי.

### למה אני צריך לשים לב?
1. אם ברצונך לקבל מוצר ספציפי הזן ב ***Endpoint*** את מזהה המוצר, אם ברצונך לקבל את כל המוצרים - השאר ריק.


<div class="api-docs api-sec">

## Get Product Details

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/products/&#123;&#123;product_id&#125;&#125;</code></div>

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
            "id": "271931293467543909784429886793843358217",
            "name": "TV",
            "price": 550,
            "desctiption": "great tv",
            "sku": null,
            "invetory": 4,
            "is_physical_yn": "Y",
            "tags": null,
            "is_active_yn": "Y",
            "display_sequence": null,
            "updated": "2021-09-22T11:00:54.461Z",
            "created": "2021-09-22T11:00:54.274Z",
            "updated_by": "AVI",
            "created_by": "AVI",
            "category": "271931386971455797394479962881631377483",
            "payplus_uid": "69bf910d-e211-4037-ae74-65fdde595f07"
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