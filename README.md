# SmartShopr

Autonomous shopping used to be expensive to implement, requiring countless hours and thousands of dollars in cameras and equipment setup.

We are changing that. With SmartShopr, your cart becomes the point of automation. By using non-expensive yet reliable sensors implemented directly in the cart, we detect whenever you put something in the cart, automatically adding it to your bill (which can be monitored live on your phone). After your cart goes over a physical line, we automatically checkout and bill your items, making it so you don’t have to stop anywhere.

# Project Setup

## `backend`

The backend is a NextJS app that connects with the MongoDB Database.

* Install the latest LTS NodeJS and **pnpm**
* Use `pnpm install` to install all required dependencies.
* Copy `.env.example` to `.env`, and change the values.
* Use `pnpm generate` to generate the database bindings.
* Use `pnpm dev` to start a local dev server.

## `cart-sensor`

This is a Python script that operates the cart sensor and sends data to the backend. **Make sure a webcam is connected.**

* Install the dependencies in `requirements.txt`
* Run the `main.py` file.

## TODO

* Change app to support multiple carts, selecting cart via NFC.
* Implement Product Suggestion AI.
* Switch from Polling to WebSockets.
