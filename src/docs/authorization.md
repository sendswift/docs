# Authorization

## Requests

To call endpoints you will need to include your API key in each request for auth type "API Key". 


Assign your API key as the value to key `x-api-key`. 

## Verify

You can verify the validity of your key and authentication status by calling the following endpoint:

```
/api/public/verify-auth
```

The request, when successful, will return a response with status 200 and the following body: 

```
{ message: "Authenticated 2.0." }
```

Request failure will result in a `403` status code for unauthorized requests - in other words, the API key isn't valid.