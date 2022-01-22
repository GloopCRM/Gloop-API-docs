---
sidebar_position: 1
---

# יצירת ליד - בדיקת כפילויות
יצירת ליד בצורה חכמה, תנו למערכת להחליט עבורכם לפי חוקים המוגדרים בה איזה סטטוס הליד יקבל.

**איך זה עובד?**  
הפונקציה מצליבה את הפרטים של הליד (טלפון ומייל) עם הנתונים הקימיים במערכת,  
ומחפשת אם קיימים לידים או לקוחות עם אותם הפרטים, במידה וכן היא מעדכנת את הסטטוס בהתאם:
* ⚠️ לקוח חוזר
* ❗️ כפול
* 🤖 ליד חוזר

המודול הזה מתאים ללקוחות שיש להם מאגר נתונים גדול או שהם עובדים בהיקף רחב של שיווק דיגיטלי ומגייסים כמויות גדולות של לידים.  
לידים כפולים זו **מחלה** של המון עסקים, ולכן הגדרנו מספר חוקים שאמורים לתת למנהל המכירות **יכולת לזהות את ההיסטוריה של הליד** לפני שהוא משייך אותו לאיש מכירות.

### למה אני צריך לשים לב?
1. בניגוד לשליחת ליד ״טיפש״ כאן יש פחות פרמטרים שצריך לשלוח (נועד יותר לשיווק דיגיטלי)
2. במודול הזה יש לנו פרמטרים מסוג **UTM**. הפרטים האלה נדרשים רק אם אתה מעוניין לבצע מדידה של נתוני שיווק.  
מה שעשוי לעניין אותך זה:
  * **utm_campaign** - הזן את שם הקמפיין, למשל: חג האהבה
  * **utm_source** - הזן את שם המקור ממנו הליד הגיע, למשל: פייסבוק
3. אם זה ממש מעניין אותך, ב``Response`` תקבל את התוצאה של הניתוח.  
למשל: ``הפעולה הושלמה - הליד כפול וכבר עובר כרגע תהליך מכירה.``


<div class="api-docs api-sec">

## Create Lead Intelligent

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/leads/intelligent</code></div>

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

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "name": "israel israeli",
    "f_name": "israel",
    "l_name": "israeli",
    "email":"123@123.com",
    "phone":"0544444444",
    "UTM_CAMPAIGN":"טופס תחתון",
    "UTM_TERM":"",
    "UTM_CONTENT":"",
    "UTM_MEDIUM":"",
    "UTM_SOURCE":"אתר אינטרנט",
    "text":""
}
```

```json title="Response"
{
    "id": "271917169415369657277911897818903775522",
    "message": "הפעולה הושלמה - הליד כפול וכבר עובר כרגע תהליך מכירה.",
    "name": "israel israeli"
}
```
</div>