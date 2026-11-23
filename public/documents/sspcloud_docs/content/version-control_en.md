# Version control

## Why use version control?

Datalab is a shared platform: the resources used by services are shared among different users. As such, Datalab services operate on the model of ephemeral containers: in standard usage, the user launches a service, performs data processing, saves the code that enabled the processing, and deletes the service instance. Saving this code is greatly facilitated by the use of version control.

This performance consideration should not be seen as a constraint, however: version control is an essential development best practice. The benefits are numerous, both individually:

-   the local project is synchronized with a remote server, making loss of code virtually impossible;
-   the complete history of choices and changes made to the project is preserved;
-   the user can browse this history to look for changes that may have created errors, and decide at any time to revert to an earlier version of the project or certain files.

… and for collaborative projects:

-   simultaneous work on the same project is possible without risk of loss;
-   the user can share his modifications while benefiting from those of others;
-   it becomes possible to contribute to open-source projects, for which the use of Git is widely standard.

Warning: This tutorial aims to present how version control can be easily implemented using the tools available on Datalab. It does not present how Git works and therefore presupposes some familiarity with the tool. Many online resources can serve as an introduction; R users can, for example, follow [this training](https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/) and Python users [this course chapter](https://pythonds.linogaliana.fr/content/git/exogit.html).

## Connect your Git accounts to the Datalab

Although it is possible to use Git offline, the whole point of version control lies in synchronizing your local copy of a project (clone) with a remote repository (remote), hosted on a software forge such as [GitHub](https://github.com), [GitLab](https://about.gitlab.com), [Forgejo](https://forgejo.org) or [Bitbucket](https://bitbucket.org).

The Datalab lets you connect your accounts on these forges once, from your account page. Your services then get the credentials they need to clone, pull and push, and you can choose the repositories to clone when launching a service.

### How does it work?

**1. Connect a Git profile → 2. Choose your repositories when launching a service → 3. Work with Git in the service**

---

### 1. Access your Git profiles

Go to:

**My Account → Git**

The **Git profiles** section lists one card per forge, with its status:

-   **Connected**: the account is ready to use, the card shows the account you are connected with;
-   **Connection required**: sign in, or add an access token, to use this forge;
-   **Reconnect required**: your session or your token has expired, sign in again or replace the token.

You may find two kinds of profiles:

-   the profiles **provided by your organization**, for example the [GitLab forge of the SSP Cloud](https://git.lab.sspcloud.fr): select **Sign in** and authorize the Datalab in the window that opens;
-   the **custom Git profiles** you add yourself, see below.

Note: If nothing happens when you select **Sign in**, your browser probably blocked the window: allow popups for the Datalab and try again. Authentication may be required again when you start a new Datalab session.

### 2. Add your own Git profile

Select **Add a new custom Git profile**, then:

1. choose the forge type (GitHub, GitLab, Forgejo or Bitbucket) and, for a self-hosted instance, enter its URL;
2. optionally define a custom name;
3. paste a **personal access token** generated on the forge, the dialog links to the page that creates it.

The token needs read access to your profile, and read and write access to your repositories. For example, on GitHub, generate it from [this page](https://github.com/settings/tokens) with the _repo_ scope. Prefer a short expiration date: the card warns you before the token expires, and **Manage** lets you replace it.

The token is checked with the forge before being saved. To remove a profile, open **Manage** then **Delete profile**: the token still exists on the forge, revoke it there if you no longer need it.

Warning: Be sure to use the email address associated with your forge account in your account information. It is this address that effectively links the commits you make to your account on the forge.

---

### 3. Choose your repositories when launching a service

In the launch form of a compatible service (Jupyter, RStudio, VSCode…), open the **Git** section:

-   **My repositories**: choose a **Git profile**, then search your repositories and select those to clone, along with a **Branch** if you don't want the default one;
-   **Git URL**: paste the URL of a repository. A repository that is not on one of your connected forges is cloned without authentication, so it must be public.

The selected repositories are cloned into the service workspace when it starts.

Warning: Never put a username or a token in a repository URL: it would be saved with the launch configuration. Connect the forge instead.

### Work with Git in the service

The credentials of your connected Git profiles are handed over to the service: `git clone`, `git pull` and `git push` over HTTPS work from the terminal without typing a token.

### Via integrated graphical interfaces

The main code production services available on Datalab have a graphical interface to facilitate the use of Git:

-   RStudio: RStudio provides a native and fairly comprehensive graphical interface for Git. The [utilitR documentation](https://www.book.utilitr.org/03_Fiches_thematiques/Fiche_git_utilisation) presents its operation in detail.
-   Jupyter: the [jupyterlab-git plugin](https://github.com/jupyterlab/jupyterlab-git) provides a (fairly basic) interface between Jupyter and Git.
-   VSCode: VSCode natively offers a well-integrated graphical interface with Git and GitHub. A [detailed documentation](https://code.visualstudio.com/docs/editor/versioncontrol) presents the possibilities of the tool.

Warning: Graphical interfaces make it easier to get started with Git but never completely replace the use of the tool via a terminal due to necessarily imperfect integration. Therefore, it is useful to familiarize yourself with using Git via the terminal as early as possible.
