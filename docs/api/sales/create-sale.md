---
sidebar_position: 1
---

# יצירת מכירה
מכירות מרכזות את כל הנושא הפיננסי, ביישות הזאת אנו מוכרים מוצרים או שירותים ללקוחות ועל פי זה אנו מגדירים יעדי מכירות.

אם יש לך אתר איקומרס או שאתה מוכר במקור חיצוני, תוכל להשתמש בAPI על מנת להכניס מכירות ולמדוד את הכל ממקום אחד.  
בניגוד לאתרי איקומרס, המערכת מאפשרת ניתוח מעמיק מאוד הן ברמת הלקוח או בכל רמה אחרת. זאת הסיבה שהמון עסקים בוחרים לסנכרן את חנות האיקומרס שלהם למערכת.

### למה אני צריך לשים לב?
1. המודול הזה יכול קצת לבלבל, יש לקרוא טוב את הערכים תחת ``Attributes 🤖``
2. אם יש הנחה, ניתן להגדיר אותה תחת פרמטר ``discount_type`` - אם זה אחוז ציין: ``%`` ואם זה הנחה בסכום ציין ``#``
3. ההבדל בין ``discount`` ל``discount_value`` הוא שב``discount_value`` נרש להזין את ערך ההנחה, למשל:  
אם נתת _15 אחוז הנחה_ אזי ``discount`` = 15 ו``discount_value`` = 39.90
4. אותו העיקרון בנוגע ל``tax`` - הפרטמר הזה צריך להכיל את הערך של המע״מ. למשל: 75.50

<div class="api-docs api-sec">

## Create Sale

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/sales/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">

| Required | Key                     | Value     |                 Note                 |
| :------: | ----------------------- | --------- | :----------------------------------: |
|          | account_id              | `string`  |              שיוך ללקוח              |
|          | lead_id                 | `string`  |              שיוך לליד               |
|    ✓     | title                   | `string`  |   כותרת המכירה - למשל מכירה מהאתר    |
|          | owner                   | `string`  |  [מזהה משתמש](../users/users-list)   |
|    ✓     | status                  | `string`  | [מזהה סטטוס](../leads/lead-statuses) |
|          | discount_type           | `string`  |                % או #                |
|          | discount                | `number`  |              סכום הנחה               |
|          | discount_value          | `number`  |      ערך ההנחה - כמה יוצא בכסף       |
|          | sub_total               | `number`  |     סכום ביניים - לפני הנחה ומעמ     |
|    ✓     | total                   | `number`  |              סה״כ מכירה              |
|          | tax_rate                | `number`  |              אחוז מע״מ               |
|          | is_tax                  | `boolean` |           כולל מע״מ או לא            |
|          | tax                     | `number`  |               ערך מע״מ               |
|          | admin_notes             | `string`  |            הערות פנימיות             |
|          | products                | `array`   |                מוצרים                |
|          | products.product_id     | `string`  |              מזהה מוצר               |
|          | products.description    | `string`  |                תיאור                 |
|          | products.quantity       | `number`  |                יחידות                |
|          | products.price_per_unit | `number`  |             מחיר ליחידה              |
|          | products.total_product  | `number`  |              סה״כ מחיר               |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "account_id": "",
    "lead_id": "",
    "title": "te3sttttt",
    "owner": "",
    "status": "234204384077945004415374675367894346525",
    "discount_type": "",
    "discount": null,
    "discount_value": null,
    "sub_total": null,
    "total": null,
    "tax_rate": null,
    "is_tax": true,
    "tax": null,
    "admin_notes": "",
    "products": [
        {
            "product_id": "269118292018347502563484232607897156982",
            "description": "",
            "quantity": null,
            "price_per_unit": null,
            "total_product": null
        },
        {
            "product_id": "269118292018347502563484232607897156982",
            "description": "",
            "quantity": null,
            "price_per_unit": null,
            "total_product": null
        }
    ]
}
```

```json title="Response"
{
    "id": "271938755411120854115903777342845774028",
    "message": "המכירה נוצרה נוצר בהצלחה"
}
```
</div>