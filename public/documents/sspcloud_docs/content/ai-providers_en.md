# Using AI models in Onyxia

Onyxia lets you connect **AI model providers (AI providers)** to your interactive services.

Depending on your organization's configuration, you can use providers already available on your instance or add your own providers. You then choose which models you want to make available in your services.

Once configured, your providers and models can be used directly from compatible services launched in Onyxia.

### How does it work?

The process can be summarized in three steps:

**1. Connect a provider → 2. Choose your models → 3. Use them in your services**

<br />

---

## 1. Access your AI providers

Go to:

**My Account → AI Providers**

This page lists the AI providers available for your account.

![Overview of the AI Providers page showing available providers and selected models.](./img/ai-providers-overview.png)

<small>Find your providers and models under My Account → AI Providers.</small>

<br />

You may find two types of providers:

### Providers offered by your organization

Your organization may make one or more AI providers available directly in Onyxia.

Depending on their configuration, they may be **already connected to your account**, or require authentication before you can use them for the first time.

For example, the connection may be established automatically using your Onyxia account, or require credentials supplied by the provider.

### Custom providers

You can also add your own provider when it is compatible with Onyxia.

This lets you use an external AI service you already have access to, for example.

<br />

---

## 2. Connect a provider

The connection status is shown directly on each provider:

**Connected**  
The provider is ready to use.

**Setup required**  
Configuration or authentication is required before you can use the provider.

**Connection error**  
Onyxia cannot connect to the provider. Check your connection details or try again.

For a provider that requires configuration, open **Manage** and enter the requested information.

> The information required depends on the provider and the configuration chosen by your organization.

![Possible connection statuses for an AI provider in Onyxia.](./img/ai-providers-status.png)

<small>Each provider displays its connection status.</small>

<br />

---

## 3. Add your own provider

Select **Add a new custom AI provider** from the AI Providers page.

First, choose the type of provider you want to connect, then enter the necessary information, for example:

-   the name you want to give it;
-   its API URL;
-   your API key, when required.

Use **Test connection** to check the connection.

Once the connection is established, Onyxia retrieves the models available from the provider.

You can then select the ones you want to use and add the provider to your account.

![Configuration form for a custom AI provider.](./img/ai-provider-add.png)

<small>Enter your connection details and test your provider.</small>

<br />

---

## 4. Choose the available models

A provider may offer access to several models.

From **AI Providers**, select the models you want to make available in your services.

You do not need to enable the provider's entire catalog: you can keep only the models you need.

You can change this selection at any time from the provider list or from **Manage**.

![Selection of the models available from an AI provider.](./img/ai-provider-model-selection.png)

<small>Choose the models you want to use.</small>

<br />

### Default model

You can also choose a **default model**.

When a service compatible with AI providers is launched, this model may be used as the initial choice.

You can still select another model from the service configuration, provided it has been selected in the provider list.

<br />

---

## 5. Use your models in a service

Once your providers are configured, Onyxia makes their connection details and the selected models available to **compatible interactive services**.

You can use your models from your working environment without having to manually reconfigure your provider each time you launch a service.

Depending on the service, you may also be able to choose or change the model being used.

> How models are used depends on the service. Not all services in the catalog necessarily support AI providers.

![AI model configuration when launching an Onyxia service.](./img/ai-providers-use-in-services.png)

<small>Find your models when configuring a compatible service.</small>

<br />

### In VS Code

In VS Code, open **Continue** from the tab bar on the left to use your models.

### From the terminal in VS Code, RStudio or Jupyter

In any of these compatible services, open a terminal and launch **OpenCode** with the command:

```bash
opencode
```

<br />

---

## 6. Manage a provider

Select **Manage** on a provider to access its settings.

You can:

**Connection details**  
View the information Onyxia uses to connect to the provider and test the connection.

**Manage models**  
Add or remove the models you want to use.

**Documentation**  
Access documentation for the provider, its API or the available models.

For a provider managed by your organization, some information may be configured by the administrator and cannot be changed.
