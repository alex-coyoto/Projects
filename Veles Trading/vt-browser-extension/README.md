# Veles Trading Browser Extension
This extension was written using vanilla JavaScript. It allows users to get the current value of BTC/USDT. Once the program was launched,
it creates a `WebWorker` object, which asynchronously receives data in another "thread" after a certain period of time and
sends it to the "main thread". `dataWorker.js` file is responsible for getting all the necessary data meanwhile `index.js` is responsible 
for displaying it to the user. This file starts and stops WebWorker also, so there is a two way connection between them.

There is `manifest.json` file at the root folder so the code can be interpreted as an extension.

The extension was successfully tested on Firefox, Yandex and Chrome browsers.

  **Launching (Chrome)**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218338371-c5d220ae-0fe0-4cda-9e39-0a0a981d8d4b.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
   **Launching (Firefox)**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218456550-6b0d8555-7732-4e30-92d5-938636cfa645.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
   **Launching (Yandex)**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218338402-ea8a4111-0119-46ae-8b6d-56f42db61787.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
   **Error handling**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218455559-c19e23f2-6a5a-4a78-9288-db890755eebc.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
