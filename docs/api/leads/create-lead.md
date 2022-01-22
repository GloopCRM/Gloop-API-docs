---
sidebar_position: 1
---

# יצירת ליד
לידים הם לקוחות פוטנציאלים (מתעניינים).  
בדר״כ, לידים נכנסים ממקורות חיצוניים כמו עמודי נחיתה של גוגל, טפסי צור קשר, פייסבוק וכו...

כמעט כל הלקוחות שלנו מנהלים את הלידים שלהם ואת תהליכים המכירה באמצעות המערכת (אנחנו עושים את זה מעולה.)  

עם התפתחות הרשתות החברתיות והשיווק הדיגיטלי חיבור לידים הפך לסיוט עבור עסקים רבים.  
לכן, החלטנו לעשות את זה קל ופשוט.  
באפשרותכם לבצע חיבור לידים באמצעות:
1. Zapier
2. Integromat
3. API - באמצעות התיעוד הבא:

:::tip

יש לנו משהו שעשוי לעניין אותך:  
לחלק מהעסקים יש כבר מאגר לידים גדול ואנחנו רוצים לתת למערכת לבדוק האם מדובר בליד כפול או בלקוח חוזר.  
בנינו מודול במיוחד בשביל זה, באמצעותו ניתן ליצור את הליד ולתת לבינה של המערכת להבין באיזה סטטוס הוא צריך להיות והאם הוא לקוח חוזר או שהתעניין בעבר.  [קליק כאן ואתה שם](../leads/intelligent)

:::

### למה אני צריך לשים לב?
1. אם שם הלקוח לא מופרד לשם פרטי ושם משפחה - **הזן את אותו הערך גם בname וגם בf_name**
2. במודול הזה יש לנו פרמטרים מסוג **UTM**. הפרטים האלה נדרשים רק אם אתה מעוניין לבצע מדידה של נתוני שיווק.  
מה שעשוי לעניין אותך זה:
  * **utm_campaign** - הזן את שם הקמפיין, למשל: חג האהבה
  * **utm_source** - הזן את שם המקור ממנו הליד הגיע, למשל: פייסבוק
3. קיימים כאן 4 פרמטרים שמתחילים בשם ***ext*** מטרתם היא לאפשר לך לדחוף למערכת נתונים שאין להם מקום טבעי במערכת.  
למשל, אתה שואל בטופס לידים שלך את הלקוח:  
 > באזה שעה יהיה לך נוח שהציג יצור איתך קשר?

 אין מקום טבעי להכניס את הערך הזה ולכן יש להשתמש בשדות ***ext***.

<div class="api-docs api-sec">

## Create Lead

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/leads/create</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key           | Value    |                         Note                         |
| :------: | ------------- | -------- | :--------------------------------------------------: |
|     ✓    | name          | `string` |                                                      |
|     ✓    | f_name        | `string` |                        שם פרטי                       |
|          | l_name        | `string` |                       שם משפחה                       |
|          | email         | `string` |                                                      |
|     ✓    | phone         | `string` |                                                      |
|          | utm_campaign  | `string` | [wiki](https://en.wikipedia.org/wiki/UTM_parameters) |
|          | utm_term      | `string` | [wiki](https://en.wikipedia.org/wiki/UTM_parameters) |
|          | utm_content   | `string` | [wiki](https://en.wikipedia.org/wiki/UTM_parameters) |
|          | utm_medium    | `string` | [wiki](https://en.wikipedia.org/wiki/UTM_parameters) |
|          | utm_source    | `string` | [wiki](https://en.wikipedia.org/wiki/UTM_parameters) |
|          | text          | `string` |                   טקסט חופשי - הערה                  |
|          | company       | `string` |                                                      |
|          | is_subscriber | `string` |                      מנוי לתפוצה                     |
|          | owner         | `string` |         [מזהה משתמש](../users/users-list)            |
|          | ext_one       | `string` |                  שדה בהתאמה אישית 1                  |
|          | ext_two       | `string` |                  שדה בהתאמה אישית 2                  |
|          | ext_three     | `string` |                  שדה בהתאמה אישית 3                  |
|          | ext_four      | `string` |                  שדה בהתאמה אישית 4                  |
|          | lead_status   | `string` |         [מזהה סטטוס](../leads/lead-statuses)         |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "israel israeli",
    "f_name": "israel",
    "l_name": "israeli",
    "email": "123@123.com",
    "phone": "05492222222",
    "utm_campaign": "",
    "utm_term": "",
    "utm_content": "",
    "utm_medium": "",
    "utm_source": "",
    "text": "",
    "company": "",
    "is_subscriber": true,
    "owner": "",
    "ext_one": "",
    "ext_two": "",
    "ext_three": "",
    "ext_four": "",
    "lead_status": 233069071553535427697228277840563827497
}
```

```json title="Response"
{
    "id": "271917813959131540676117904886673869329",
    "lead_status": "233069071553535427697228277840563827497",
    "message": "הליד נוצר בהצלחה"
}
```
</div>