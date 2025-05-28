## Change Lead Status

Updates the status of a lead in a specific campaign. The status must be one of the predefined values.

### Endpoint

```
POST /change-lead-status
```

---

### Request Body

Send a JSON payload with the following fields:

| Field        | Type     | Required | Description                                                                |
| ------------ | -------- | -------- | -------------------------------------------------------------------------- |
| `lead_email` | `string` | ✅        | Email of the lead to update. Must be a valid email address.                |
| `campaign`   | `number` | ✅        | ID of the campaign where the lead exists.                                  |
| `status`     | `string` | ✅        | New status to assign to the lead. Must be one of the valid status options. |

---

### Valid Status Options

* `no-contact`
* `interested`
* `meeting-booked`
* `meeting-completed`
* `won`
* `out-of-office`
* `wrong-person`
* `not-interested`
* `lost`

---

### Example Request

```json
POST /change-lead-status
Content-Type: application/json

{
  "lead_email": "alex@example.com",
  "campaign": 123456,
  "status": "interested"
}
```

---

### Notes

* The `lead_email` is validated for correct formatting.
* The status must be one of the predefined values listed above.
* If the lead does not exist in the campaign, the request will return an error.
* If no status is provided, the lead's status will not be changed.
