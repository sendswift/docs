## Add Lead to Blocklist

Adds a lead's email to the blocklist for the current workspace. Blocked leads cannot be added to campaigns.

### Endpoint

```
POST /add-lead-to-blocklist
```

---

### Request Body

Send a JSON payload with the following fields:

| Field        | Type     | Required | Description                                                |
| ------------ | -------- | -------- | ---------------------------------------------------------- |
| `lead_email` | `string` | ✅        | Email of the lead to block. Must be a valid email address. |

---

### Example Request

```json
POST /add-lead-to-blocklist
Content-Type: application/json

{
  "lead_email": "alex@example.com"
}
```

---

### Notes

* The `lead_email` is validated for correct formatting.
* If the lead is already on the blocklist, the request will return an error.
* Blocked leads are prevented from being added to any campaign in the workspace.
