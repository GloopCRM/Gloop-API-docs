---
sidebar_position: 1
---

# הזדהות - יצירת טוקן
כל בקשה או פעולה לממשק הAPI של TheBase מחייבת אותך לבצע אימות על מנת לוודא שאתה בעל גישה.  
כדי לייצר טוקן להתחברות אתה נדרש להפיק **שם משתמש וסיסמה **(Client ID וClient Secret , הפרטים נמצאים בהגדרות המערכת, מיד נסביר איך לבצע את זה)

לאחר הפקת הפרטים נשלח בקשה לדומיין שלך, ונקבל בתשובה מהשרת את **הaccess_token** אותו תצטרך לשלב בHeader עם כל בקשה.

הטוקן מתחדש בכל שעה ובאמצעותו המערכת מחליטה אילו הרשאות ניתנו לך ואיזה פעולות אתה יכול לבצע באמצעות API.

ניתן להפיק מספר רב של משתמשים בעלי גישה לAPI וזאת על מנת שתוכל לחלק לאנשים שונים גישה אחרת ולהגביל אותה במקרה ונדרש.  
**למשל**: יש לך איש שיווק שנדרש לבצע התממשקות אך סביר להניח שתחליף אותו מתישהו(מה נעשה... הם לא הכי יציבים שיש)  
אז אתה מפיק לו שם משתמש וסיסמה וכשהוא מסיים לעבוד אתה יכול לבטל לו את הגישה, ובכך אתה לא משפיע על ההתממשקות עם משתמשים אחרים.

## איך מפיקים שם משתמש וסיסמה?
1. ניגש בתפריט הראשי **הגדרות מערכת**, ולאחר מכן נבחר בתפריט העליון **Webhooks/API**.
2. ברשימת ההגדרות נבחר באופציה: **טוקן API**:
![הפקת שם משתמש וסיסמה](/img/generate-token.png)
3. לאחר מכן, יפתח לנו חלון בו נוכל להפיק קוד חדש.  
באותו המסך, יופיע **הדומיין שלנו (איפה שזה מטושטש בתמונה)**, הוא ישמש אותנו עבור כל בקשה שנשלח - **שמרו אותו**  
נלחץ על הכפתור: **יצירת טוקן חדש**:
![יצירת שם משתמש וסיסמה](/img/generate-token2.png)
4. נמלא את פרטי המשתמש והמערכת תיצור עבורנו שם משתמש וסיסמה:
![יצירת שם משתמש וסיסמה](/img/generate-token3.png)

## איך לעבוד עם טוקן מתחדש
הדרך הנפוצה ביותר לגשת לממשקי OAuth2 APIs היא באמצעות Bearer token.  
Bearer token היא מחרוזת המשתמשת לאימות הבקשה והיא נשלחת כפרמטר ב **header**.

למשל: 
<div class="api-docs">

```bash title="Example"
Authorization: Bearer wnKBvr_wBZF7sX447xzTw
```

</div>

כאשר מבקשים טוקן, הוא מגיע עם זמן תפוגה (שעה) ולאחר זמן זה נדרש לחדש אותו ולקבל טוקן חדש.  
אם תנסה לשלוח בקשה עם טוקן שלא בתוקף תתקבל שגיאה: ``401 Unauthorized`` וכך אתה יודע שהגיע זמן לחדש את הטוקן 💫   
:::tip המלצה קטנה
אל תשלח בקשה לחידוש טוקן לפני כל בקשה שאתה שולח, הפוך את הקוד ליעיל ונקי וחדש את הטוקן רק כאשר מתקבלת שגיאה ``401``
:::


<div class="api-docs api-sec">

## Get access_token

**Endpoint:**
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/oauth/token</code></div>

***
Authorization: ***Basic Auth***  
+ Username: ***Client-ID***  
+ Password: ***Client Secret***  
***
Body: ***urlencoded***

| Key         | Value               |
| ----------- | ------------------- |
| grant_type  | client_credentials  |

***
**Example:**
```bash title="Request - Status Code: 200"
curl --location --request POST '/oauth/token' \
--data-urlencode 'grant_type=client_credentials'
```

```json title="Response"
{
    "access_token": "HsXI8gp1B5F2d5EDnGy3Tw",
    "token_type": "bearer",
    "expires_in": 3600
}
```
</div>