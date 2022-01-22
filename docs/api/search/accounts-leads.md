---
sidebar_position: 1
---

# חיפוש לידים / לקוחות
באמצעות מודול זה ניתן לבצע חיפוש קל של רשומות מסוג לידים או לקוחות במערכת.  

**איך זה עובד?**  
* החיפוש עובד בצורה של **וגם** זה אומר שאם תזין גם טלפון וגם מייל הוא יחפש רשומות שמכילות את 2 הפרמטרים האלו.
* מומלץ להשתמש בערך יוניקי כמו טלפון או מספר זהות ולא בשם הלקוח

### למה אני צריך לשים לב?
1. אם לא תשלח כלום - לא תקבל כלום (אם ציפית לקבל את כל הלקוחות אז מצטערים לאכזב)
2. באמצעות פרטמר ``limit`` תוכל לשלוט בכמות התוצאות שתקבל בחזרה
3. באמצעות פרמטר ``order_by`` תוכל לשלוט בסדר שתרצה: ``תאריך עדכון`` **או** ``תאריך יצירה``
4. באמצעות פרמטר ``order`` תוכל לשלוט אם תרצה לקבל סדר עולה או יורד.
5. באמצעות פרמטר ``object_type`` תוכל לשלוט אם לקבל רק לידים, לקוחות או את כולם!

:::info נשמע מסובך?

פרטים נוספים נמצאים תחת **Attributes**

:::



<div class="api-docs api-sec">

## Search leads And Accounts

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/search/leadsAndAccounts</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">

| Required | Key         | Value    |          Note           |
| :------: | ----------- | -------- | :---------------------: |
|          | name        | `string` |                         |
|          | phone       | `string` |                         |
|          | email       | `string` |                         |
|          | passport    | `string` |       ת.ז או ח.פ        |
|          | company     | `string` |         שם חברה         |
|          | limit       | `number` |   מספר תוצאות מקסימלי   |
|          | order_by    | `string` |    created / updated    |
|          | order       | `string` |       asc / desc        |
|          | object_type | `string` | ACCOUNTS / LEADS / NULL |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "",
    "phone": "05492",
    "email": "",
    "passport": "",
    "company": "",
    "limit": 50,
    "order_by": "created",
    "order": "asc",
    "object_type": ""
}
```

```json title="Response"
{
    "count": 3,
    "results": [
        {
            "id": "271287412564915308052758481464499812988",
            "object_type": "LEADS",
            "created": "2021-09-15T21:00:00Z",
            "updated": "2021-09-20T14:11:16Z",
            "created_by": "MOSHE",
            "updated_by": "MOSHE",
            "utm_source": null,
            "utm_campaign": null,
            "name": "משה13 חלומי123",
            "phone": "05492",
            "email": "asdsdasd@gmail.com",
            "passport": null,
            "company": null
        },
        {
            "id": "271306665474440263797873968711459298178",
            "object_type": "LEADS",
            "created": "2021-09-16T14:03:22Z",
            "updated": "2021-09-17T08:44:50Z",
            "created_by": "MOSHE",
            "updated_by": "MOSHE",
            "utm_source": "מקור",
            "utm_campaign": "קמפיין",
            "name": "אלמטור",
            "phone": "0549255555",
            "email": "elementor@thebase.co.il",
            "passport": null,
            "company": null
        },
        {
            "id": "271917813959131540676117904886673869329",
            "object_type": "LEADS",
            "created": "2021-09-22T11:02:29Z",
            "updated": "2021-09-22T11:02:29Z",
            "created_by": "MOSHE",
            "updated_by": "MOSHE",
            "utm_source": null,
            "utm_campaign": null,
            "name": "israel israeli",
            "phone": "05492222222",
            "email": "123@123.com",
            "passport": null,
            "company": null
        }
    ]
}
```
</div>