# Using LLMs Programmatically

## Generating an API Key

To use Large Language Models (LLM) programmatically, it is necessary to generate an API key. This key will allow you to authenticate your requests and access the features offered by the service.

1. **Connecting to the Platform** :

    - Access the SSP Cloud platform via your browser.
    - Log in with your SSO credentials.

2. **Generating the API Key** :

    - Once logged in, go to the section dedicated to API key management.
    - Click on your name, then on "Settings" and then on "Account".
    - A dedicated section allows you to generate an API key.

3. **Securing the Key** :
    - You will be able to access your key at any time.
    - Do not share it publicly to avoid unauthorized access.

## Understanding the API Provided by OpenWebUI

The API provided by OpenWebUI allows you to interact with LLMs programmatically. Here are some key points to understand and use this API.

### Available Endpoints

An OpenAI interface is available:

-   **Base Endpoint** : `https://llm.lab.sspcloud.fr/api`
-   **Authentication** : All requests must include your API key in the `Authorization` header.

A proxy to the Ollama interface is also available:

-   **Base Endpoint** : `https://llm.lab.sspcloud.fr/ollama`
-   **Authentication** : All requests must include your API key in the `Authorization` header.

Warning: Ollama programmable clients rarely have the capability to add an API key. This proxy is therefore difficult to use.
