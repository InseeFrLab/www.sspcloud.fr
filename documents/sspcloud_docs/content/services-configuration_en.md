# Service Configuration

After clicking on "New service" > "RStudio/Jupyter-python/VScode-python" > "Launch"

## Custom Name

To recognize the service and/or the configuration if saved by clicking on the bookmark symbol at the top right. If the name already exists among the saved configurations, saving will overwrite the old configuration.

Convenient for distinguishing different services of the same type (RStudio, Jupyter...).

## Share the Service

It is possible to share a service with a group of people by checking the "Share the service" box when opening the service. Other members of the group will see the service and can use it. Creating groups can be done by writing to administrators on Tchap (privately) or by email at [innovation@insee.fr](mailto:innovation@insee.fr), providing the group name, usernames of the members, and whether or not a associated storage space is needed on MinIO.

Info: For occasional needs, it is also possible to share a service that you have created with another person. Simply provide them with the URL (e.g., https://user-aaaaaaaaaaaaaa-xxxxxxx-x.user.lab.sspcloud.fr/) and the service password. The username remains **Onyxia**. Please note, it is recommended to change the service password during its launch (in the _Security_ tab) to avoid any leaks. You should also uncheck _Enable IP protection_ and _Enable network policy_ in the _Security_ tab. Only one person at a time can connect to an RStudio service.

## S3

## Kubernetes

## Init

### PersonalInit

A link to a shell script (sequence of Linux commands) that is executed right after the service is launched. Convenient for automating the setup of certain configurations.

This script link must be accessible on the internet, for example, on [https://git.lab.sspcloud.fr/](https://git.lab.sspcloud.fr/) with a public project or on [S3 storage](https://minio-console.lab.sspcloud.fr/) with a public file.

[Example of an initialization script](https://git.drees.fr/drees_code_public/ressources/tutos/-/blob/diffusion/contenu/init.sh) that clones a project from a private Gitlab instance, configures global RStudio options, automatically opens the cloned RStudio project, installs and selects French spelling correction, and customizes code snippets (_snippets_).
You can also find some initialization scripts on [our dedicated repo on github](https://github.com/InseeFrLab/sspcloud-init-scripts/).

Warning: The script is executed as a superuser (_Root_), and the files it creates become the property of the superuser. This leads to errors when these files are called, for example, RStudio configuration files. To give normal user rights (named _onyxia_) to their personal folder:

```bash
chown -R ${USERNAME}:${GROUPNAME} ${HOME}
```

### PersonalInitArgs

Options to pass to the initialization script, separated by spaces and can be subsequently called with `$1`, `$2`, etc.

For example, if you enter `file1.txt file2.txt` in the _PersonalInitArgs_ field and use this initialization script:

```bash
#!/bin/bash
touch $1
touch $2
```

The script will create two files, `file1.txt` and `file2.txt`, using the `touch` command.

## Onyxia

## Resources

## Networking

## Security

### Password

This is the password to enter when opening a service, which is provided by "Copy the password" on the service page. It is supplied by the general parameter "Password for your services," which can be found in "My Account" > "Account Information," unless a specific one is defined at the service level.

### Enable IP Protection

If checked, the service is only accessible from a single IP. Uncheck it if you wish to work from different locations.

### Enable Network Policy

## Git

To learn how to use this tab, see the [dedicated page](./version-control_en.md).

Warning: It is not possible to automatically clone a private project from a private instance (i.e., other than gitlab.com and github.com). To do so, you will need to use a shell script as indicated [here](#init).

### Enabled

If checked, configure Git and attempt a clone when the service starts.

### Name

The name that will appear in the commits (not the Gitlab or Github account username).

### Email

The email address that will appear in the commits (not necessarily the email associated with the Gitlab or Github account).

### Cache

### Token

Access token defined on the platform used (Gitlab, Github...).

### Repository

The URL obtained from the platform used (Gitlab, Github...) by clicking on "Clone" > HTTPS.

In the format:

```bash
https://github.com/InseeFrLab/docs.sspcloud.fr.git
```

### Service

### Discovery

### Persistence

### Vault

To learn how to use this tab, see the [dedicated page](./secrets_en.md).
