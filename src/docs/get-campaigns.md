## Get Campaigns

Fetches all campaigns associated with the workspace’s teams.

### Endpoint

```
GET /get-campaigns
```

---

### Request Parameters

This endpoint requires no query parameters or request body. The workspace ID is inferred from the authenticated request.

---

### Example Request

```http
GET /get-campaigns
```

---

### Example Response

```json
[
  {
    "id": 123456,
    "name": "Spring Marketing Campaign"
  },
  {
    "id": 789012,
    "name": "Holiday Promotion"
  }
]
```

---

### Notes

* The response contains an array of campaigns belonging to all teams owned by the workspace.
* Each campaign includes only its `id` and `name`.
* If no campaigns are found, an empty array is returned.
