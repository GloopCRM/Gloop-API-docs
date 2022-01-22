---
sidebar_position: 1
---

# יצירת מסמך
יצירת מסמכים מאפשרים לשלוח ללקוח מסמך דיגיטלי **לחתימה** מרחוק.  
זה אומר, שתוכל לבחור את אחת התבניות הקיימות שלך במערכת (אותם יצרת מראש) ולשלוח אותם אוטומטית ללקוח באמצעות סמס/וואטסאפ ומייל.

המסמך הוא אישי ולאחר יצירתו יתקבל הקישור הייחודי של המסמך - לאחר החתימה לא ניתן יהיה לגשת לקישור או לחתום שנית.

:::tip יש לך תבנית גנרית?

אם התבנית שלך גנרית, והנוסח לא משתנה מלקוח אחד לאחר - יש לנו פיצ׳ר שמאפשר לייצר מסמך STAND ALONE שניתן לחתימה חוזרת ולא ננעל לאחר חתימה,  
מה שמאפשר לשלוח אותו ליותר מלקוח אחד.

:::

### למה אני צריך לשים לב?
1. אם תזין מספר טלפון - הלקוח יקבל את המסמך אוטומטית בסמס/וואטסאפ.
2. אם תזין כתובת מייל הלקוח יקבל את זה בנוסף גם למייל שלו.
3. הפרמטר ``by_user`` חובה. שם המשתמש יופיע בהודעות הנשלחות ללקוח.
4. לא ניתן לערוך את תוכן ההודעה הנשלחת ללקוח בצורה אוטומטית, אם ברצונך לשלוח מלל אישי אל תזין את פרטי האיש קשר ובכך לא תישלח הודעה אוטומטית.

<div class="api-docs api-sec">

## Create Document

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/signatures/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key         | Value    |                      Note                       |
| :------: | ----------- | -------- | :---------------------------------------------: |
|    ✓     | name        | `string` |                    שם המסמך                     |
|          | phone       | `string` |                                                 |
|          | email       | `string` |                                                 |
|    ✓     | template_id | `string` | [מזהה תבנית](../signatures/documents-templates) |
|    ✓     | by_user     | `string` |        [מזהה משתמש](../users/users-list)        |



  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "contract 2021",
    "phone": "0544444444",
    "email": "123123@123123.co.il",
    "template_id": 21,
    "by_user": "255013075949659715931731475988554107074"
}
```

```json title="Response"
{
    "document": "https://e-sign.co.il/xxxx",
    "id": "261",
    "message": "המסמך נוצר בהצלחה"
}
```
</div>