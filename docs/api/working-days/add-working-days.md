---
sidebar_position: 1
---

# הוספת ימי עסקים לתאריך
המודול מאפשר חישוב של ימי עסקים באמצעות הוספה של ימים לתאריך.  
התוצאה הסופית מחושבת לפי החגים שהיו בין התאריכים וסופשי שבוע שלא מחושבים כימי עסקים.  
למשל, אם בצונך לחשב כמה זה 14 ימים עסקים מתאריך **31/08/2021** - תקבל בתשובה את התאריך הסופי.

מעבר לתאריך ומספר הימים נדרש להזין את מבנה סופ״ש כדי שהמערכת תדע על איזה ימים לדלג.
:::tip דוגמה קטנה

אם אתה מגדיר את שישי ושבת כסופ״ש הזן **6,7**  
אם אתה מגדיר את שישי כיום עסקים הזה **7** בלבד  
1 = ראשון  
2 = שני  
3 = שלישי  
וכו...  
אם יש יותר מיום אחד - הפרד בפסיק.

:::

### למה אני צריך לשים לב?
1. בפרמטר ``date_format`` ציין את הפורמט של התאריך שהזנת.
2. בפרמטר ``return_format`` ציין את הפורמט של התאריך הוספי שתרצה לקבל בתשובה.

| פורמט  | דוגמה  |        הערה       |
| ------ | ------ | :---------------: |
| `YYYY` | `2021` |        |
| `YY`   | `21`   |        |
| `MM`   | `11`   |        |
| `DD`   | `27`   |   |
| `D`    | `5`    | מספר היום בשבוע |
| `HH12` | `9`    | שעה |
| `HH24` | `21`   | שעה |
| `MI`   | `55`   | דקות |
| `SS`   | `59`   | שניות |

אם נדרש פורמט שלא קיים כאן - צור איתנו קשר ונסייע לך.
<div class="api-docs api-sec">

## Add Working Days

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/workingDays/addWorkingDays</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">

| Required | Key           | Value    |       Note        |
| :------: | ------------- | -------- | :---------------: |
|    ✓     | start_date    | `string` |    תאריך התחלה    |
|    ✓     | increment     | `number` |    ימים להוספה    |
|    ✓     | weekend       | `string` |    פורמט סופ״ש    |
|    ✓     | date_format   | `string` | פורמט תאריך מקור  |
|    ✓     | return_format | `string` | פורמט תאריך לחזרה |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 200 Created"
{
    "start_date": "31/08/2021",
    "increment": 14,
    "weekend": "6,7",
    "date_format": "DD/MM/YYYY",
    "return_format": "DD/MM/YYYY"
}
```

```json title="Response"
{
    "date": "22/09/2021",
    "days_total_holidays": 4,
    "days_total_weekends": 4,
    "holidays": [
        {
            "name": "Gedaliah Fast",
            "date": "2021-09-09T00:00:00Z",
            "description": "Gedaliah Fast"
        },
        {
            "name": "Rosh Hashana (Day 2)",
            "date": "2021-09-08T00:00:00Z",
            "description": "Rosh Hashana (Day 2)"
        },
        {
            "name": "Rosh Hashana",
            "date": "2021-09-07T00:00:00Z",
            "description": "Rosh Hashana"
        },
        {
            "name": "Rosh Hashana Eve",
            "date": "2021-09-06T00:00:00Z",
            "description": "Rosh Hashana"
        }
    ],
    "weekends": [
        {
            "the_dated": "2021-09-03T00:00:00Z",
            "the_date": "03-sep-2021",
            "month_name": "september",
            "day_name": "FRIDAY",
            "the_week": "35",
            "the_day": "6"
        },
        {
            "the_dated": "2021-09-04T00:00:00Z",
            "the_date": "04-sep-2021",
            "month_name": "september",
            "day_name": "SATURDAY",
            "the_week": "35",
            "the_day": "7"
        },
        {
            "the_dated": "2021-09-10T00:00:00Z",
            "the_date": "10-sep-2021",
            "month_name": "september",
            "day_name": "FRIDAY",
            "the_week": "36",
            "the_day": "6"
        },
        {
            "the_dated": "2021-09-11T00:00:00Z",
            "the_date": "11-sep-2021",
            "month_name": "september",
            "day_name": "SATURDAY",
            "the_week": "36",
            "the_day": "7"
        }
    ]
}
```
</div>