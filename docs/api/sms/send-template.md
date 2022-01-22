---
sidebar_position: 1
---

# שליחת תבנית סמס
באמצעות המודול ניתן לשלוח הודעת SMS לכל איש קשר שמתחשק לכם ולשייך אותו לליד או ללקוח.  
ההודעה מחושבת בחשבונכם לפי החבילה אליה אתם מנויים.

:::tip שים :heart:

**במודול זה לא נציין את תוכן ההודעה אלא נשתמש בתבנית קיימת ממערכת הניהול.**

:::


### למה אני צריך לשים לב?
1. הקפידו להזין מספר תקין תחת מספר השולח והיעד.
2. המערכת תזהה מספר שתחיל ב054 או ב54 - לא להזין מספרים עם קידומית בינלאומית.
3. אם תשייכו ליד או לקוח, ההודעה תופיע בכרטיס הרלוונטי.
4. אם ההודעה נשלחה בהצלחה, תקבלו בתשובה ``shipment_id``
5. אם בתבנית שלכם יש שדות דינאמיים שאמורים לקחת את שם הלקוח או כל פרמטר אחר נדע לעשות זאת רק אם תשייך ליד או לקוח - ללא זה התבנית תישלח AS IS

:::note שדות דינאמיים

שימו :heart: לסעיף 5

:::

<div class="api-docs api-sec">

## Send SMS (Template)

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/sms/sendTemplate</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key         | Value    |                Note                |
| :------: | ----------- | -------- | :--------------------------------: |
|     ✓    | from        | `number` |             מספר השולח             |
|     ✓    | target      | `number` |              מספר יעד              |
|     ✓    | template_id | `number` | [מזהה תבנית](../sms/sms-templates) |
|          | lead_id     | `string` |              מזהה ליד              |
|          | account_id  | `string` |              מזהה לקוח             |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
"from": 0544444444,
"target": 054222222,
"template_id": 258123218108221845257206184125949190319,
"lead_id": null,
"account_id": null
}
```

```json title="Response"
{
    "shipment_id": "1124840092"
}
```
</div>