---
sidebar_position: 1
---

# יצירת מוצר חדש
בין אם אתה מוכר מוצרים פיזיים או שירותים דיגיטליים אתה נדרש לעבוד עם מוצרים.  
מוצרים הם חלק [ממכירות](../sales/create-sale) וכל אחת מכילה מוצרים ומחירים.

באמצעות המודול, ניתן לייצר מוצר חדש במערכת ולשייך אליו [קטגוריה](../products/categories/create-category).

:::tip יש לך חנות איקומרס?

בין אם זה בוויקס, ווקומרס או שופיפיי אתה לא נדרש להגדרש מיוחדת.  
אם המערכת שלך כבר מתממשקת אליהם המוצר יסתנכרן בצורה אוטומטית.

:::

### למה אני צריך לשים לב?
1. ``sku`` הוא מק״ט פנימי במידה ואתה מנהל אחד כזה.
1. אם יש מלאי ראשוני שתרצה להגדיר, תוכל להזין אותו תחת ``invetory`` - במידה וברצונך לעדכן מלאי השתמש [בתנועות מלאי](../products/inventory/inventory-movement)
1. **חובה** לציין את מספר הקטגוריה.

<div class="api-docs api-sec">

## Create Product

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/products/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key         | Value     |      Note      |
| :------: | ----------- | --------- | :------------: |
|     ✓    | name        | `string`  |    שם המוצר    |
|     ✓    | price       | `number`  |                |
|          | desctiption | `string`  |                |
|          | sku         | `string`  |   מספר קטלוגי  |
|          | invetory    | `number`  |      מלאי      |
|          | is_physical | `boolean` | האם המוצר פיזי |
|     ✓    | is_active   | `boolean` | האם המוצר פעיל |
|     ✓    | category    | `string`  |   מזהה קטגוריה |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "Tv",
    "price": 505,
    "desctiption": "sams tv",
    "sku": "",
    "invetory": 4,
    "is_physical": true,
    "is_active": true,
    "category": "271931386971455797394479962881631377483"
}
```

```json title="Response"
{
    "id": "271931293467543909784429886793843358217",
    "message": "המוצר נוצר בהצלחה"
}
```
</div>