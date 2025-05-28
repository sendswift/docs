## Remove Lead from Campaign

Removes a lead from a specific campaign. If the lead does not exist in the campaign, the request will fail.

### Endpoint

```
DELETE /delete-lead-from-campaign
```

---

### Request Body

Send a JSON payload with the following fields:

| Field        | Type     | Required | Description                                         |
| ------------ | -------- | -------- | --------------------------------------------------- |
| `lead_email` | `string` | ✅        | Email of the lead to delete. Must be a valid email. |
| `campaign`   | `number` | ✅        | ID of the campaign from which to remove the lead.   |

---

### Example Request

```json
DELETE /delete-lead-from-campaign
Content-Type: application/json

{
  "lead_email": "alex@example.com",
  "campaign": 123456
}
```

---

### Notes

* The `lead_email` is validated for correct formatting.
* If the lead is not found in the specified campaign, the request will return an error.
* Deletion is permanent and cannot be undone.
