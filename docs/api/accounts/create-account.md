---
sidebar_position: 1
---

# יצירת לקוח
**לקוח הוא הלב של כל התהליכים** - בין אם זה משימות, טיקטים, מכירות... המון תהליכים יהיו מקושרים למספר לקוח כזה או אחר.  
כרטיס הלקוח במערכת מרכז בצורה פשוטה את כל הפעילות והתקשרות עם הלקוח.

### למה אני צריך לשים לב?
1. אם אתם עובדים עם מערכת נוספת, מומלץ לשמור אצלכם את מספר הלקוח במערכת שלנו כדי שלהבא תדעו לבצע קישור לאותו לקוח ולא ליצור בכל פעם לקוח חדש. 
2. קיימים כאן 4 פרמטרים שמתחילים בשם ***ext*** מטרתם היא לאפשר לך לדחוף למערכת נתונים שאין להם מקום טבעי במערכת.  
3. יש כאן שדה ``b_day`` שמכיל את תאריך הלידה של הלקוח - **הזן אותו אם תרצה שהלקוח יקבל תזכורת ביום ההולדת**.
3. אם הלקוח הזה בעבר היה ליד, והפך ללקוח תוכל לקשר אותם אחד לשני על ידי הזנה של מספר הליד תחת ``lead_id``

:::danger תהליכים אוטומטיים

ברוב המקרים, יצירת לקוח חדש במערכת גוררת איתה מספר תהליכים אוטומטיים כמו:
* יצירה בחשבונית ירוקה
* שמירה ברשימת תפוצה
* שליחת הודעה וואטסאפ אוטומטי ועוד...  
אם תתקבל שגיאה לא ברורה בפעם הראשונה שאתה יוצר את הלקוח - אל חשש, זה כנראה קשור לאחד מהתהליכים האוטומטיים שלא מוגדרים בצורה תקינה.  
במקרה כזה, צרו איתנו קשר ונשמח לסייע.

:::

<div class="api-docs api-sec">

## Create Account

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/accounts/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key           | Value     |                    Note                    |
| :------: | ------------- | --------- | :----------------------------------------: |
|     ✓    | name          | `string`  |                                            |
|     ✓    | f_name        | `string`  |                   שם פרטי                  |
|          | l_name        | `string`  |                  שם משפחה                  |
|          | phone         | `string`  |                                            |
|          | country       | `string`  |                                            |
|          | address       | `string`  |                                            |
|          | passport      | `string`  |               ת.ז או מספר ח.פ              |
|          | website       | `string`  |                                            |
|          | b_day         | `date`    |                 תאריך לידה                 |
|          | owner         | `string`  |      [מזהה משתמש](../users/users-list)     |
|          | lead_id       | `string`  |       מזהה ליד (אם ברצונך לקשר לליד)       |
|     ✓    | status        | `string`  | [מזהה סטטוס](../accounts/account-statuses) |
|          | type          | `string`  | [מזהה סוג לקוח](../accounts/account-types) |
|          | company       | `string`  |                   שם חברה                  |
|          | is_subscriber | `boolean` |                 מנוי לתפוצה                |
|          | ext_one       | `string`  |             שדה בהתאמה אישית 1             |
|          | ext_two       | `string`  |             שדה בהתאמה אישית 2             |
|          | ext_three     | `string`  |             שדה בהתאמה אישית 3             |
|          | ext_four      | `string`  |             שדה בהתאמה אישית 4             |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
"name": "Israel israeli",
"f_name": "Israel",
"l_name": "israeli",
"email": "123123@123123.com",
"phone": "0544444444",
"country": "",
"city": "",
"address": "",
"passport": "",
"website": "",
"b_day": "2003-11-21T01:11:11Z",
"owner": 233476065495939904005866822871905093425,
"lead_id": 233476065495942321857506052130254505777,
"status": 233476065495938695080047208242730387249,
"type": 233476065495941112931686437501079799601,
"company": "",
"is_subscriber": false,
"ext_one": "",
"ext_two": "",
"ext_three": "",
"ext_four": ""
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