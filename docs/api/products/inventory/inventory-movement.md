---
sidebar_position: 1
---

# תנועות מלאי
באמצעות תנועה מלאי תוכל לעדכן ולנסכרן את המלאי של המוצר במערכת.  
באמצעות תנועות מלאי ניתן לעקוב בצורה ממוקדת אחר התנועות ולוודא שאין טעויות אנוש או כל בעיה כזאת או אחרת שקיימת בעבודה עם מוצרים פיזיים.

### למה אני צריך לשים לב?
1. כדי שהמערכת תדע באיזה מוצר מדובר, הזן אותו בבקשה תחת מזהה המוצר: ``product_id``.
1. הגדרת את סוג הפעולה:  
    ``IN`` - הכנסה למלאי  
    ``OUT`` - הוצאה מהמלאי
1. באמצעות ``comment`` ציין הערה בה תוכל לזהות את התנועה במערכת, למשל: מספר חשבונית, ספק או כל דבר אחר (מוגבל ל4000 תווים).
1. בתשובה תקבל את כמות המלאי לפני הפעולה ואחריה.

:::tip רשימת תנועות מלאי

אפשר לקבל באמצעות API את רשימת תנועות לפי מזהה המוצר.  
[מעניין אותך? לחץ כאן.](#inventory-movement-log)

:::

<div class="api-docs api-sec">

## Inventory Movement

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/products/inventory/movment</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">

| Required | Key        | Value    |         Note        |
| :------: | ---------- | -------- | :-----------------: |
|     ✓    | product_id | `string` |      מזהה מוצר      |
|     ✓    | operation  | `string` | סוג פעולה: OUT / IN |
|     ✓    | quantity   | `number` |      סכום פעולה     |
|     ✓    | comment    | `string` |         הערה        |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "product_id": "255428000059312855148083097871927924884",
    "operation": "OUT",
    "quantity": 10,
    "comment": "345345"
}
```

```json title="Response"
{
    "inventory_after": -6,
    "inventory_before": 4,
    "message": "הפעולה הושלמה"
}
```
</div>

***

<div class="api-docs api-sec">

## Inventory Movement Log

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/products/inventory/&#123;&#123;product_id&#125;&#125;</code></div>

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
            "id": "41",
            "operation": "OUT",
            "quantity": 10,
            "total_after": 470,
            "total_before": 480,
            "comment": "bbblaaaaaaaaaaa",
            "created": "2021-09-04T11:21:55.292Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "25",
            "operation": "IN",
            "quantity": 50,
            "total_after": 480,
            "total_before": 430,
            "comment": "33",
            "created": "2021-08-27T14:37:48.422Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "24",
            "operation": "OUT",
            "quantity": 10,
            "total_after": 430,
            "total_before": 440,
            "comment": "bbblaaaaaaaaaaa",
            "created": "2021-08-27T14:30:05.799Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "23",
            "operation": "OUT",
            "quantity": 10,
            "total_after": 440,
            "total_before": 450,
            "comment": "bbblaaaaaaaaaaa",
            "created": "2021-08-27T14:26:28.624Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "22",
            "operation": "IN",
            "quantity": 50,
            "total_after": 450,
            "total_before": 400,
            "comment": "blaaaaaa",
            "created": "2021-08-27T14:17:42.782Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "21",
            "operation": "OUT",
            "quantity": 100,
            "total_after": 400,
            "total_before": 500,
            "comment": "blaaaaaa",
            "created": "2021-08-27T14:17:14.414Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "4",
            "operation": "IN",
            "quantity": 50,
            "total_after": 500,
            "total_before": 450,
            "comment": "חשבונית",
            "created": "2021-08-19T15:24:20.671Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "3",
            "operation": "IN",
            "quantity": 100,
            "total_after": 450,
            "total_before": 350,
            "comment": null,
            "created": "2021-08-19T15:24:09.337Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "2",
            "operation": "OUT",
            "quantity": 150,
            "total_after": 350,
            "total_before": 500,
            "comment": "גגגגג",
            "created": "2021-08-19T15:22:00.630Z",
            "product_id": 255428000059312855148083097871927924884
        },
        {
            "id": "1",
            "operation": "IN",
            "quantity": 500,
            "total_after": 500,
            "total_before": 0,
            "comment": "asdasdasdasd",
            "created": "2021-08-19T15:15:39.892Z",
            "product_id": 255428000059312855148083097871927924884
        }
    ],
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "count": 10,
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