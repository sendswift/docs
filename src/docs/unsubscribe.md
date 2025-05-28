## Unsubscribe from Event

Remove an existing event subscription. This stops the system from sending REST Hook POST requests to the specified URL when the event occurs.

### Endpoint

```
DELETE /unsubscribe-from-event
```

---

### Request Body

Send a JSON payload with the following fields:

| Field | Type     | Required | Description                                                      |
| ----- | -------- | -------- | ---------------------------------------------------------------- |
| `url` | `string` | ✅        | The exact HTTPS URL that was originally registered for the hook. |

---

### Example Request

```json
DELETE /unsubscribe-from-event
Content-Type: application/json

{
  "url": "https://yourapp.com/hooks/email-sent"
}
```

---

### Automatic Unsubscription

The hook will be unsubscribed automatically if it returns a 410 response when attempting a request.

---

### Notes

* The `url` must match exactly the one used when subscribing.
* You can only delete subscriptions that belong to your current workspace.
* No `event` or `campaign` needs to be provided – deletion is performed solely by `url`.
