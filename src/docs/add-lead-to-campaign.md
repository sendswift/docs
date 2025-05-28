## Add Lead to Campaign

Adds a new lead to an existing campaign. If the lead is already in the campaign or on the block list, the request will fail.

### Endpoint

```
POST /add-lead-to-campaign
```

---

### Request Body

Send a JSON payload with the following fields:

| Field        | Type     | Required | Description                                              |
| ------------ | -------- | -------- | -------------------------------------------------------- |
| `lead_email` | `string` | ✅        | Email of the lead to add. Must be a valid email address. |
| `campaign`   | `number` | ✅        | ID of the campaign to add the lead to.                   |
| `first_name` | `string` | ❌        | First name of the lead.                                  |
| `last_name`  | `string` | ❌        | Last name of the lead.                                   |

---

### Example Request

```json
POST /add-lead-to-campaign
Content-Type: application/json

{
  "lead_email": "alex@example.com",
  "campaign": 123456,
  "first_name": "Alex",
  "last_name": "Johnson"
}
```

---


### Notes

* The `lead_email` is validated for correct formatting.
* If the lead already exists in the campaign, it will not be added again.
* Leads on the global block list cannot be added.
