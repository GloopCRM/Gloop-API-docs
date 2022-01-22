---
sidebar_position: 1
---

# יצירת משימה
יצירת משימות במערכת ממקדת את העובדים בביצוע וסגירה מטלות ומשימות.  
למנהלים, היא מאפשרת להסתכל על התפוקה של העובד ולהבין מה מהנושאים מטופלים ומה לא.

ניתן לייצר משימה לפי סוג, לתת לה תאריך יעד ולשייך אותה לאחד מהמשתמשים במערכת.  
במידה ושייכת את המשימה לליד או ללקוח היא תופיע בכרטיס שלו למעקב עתידי.

### למה אני צריך לשים לב?
1. אם ברצונך להגדיר תאריך יעד (דד ליין) הזן אותו תחת פרמטר ``due``
2. אם תרצה להרחיב ולא לספק רק כותרת למשימה, כתוב את התיאור תחת ``description`` - השדה מוגבל ל4000 תווים.


<div class="api-docs api-sec">

## Create Task

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/tasks/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key         | Value    |                   Note                  |
| :------: | ----------- | -------- | :-------------------------------------: |
|          | account_id  | `string` |             מזהה לקוח לשיוך             |
|          | lead_id     | `string` |              מזהה ליד לשיוך             |
|     ✓    | subject     | `string` |               נושא המשימה               |
|          | description | `string` |               תיאור המשימה              |
|          | due         | `date`   |                 דד ליין                 |
|     ✓    | owner       | `string` | [מזהה משתמש אחראי](../users/users-list) |
|     ✓    | status      | `string` |   [מזהה סטטוס](../tasks/task-statuses)  |
|          | priority    | `string` | [מזהה סוג לקוח](../tasks/task-statuses) |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "account_id": "",
    "lead_id": "",
    "subject": "my subject",
    "description": "my description",
    "due": "",
    "owner": "233476065495941112931686437501079799601",
    "status": "233476065495939904005866822871905093425",
    "priority": "2334760653453453453453453455556666666"
}
```

```json title="Response"
{
    "account_status": "233476065495938695080047208242730387249",
    "id": "271919681468428798287547621970320994517",
    "message": "הלקוח נוצר בהצלחה"
}
```
</div>