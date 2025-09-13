# Setting Up an Environment Using the SSP Cloud Platform

With SSP Cloud, you have the flexibility to create a custom, shareable link that launches a pre-configured service for learners, or, for an even smoother experience, add a link directly within tutorials referential. These options provide an easy path for starting a training session.

1. **Generate a link** that contains all the necessary configurations for your chosen environment, and share this link with apprentices. They can then access the environment instantly, with everything they need already set up.
2. **Share this link** with the learners. You can create your own tutorial referential by publishing them through a GitHub repository, using a static website, or [adding them to the Tutorials Section on the SSP Cloud Platform](https://docs.sspcloud.fr/en/content/tutorials/set-up-environment.html#publish-your-training-course-in-the-tutorials-section-on-the-ssp-cloud-platform). By choosing the latter, you can create a custom “launch” button within SSP Cloud's interface, mapped to your specific training environment. This makes it even easier for learners to access—just one click opens the configured environment directly.

The possibilities for sharing your links are endless. Choose the one that best fits your needs! ✨

## How the Link Works

The setup link is a powerful feature in SSP Cloud, allowing you to define all aspects of the training environment. In order to get your link, feel free to use the SSP Cloud platform and configure a service. Then click on the `Copy auto launch URL` button.
By clicking the link, all learners launch the exact same environment, fully configured with the specified configuration and ready to use. This uniformity is a huge benefit in training scenarios: everyone works with the same setup, eliminating any inconsistencies that might arise from varied installations.

The link can include :

-   service selected to decide on the language and framework for the training
-   the resources to define the amount of computational resources required, including memory, CPU, and storage. This ensures that the environment matches the needs of the course content, even for intensive machine learning tasks
-   an initialization script to ensure all learners start with the same setup. [See here for initialization scripts examples](https://github.com/InseeFrLab/sspcloud-init-scripts). This script can:
    -   Clone the training repository with all relevant notebooks and materials.
    -   Install any necessary libraries, dependencies... so there’s nothing to install locally.
-   and many more ...

Here's an example link:
https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20types-variables%C2%BB&security.allowlist.enabled=false

This link automatically launches a Jupyter Notebook environment - you can change it to Vscode if prefered - on the sspcloud and configures it with pre-installed libraries and scripts, thanks to the `init.personalInit` argument. It sets up a predefined training module, in this case, "Python Fundamentals: Types and Variables". All learners will start with this exact configuration. This eliminates the common issues of dependency mismatches and local installation errors, so learners can jump directly into the material.

## Publish Your Training Course in the Tutorials Section on the SSP Cloud Platform

In order to add a tutorial on the [SSP Cloud dedicated place] (https://www.sspcloud.fr/formation) you can [submit a PR on github](https://github.com/InseeFrLab/www.sspcloud.fr/blob/main/src/lib/getHelmDatasciencePackageCount.ts).

There, you'll have the possibility to define the name of your course, fill an abstract to inform the users of its content, specify the authors, the date of creation of the course, to add tags and keywords... To set an image to represent the course, the number of expected hours to follow the course and an article URL if you want to direct the users to an external resource to explain the content of the course. Finally give the URL to launch the preconfigured service. 🚀️

To organize the course effectively, you can divide it into different parts. Use this feature to group related tutorials within a course folder, allowing learners to follow a structured, progressive format.

For example, you can follow this pattern

```yaml
{
    "name":
        {
            "fr": "Nom d'un dossier contenant des cours",
            "en": "Name of a folder training",
        },
    "abstract":
        {
            "fr": "Description de ce que contient le dossier.",
            "en": "Description of the content of the folder.",
        },
    "imageUrl": anImgUrl,
    "tags": ["learn", "discover"],
    "parts":
        [
            {
                "name":
                    {
                        "fr": "1. Un titre descriptif pour la première partie de la formation",
                        "en": "1. A descriptive title for the first part of the course",
                    },
                "abstract":
                    {
                        "fr": "Ici se trouve une description de la première partie de la formation",
                        "en": "Here lies a description of the first part of the course",
                    },
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "Discover the platform",
                "imageUrl": anImgUrl,
                "timeRequired": 1,
                "articleUrl": anArticleUrl,
                "deploymentUrl":
                    {
                        "fr": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/myinitscript",
                        "en": "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/InseeFrLab/myinitscript",
                    },
            },
            {
                "name":
                    {
                        "fr": "2. Un titre descriptif pour la seconde partie de la formation",
                        "en": "2. A descriptive title for the second part of the course",
                    },
                "abstract":
                    {
                        "fr": "Ici se trouve une description de la deuxième partie de la formation",
                        "en": "Here lies a description of the second part of the course",
                    },
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "Discover the platform",
                "imageUrl": anImgUrl,
                "timeRequired": 1,
                "deploymentUrl":
                    {
                        "fr": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/myinitscript",
                        "en": "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/InseeFrLab/myinitscript",
                    },
            },
        ],
}
```

## Make your data available to everyone 📁️

If your course requires data, you can make it accessible either by sharing a public link (allowing open access) or by placing the data in a "diffusion" folder within your bucket on the platform. This second option automatically makes the data available to all SSP Cloud users, providing seamless integration within the platform environment and consequently reduce the network traffic.

[Click here for more information](https://docs.sspcloud.fr/en/content/storage.html#sharing-data)

## Conclusion

The SSP Cloud combined with Notebooks creates an ideal environment for teaching and learning programming or data science. The combination of instant, cloud-based environments with the interactive nature of notebooks allows for engaging, reproducible, and scalable training sessions. By leveraging these tools, educators can focus on what matters most, eg teaching and learning, without worrying about setup issues or inconsistent environments.

For your next training session, try setting up your environment using the SSP Cloud, and see how they can transform the learning experience! 👩‍🎓️
