---
sidebar_position: 1
---

# קטגוריות מוצרים
כדי לייצר מוצר, נדרש לשייך אותו לקטגוריה.  
באמצעות התיעוד הבא, תוכלו [ליצור](#create-category) קטגוריה חדשה או לקבל את [רשימת הקטגוריות](#get-categories) הקיימות במערכת.

### למה אני צריך לשים לב?
1. הפרמטר ``payplus_uid`` נדרש אם הקטגוריה הזאת מקושרת לקטגוריה במערכת חיצונית (PayPlus).
2. הפרמטר ``woo_id`` מתייחס למספר הקטגוריה המקושר באתר האיקומרס שלך (בין אם זה ווקומרס, וויקס או שופיפיי).
3. הפרמטר ``is_active_yn`` מתייחס לזמינות של הקטגוריה, אם שלילי אז לא ניתן יהיה לצפות או לבחור בקטגוריה במערכת.

:::tip יש לכם חנות איקומרס?

אם מערכת מסתנכרת אוטומטית לחנות איקומרס שלכם או לPayPlus אין צורך בהזנת הערכים האלו.  
המערכת תיצור את הקטגוריות אוטומטית במערכות הנ״ל ותעדכן את הפרטים אוטומטית.

:::

<div class="api-docs api-sec">

## Create Category

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/products/categories/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key          | Value     |        Note       |
| :------: | ------------ | --------- | :---------------: |
|     ✓    | name         | `string`  |                   |
|          | description  | `string`  |                   |
|          | is_active_yn | `boolean` |      האם פעיל     |
|          | payplus_uid  | `string`  |  מזהה בחברת אשראי |
|          | woo_id       | `string`  | מזהה באתר איקומרס |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "Shirts",
    "description": "",
    "is_active_yn": true,
    "payplus_uid": "",
    "woo_id": ""
}
```

```json title="Response"
{
    "id": "271931386971455797394479962881631377483",
    "message": "הקטגוריה נוצרה בהצלחה"
}
```
</div>

***

<div class="api-docs api-sec">

## Get Categories

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/products/categories/</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***


***
**Example:**
```json title="Request - Status Code: 201 Created"
NULL Body
```

```json title="Response"
{
    "items": [
        {
            "id": "270585559159241920285811324382452782586",
            "name": "קטגוריה",
            "description": "2",
            "is_active_yn": "Y",
            "woo_id": null,
            "payplus_uid": "59a23889-599b-4d47-a91c-c2515a513fa7"
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