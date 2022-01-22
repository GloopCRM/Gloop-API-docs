---
sidebar_position: 1
---

# יצירת טיקט
טיקטים הם בעצם כרטיסי תמיכה, פניות של לקוחות שצריכים שירות או תמיכה כזה או אחר.  
בדר״כ, הפניות מתקבלות לעסק באמצעות דוא״ל או באמצעות מוקד שיחות ייעודי שמטפל בפניות.

המטרה שלנו היא להתחבר למקור הזה ולהכניס את הפניות של הלקוחות לתוך המערכת על מנת שיהיה ניתן לרכז את הפניות במקום אחד ולבדוק שהפניות אכן טופלו.

### למה אני צריך לשים לב?
1. באפשרותך להגיד במערכת מחלקה כדי לשייך את הפניה לטיפול ממוקד יותר. למשל:  תמיכה טכנית, פניות של מתעניינים חדשים וכו...
2. באפשרותך להגדיר רמת דחיפות על מנת לתעדף את הטיפול בטיקט


<div class="api-docs api-sec">

## Create Ticket

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/tickets/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key           | Value    |                      Note                     |
| :------: | ------------- | -------- | :-------------------------------------------: |
|          | account_id    | `string` |                מזהה לקוח לשיוך                |
|     ✓    | subject       | `string` |                   נושא הפניה                  |
|          | msg           | `string` |                   תוכן הפניה                  |
|          | owner         | `string` |    [מזהה משתמש אחראי](../users/users-list)    |
|          | department_id | `string` |  [מחלקת תמיכה](../tickets/ticket-departments)  |
|          | priority_id   | `string` |   [רמת דחיפות](../tickets/ticket-priorities)   |
|     ✓    | status        | `string` |    [מזהה סטטוס](../tickets/ticket-statuses)    |
|          | phone         | `string` |                                               |
|          | email         | `string` |                                               |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "account_id": "",
    "subject": "my subject",
    "msg": "my description",
    "owner": "",
    "department_id": "",
    "priority_id": "",
    "status": "233476065495939904005866822871905093425",
    "phone": "0549255555",
    "email": ""
}
```

```json title="Response"
{
    "id": "271911966272026940869079307116515873576",
    "message": "טיקט נוצר בהצלחה",
    "ticket_status": "233476065495939904005866822871905093425"
}
```
</div>