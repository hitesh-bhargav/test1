# GA4-node
## Installation
```bash
git clone https://github.com/hitesh-bhargav/GA4-node.git
cd GA4-node
```

## Quickstart

### Installing the client library

```bash
npm install @google-analytics/data cors dotenv express googleapis
```

## Quickstart
> Create a .env file in root directory 

```bash
GA_PROPERTY_ID=XXXXXXXXX

#Google_analytics
GA_ACCOUNT_ID=XXXXXXXXX
GA_MEASUREMENT_ID=X-XXXXXXXXXX
GA_STREAM_ID=XXXXXXXXXX

#Google_Tag_Manager
GTM_CONTAINER_ID=GTM-XXXXXXXX

#Universal
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service.account.key.json
```

### Run Server

```bash
npm start
```

## APIs

1. Get Reports

   - Request URL - `localhost:9999/get/reports`

   - Method - POST

   - Payload

     ```json
     {
         "dateRanges": [
            {
                "startDate": "2022-05-01",
                "endDate": "today"
            }
        ],
         "dimensions": [
            {
                "name": "region"
            }
        ],
         "metrics": [
            {
                "name": "totalUsers"
            }
        ]
     }
     ```


## Resources
dimensions and metrics schema

https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema
