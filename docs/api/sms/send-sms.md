---
sidebar_position: 1
---

# שליחת סמס
באמצעות המודול ניתן לשלוח הודעת SMS לכל איש קשר שמתחשק לכם ולשייך אותו לליד או ללקוח.  
ההודעה מחושבת בחשבונכם לפי החבילה אליה אתם מנויים.

### למה אני צריך לשים לב?
1. הקפידו להזין מספר תקין תחת מספר השולח והיעד.
2. המערכת תזהה מספר שתחיל ב054 או ב54 - לא להזין מספרים עם קידומית בינלאומית.
3. אם תשייכו ליד או לקוח, ההודעה תופיע בכרטיס הרלוונטי.
4. אם ההודעה נשלחה בהצלחה, תקבלו בתשובה ``shipment_id``


<div class="api-docs api-sec">

## Send SMS

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/sms/send</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key        | Value    |    Note    |
| :------: | ---------- | -------- | :--------: |
|     ✓    | from       | `number` | מספר השולח |
|     ✓    | target     | `number` |  מספר יעד  |
|     ✓    | message    | `string` |    הודעה   |
|          | lead_id    | `string` |  מזהה ליד  |
|          | account_id | `string` |  מזהה לקוח |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
"from": 0544444444,
"target": 054222222,
"message": "Hello world!",
"lead_id": null,
"account_id": null
}
```

```json title="Response"
{
    "shipment_id": "1124835822"
}
```
</div>