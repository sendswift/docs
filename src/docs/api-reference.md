# API Reference

### 1. Possible Response Codes

200 - The request was successful.

400 - Validation of input data in the request didn't pass.

403 - The request is unauthorized. See [Authorization](/documentation/authorization). 

500 - The server failed to process the request, likely as a result of mismanaged internal logic. If encountered, contact: [support@sendswift.ai](mailto:support@sendswift.ai).

### 2. Base URL

All requests should be made to:

```
https://huntsinger.sendswift.ai/api/public/
```