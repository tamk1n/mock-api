# Mock API

A minimal REST API for testing GET and POST requests. Data is stored in memory and resets when the server restarts.

## Run locally

```bash
npm install
npm start
```

The API runs at `http://localhost:3000` (or the port provided by `PORT`).

## Endpoints

- `GET /` — API information
- `GET /health` — health check
- `GET /items` — list items
- `POST /items` — create an item

Example requests:

```bash
curl http://localhost:3000/items

curl -X POST http://localhost:3000/items \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test item"}'
```

## Deploy online

This project is ready for services such as Render or Railway. For Render, connect the repository and choose **Blueprint**, which detects [render.yaml](render.yaml). Or create a Web Service manually with:

- **Build command:** `npm install`
- **Start command:** `npm start`
- **Environment variable:** no variable is required; the service supplies `PORT`

The hosting provider will give you a public HTTPS URL after deployment. The API keeps data in memory, so items reset whenever the service restarts.

After deployment, replace `https://your-service-url` in the examples below with the URL supplied by your hosting provider:

```bash
curl https://your-service-url/health
curl https://your-service-url/items
curl -X POST https://your-service-url/items \
  -H 'Content-Type: application/json' \
  -d '{"name":"Online test item"}'
```
