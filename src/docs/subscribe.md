## Subscribe to Event

Subscribe to specific campaign events using REST Hooks. When the specified event occurs, we’ll send an HTTP POST request to the provided URL with the relevant event payload.

### Endpoint

```
POST /subscribe-to-event
```

---

### Request Body

Send a JSON payload with the following fields:

| Field      | Type     | Required | Description                                                                   |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------- |
| `event`    | `string` | ✅        | The event you want to subscribe to. (Listed below).  |
| `url`      | `string` | ✅        | A valid HTTPS URL that will receive webhook payloads when the event triggers. |
| `campaign` | `string` | ❌        | Optional campaign ID. If provided, the hook only fires for that campaign.     |

---

### Example Request

```json
POST /subscribe-to-event
Content-Type: application/json

{
  "event": "email-sent",
  "url": "https://yourapp.com/hooks/email-sent",
  "campaign": "1234567890"
}
```

---

### Available Events

| Value                         | Event                          |
|:------------------------------|:-------------------------------|
| email-sent                    | Email Sent                     |
| email-bounced                 | Email Bounced                  |
| email-opened                  | Email Opened                   |
| email-link-clicked            | Email Link Clicked             |
| reply-received                | Reply Received                 |
| lead-unsubscribed             | Lead Unsubscribed              |
| campaign-ended                | Campaign Ended                 |
| email-account-error           | Email Account Error            |
| lead-marked-interested        | Lead Marked Interested         |
| lead-marked-ooo               | Lead Marked Out of Office      |
| lead-marked-wrong-person      | Lead Marked Wrong Person       |
| lead-marked-not-interested    | Lead Marked Not Interested     |
| lead-marked-won               | Lead Marked Won                |
| lead-marked-meeting-booked    | Lead Marked Meeting Booked     |
| lead-marked-meeting-completed | Lead Marked Meeting Completed  |
| lead-marked-lost              | Lead Marked Lost               |

---

### Notes

* The `url` **must be HTTPS** and a valid endpoint that can receive POST requests.
* Each workspace can create multiple hooks for different events.
* If `campaign` is omitted, the event applies globally across all campaigns in the workspace.

