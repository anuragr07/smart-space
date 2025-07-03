# Smart-Space
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/anuragr07/smart-space)

Smart-Space is a comprehensive smart home management system featuring an Android application and a Node.js backend. It allows users to control and monitor various smart devices, including lights and plugs from different brands like Philips Hue, Yeelight, and Shelly, all from a single interface. The application also provides energy consumption analytics, making it a powerful tool for managing a smart home environment.

A key feature is the "Landlord Portal," which provides an aggregated view of energy consumption across multiple user profiles, useful for property management scenarios.

## Project Structure

The repository is organized into two main components:

-   `SmartSpace3/`: The native Android application (frontend).
-   `Wb-services/`: The Node.js web service and Python control scripts (backend).

### `SmartSpace3` (Android Application)

The frontend is an Android application built with Java. It provides a user-friendly interface for managing smart home devices.

**Key Features:**
-   **User Authentication**: Secure login for different users.
-   **Dashboard**: A home screen that lists all rooms associated with the logged-in user.
-   **Room Management**: View and interact with all devices within a specific room.
-   **Device Control**:
    -   Toggle power On/Off for all supported devices.
    -   Adjust brightness and color for smart lights.
    -   Select pre-defined scenes.
-   **Energy Monitoring**:
    -   Displays real-time power, voltage, and current for Shelly smart plugs.
    -   Visualizes historical energy usage through line charts.
-   **Settings & Support**: Includes account settings, a contact page, and a landlord portal.

### `Wb-services` (Backend)

The backend is built with Node.js and Express, serving a RESTful API for the Android client. It communicates with a MongoDB database for data persistence and executes Python scripts to control smart devices on the local network.

**Components:**
-   **API Server (`index.js`):** The main entry point for the Express server. It defines routes and connects to the MongoDB database.
-   **Routes**: Handles API requests for different device types (Hue, Yee, Shelly), user profiles, and energy data logging.
-   **Controllers**: Contains the business logic for handling API requests.
-   **Models**: Defines Mongoose schemas for `User`, `Profile`, `KitchenTable`, and `LaundryTable` data.
-   **Python Scripts (`Routes/*/Scripts/`):** A collection of scripts that use libraries like `phue` and `yeelight`, and direct HTTP requests to interface with the physical smart devices.

## Architecture

The system follows a client-server architecture:

1.  **Android App (Client)**: Makes HTTP requests to the Node.js backend to fetch data and send commands.
2.  **Node.js API (Server)**: Acts as a central hub. It processes requests from the app, queries the MongoDB database, and triggers the appropriate Python scripts via `child_process`.
3.  **Python Scripts**: Execute on the server to send commands directly to the smart devices over the local network.
4.  **MongoDB (Database)**: Stores user credentials, device configurations, room layouts, and energy consumption logs.

## Setup and Installation

To run this project, you need to set up both the backend server and the Android application.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd Wb-services/web-services
    ```
2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```
3.  **Install Python dependencies:**
    Ensure you have Python 3 and pip installed.
    ```bash
    pip install phue yeelight requests python-dotenv
    ```
4.  **Configure Environment Variables:**
    Create a `.env` file in the `Wb-services/web-services` directory and add the following, replacing the placeholder values with the IP addresses of your devices and your MongoDB connection string.
    ```
    HUE_IP='YOUR_HUE_BRIDGE_IP'
    YEE_IP='YOUR_YEELIGHT_IP'
    SHELLY_IP_1='YOUR_SHELLY_PLUG_1_IP'
    SHELLY_IP_2='YOUR_SHELLY_PLUG_2_IP'
    API_IP='YOUR_SERVER_IP_AND_PORT'
    ```
    Update the MongoDB connection URI in `index.js`:
    ```javascript
    const uri = "mongodb+srv://<user>:<password>@<cluster-uri>/SmartSpace";
    ```
5.  **Start the server:**
    ```bash
    npm run devStart
    ```
    The server will start on port 3000 by default.

### Android App Setup

1.  **Open Project**: Open the `SmartSpace3` directory in Android Studio.
2.  **Configure API URL**: In the Android project files, locate all hardcoded instances of the API URL (`http://174.6.73.177:3000/`) and replace them with the IP address and port of your running backend server. Key files to check include:
    -   `UserLoginTask.java`
    -   `DeviceListFetcher.java`
    -   `ShellyDataFetcher.java`
    -   `GraphStatFetcher.java`
    -   `ProfileListFetcher.java`
3.  **Build and Run**: Build the project and run it on an Android emulator or a physical device. The device must be on the same local network as your backend server and smart devices.
