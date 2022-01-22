---
sidebar_position: 1
---

# הערות
לכל כרטיס ליד או לקוח יש רשימת הערות.  
ההערכות משתמשות בדר״כ לסיכום שיחה, או הערה פנימית שנרצה להציג בראש הכרטיס.

נוכל להשתמש בזה בAPI על מנת להציג בכרטיס מידע ממערכת חיצונית או דברים שחשוב לשים אליהם לב.  
ההערה מופיעה כך:  
![הערה בכרטיס](/img/api-notes.png)

### למה אני צריך לשים לב?
1. השדה מוגבל ל4000 תווים - אם תזין יותר תתקבל שגיאה.
2. חובה להזין מספר לקוח או מספר ליד - אם לא תזין כלום ההערה לא יופיע בשום מקום 🧐 (סביר להניח שגם תתקבל שגיאה)
3. התאריך שיופיע בצמוד לההערה הוא תאריך היצירה (לא ניתן לשלוט בתאריך זה)

<div class="api-docs api-sec">

## Create Note

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/notes/create</code></div>

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
|          | account_id | `string` |  מזהה לקוח |
|          | lead_id    | `string` |  מזהה ליד  |
|     ✓    | msg        | `string` | תוכן ההערה |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "account_id": "271919681468428798287547621970320994517",
    "lead_id": "",
    "msg": "bla bla bla"
}
```

```json title="Response"
{
    "id": "271922862503344221546304780672330023790",
    "message": "ההערה נוצרה בהצלחה"
}
```
</div>