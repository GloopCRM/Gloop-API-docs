---
sidebar_position: 1
---

# טיימר חדש
טיימרים מאפשרים לנו לבצע נוכחות לעובדים או למדוד זמן עבודה על משימה או בכלל... כל זמן שבא לכם למדוד.  
ניתן לשייך את הטיימר ללקוח על מנת להבין עבור איזה לקוח עבדנו וכמובן לשייך אותו למשתמש במערכת.

[בסקשן התחתון](#end-timer) ניתן לעצור את הטיימר בחזרה תתקבל מספר הדקות בו הטיימר עבד.

### למה אני צריך לשים לב?
1. אם תשאיר את ``start_time`` ריק - הטיימר מרגע הקריאה.
2. ניתן להפסיק את הטיימר באמצעות ``ID`` בלבד.

<div class="api-docs api-sec">

## Create Timer

**Endpoint:**  
Method: ***POST***
<div class="end-point"><code>POST: https://&#123;&#123;domain&#125;&#125;/v2/timer/start</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***

<details>
  <summary>Attributes 🤖</summary>
  <div class="api-att">


| Required | Key        | Value    |                  Note                   |
| :------: | ---------- | -------- | :-------------------------------------: |
|          | account_id | `string` |             מזהה לקוח לשיוך             |
|          | start_time | `date`   |          תאריך התחלה - לא חובה          |
|    ✓     | owner      | `string` | [מזהה משתמש אחראי](../users/users-list) |
|          | comment    | `string` |                  הערה                   |

  </div>
</details>


***
**Example:**
```json title="Request - Status Code: 201 Created"
{
    "account_id": "",
    "start_time": "",
    "owner": "253960413951646409173244928790043995930",
    "comment": "my first timer"
}
```

```json title="Response"
{
    "id": "271943382793099311437728449716604792195",
    "message": "הטיימר הופעל"
}
```
</div>

***

<div class="api-docs api-sec">

## End Timer

**Endpoint:**  
Method: ***PUT***
<div class="end-point"><code>PUT: https://&#123;&#123;domain&#125;&#125;/v2/timer/&#123;&#123;timer_id&#125;&#125;</code></div>

***
Authorization: ***OAuth 2.0***  
Headers: ``Authorization: Bearer {{token}}``
***
Body: ***Content-Type: application/json***


***
**Example:**
```json title="Request - Status Code: 201 Created"
NULL Body
```

```json title="Response"
{
    "message": "הטיימר הופסק",
    "total_minuets": "1.7"
}
```
</div>