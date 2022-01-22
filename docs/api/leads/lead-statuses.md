---
sidebar_position: 1
---

# סטטוסי לידים
באמצעות סטטוסי לידים ניתן לסגמנט את הרשומות לפי המצב הרלוונטי של המתעניין.  
אם בחרת באופציה של לשלוח את הליד ללא בדיקת כפילויות, תידרש להזין בעצמך את הסטטוס אותו תרצה שהליד יקבל.

:::info

כשבוחרים בבדיקה כפילויות הליד מקבל סטטוס אוטומטי לפי מספר חוקים שהוגדרו במערכת.

:::

### למה אני צריך לשים לב?
1. ב``Response`` תקבלו פרמטר ``is_active`` - המשמעות שלו היא האם הסטטוס הזה יהיה מוצג במערכת או שהוא יוסתר ולא ניתן יהיה לבחור בו.


<div class="api-docs api-sec">

## Get Lead Statuses

**Endpoint:**  
Method: ***GET***
<div class="end-point"><code>GET: https://&#123;&#123;domain&#125;&#125;/v2/leads/statuses</code></div>

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
            "id": "233069071553535427697228277840563827497",
            "name": "💫 חדש",
            "is_active": "Y"
        },
        {
            "id": "233069071553536636623047892469738533673",
            "name": "🌟 בטיפול",
            "is_active": "Y"
        },
        {
            "id": "233068757482379672535116974651377078673",
            "name": "☎️ אין מענה",
            "is_active": "Y"
        },
        {
            "id": "233283533732675753954283890808071309",
            "name": "💡 פולו-אפ",
            "is_active": "Y"
        },
        {
            "id": "233283533732676958969773898519982777485",
            "name": "⚡️ מעוניין",
            "is_active": "Y"
        },
        {
            "id": "233068757482380881460936589280551784849",
            "name": "😐 לא מעוניין",
            "is_active": "Y"
        },
        {
            "id": "233283613657759819600694939278253904883",
            "name": "❗️ כפול",
            "is_active": "Y"
        },
        {
            "id": "233178998040188663790648493563928270356",
            "name": "⛔️ תקול",
            "is_active": "Y"
        },
        {
            "id": "243106151780891622797278252149114577730",
            "name": "⚠️ לקוח חוזר",
            "is_active": "Y"
        },
        {
            "id": "233069071553537845548867507098913239849",
            "name": "🎉 הומר ללקוח",
            "is_active": "Y"
        }
    ],
    "first": {
        "$ref": "https://...."
    }
}
```
</div>