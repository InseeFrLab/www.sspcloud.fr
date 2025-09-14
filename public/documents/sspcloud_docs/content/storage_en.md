# Data Storage

## Principles

The file storage solution associated with Datalab is [MinIO](https://min.io), an object storage system based on the cloud, compatible with Amazon's S3 API. In practice, this has several advantages:

-   Stored files are easily accessible anywhere: a file is directly accessible via a simple URL that can be shared.
-   It is possible to access stored files directly within the data science services (R, Python...) offered on Datalab, without needing to copy the files locally beforehand, which greatly improves the reproducibility of analyses.

![MinIO Schema](./img/minio.svg)

## Manage your data

### Import data

The [My Files](https://datalab.sspcloud.fr/my-files/) page on Datalab is presented as a file explorer showing the different buckets that the user has access to.

Each user has a personal bucket by default to store their files. Within this bucket, two options are possible:

-   "create a directory": creates a directory in the current bucket/folder, hierarchically, as in a traditional file system;
-   "upload a file": upload one or more files to the current directory.

Note: The data storage graphical interface on Datalab is still under construction. It may therefore present responsiveness issues. For frequent operations on file storage, it may be preferable to interact with MinIO via the terminal.

### Sharing data

The access control policy for S3 storage **by default prohibits** access to other users' buckets on SSP Cloud, **except for the `diffusion` folder** directly at the root of each bucket, which is readable by all users.

To share data, simply create a `diffusion` folder directly at the root of your personal bucket and place the items you want to make accessible to other users of the platform.

It is also possible to manually configure the sharing policy to fine-tune permissions. To do this, it is currently necessary to interact with **MinIO** via a terminal, which allows access to advanced features.

Using [MinIO Client](https://min.io/docs/minio/linux/reference/minio-mc.html), you can make a folder publicly accessible with the following command:

```bash
mc anonymous set download s3/<your username>/<the folder you want to make public>
```

This command grants public download rights for the specified folder.

For more specific access control needs, such as managing anonymous or restricted access rights, see the [official MinIO Client documentation](https://min.io/docs/minio/linux/reference/minio-mc/mc-anonymous.html).

An interactive tutorial explaining how to use VSCode within the datalab to share an S3 folder is available [here](https://app.tango.us/app/workflow/Mettre-un-dossier-S3-en-publique-90b131c8ebff4a71904d1b0bdf3e108b).

Caution: In accordance with the [terms of use](https://datalab.sspcloud.fr/custom-resources/tos_fr.md), only non-sensitive data (e.g. _open data_) may be stored on the SSPCloud Datalab. A file having a "private" sharing status is not sufficient to guarantee its confidentiality.

## Use data stored on MinIO

The access identifiers required to access data on MinIO are pre-configured in the various Datalab services, available as [environment variables](./secrets_en.md). Thus, importing and exporting files from services is greatly facilitated.

### Setup

<details>
<summary>R</summary>

In R, interaction with an S3-compatible file system is made possible by the `aws.s3` library.

```r
library(aws.s3)
```

</details>

<details>
<summary>Python</summary>

In Python, interaction with an S3-compatible file system is made possible by two libraries:

-   [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html), a library created and maintained by Amazon;
-   [S3Fs](https://s3fs.readthedocs.io/en/latest/), a library that allows interacting with stored files like a classic filesystem.

For this reason and because S3Fs is used by default by the [pandas](https://pandas.pydata.org) library to manage S3 connections, we will present MinIO storage management via Python using this library.

```python
import os
import s3fs

# Create filesystem object
S3_ENDPOINT_URL = "https://" + os.environ["AWS_S3_ENDPOINT"]
fs = s3fs.S3FileSystem(client_kwargs={'endpoint_url': S3_ENDPOINT_URL})
```

</details>

<details>
<summary>mc (terminal)</summary>

MinIO offers a command-line client (`mc`) that allows interaction with the storage system similar to a classic UNIX filesystem. This client is installed by default and accessible via a terminal in the various Datalab services.

The MinIO client offers basic UNIX commands such as ls, cat, cp, etc. The complete list is available in the [client documentation](https://docs.min.io/docs/minio-client-complete-guide.html).

</details>

### Listing the files in a bucket

<details>
<summary>R</summary>

```r
aws.s3::get_bucket("donnees-insee", region = "")
```

</details>

<details>
<summary>Python</summary>

```python
fs.ls("donnees-insee")
```

</details>

<details>
<summary>mc (terminal)</summary>

The Datalab storage is accessible via the alias `s3`. For example, to list the files in the bucket `donnees-insee`:

```bash
mc ls s3/donnees-insee
```

</details>

### Importing data in a service

<details>
<summary>R</summary>

```r
BUCKET <- "donnees-insee"
FILE_KEY_S3 <- "diffusion/BPE/2019/BPE_ENS.csv"

df <-
  aws.s3::s3read_using(
    FUN = readr::read_delim,
    # Put FUN options here
    delim = ";",
    object = FILE_KEY_S3,
    bucket = BUCKET,
    opts = list("region" = "")
  )
```

</details>

<details>
<summary>Python</summary>

The S3Fs package allows you to interact with files stored on MinIO as if they were local files. The syntax is therefore very familiar to Python users. For example, to import/export tabular data via `pandas`:

```python
import pandas as pd

BUCKET = "donnees-insee"
FILE_KEY_S3 = "diffusion/BPE/2019/BPE_ENS.csv"
FILE_PATH_S3 = BUCKET + "/" + FILE_KEY_S3

with fs.open(FILE_PATH_S3, mode="rb") as file_in:
    df_bpe = pd.read_csv(file_in, sep=";")
```

</details>

<details>
<summary>mc (terminal)</summary>

To copy data from a MinIO bucket to the local service:

```bash
mc cp s3/donnees-insee/diffusion/BPE/2019/BPE_ENS.csv ./BPE_ENS.csv
```

</details>

Warning: **Copying files to the local service is generally not a good practice**: it limits the reproducibility of analyses and becomes quickly impossible with large volumes of data. Therefore, it is preferable to get into the habit of importing data directly into `R`/`Python`.

### Exporting data to MinIO

<details>
<summary>R</summary>

```r
BUCKET_OUT = "<my_bucket>"
FILE_KEY_OUT_S3 = "my_folder/BPE_ENS.csv"

aws.s3::s3write_using(
    df,
    FUN = readr::write_csv,
    object = FILE_KEY_OUT_S3,
    bucket = BUCKET_OUT,
    opts = list("region" = "")
)
```

</details>

<details>
<summary>Python</summary>

```python
BUCKET_OUT = "<my_bucket>"
FILE_KEY_OUT_S3 = "my_folder/BPE_ENS.csv"
FILE_PATH_OUT_S3 = BUCKET_OUT + "/" + FILE_KEY_OUT_S3

with fs.open(FILE_PATH_OUT_S3, 'w') as file_out:
    df_bpe.to_csv(file_out)
```

</details>

<details>
<summary>mc (terminal)</summary>

To copy data from the local service to a bucket on MinIO:

```bash
mc cp local/path/to/my/file.csv s3/<my_bucket>/remote/path/to/my/file.csv
```

</details>

### Renewing expired access tokens

Access to MinIO storage is possible via a personal access token, which is valid for 7 days and automatically regenerated at regular intervals on SSP Cloud. When a token has expired, services created before the expiration date (using the previous token) can no longer access storage, and the affected service will appear in red on the [My Services](https://datalab.sspcloud.fr/my-services) page. In this case, there are two options:

-   Open a new service on Datalab, which will have a default, up-to-date token.
-   Manually replace expired tokens with new ones. Scripts indicating how to do this for different MinIO uses (`R`/`Python`/`mc`) are available [here](https://datalab.sspcloud.fr/account/storage). Simply choose the relevant script and execute it in your current working environment.

## Advanced Usage

### Creating a Service Account

For security reasons, the authentication to MinIO used by default in the interactive services of the SSP Cloud relies on a temporary access token. In the context of projects involving periodic processing or the deployment of applications, a more permanent access to MinIO data may be required.

In this case, a service account is used, which is an account tied to a specific project or application rather than an individual. Technically, instead of authenticating to MinIO via a triplet (access key id, secret access key, and session token), a pair (access key id, secret access key) will be used, granting read/write permissions to a specific project bucket.

The procedure for creating a service account is described below.

<details>
<summary>Graphical Interface</summary>

-   Open the [MinIO console](https://minio-console.lab.sspcloud.fr)
-   Open the `Access Keys` tab
-   The service account information is pre-generated. It is possible to modify the access key to give it a simpler name.
-   The `policy` specifying the rights is also pre-generated. Ideally, the policy should be restricted to only cover the project bucket(s).
-   Once the service account is generated, the access key and secret access key can be used to authenticate the services/applications to the specified bucket.

</details>

<details>
<summary>Terminal (mc)</summary>

-   Create a service on the SSP Cloud with up-to-date MinIO access. Confirm that the connection works with:

```bash
mc ls s3/<username>
```

-   Generate a `policy.json` file with the following content, replacing `project-<my_project>` with the name of the relevant bucket (twice):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": ["s3:*"],
            "Resource": [
                "arn:aws:s3:::projet-<my_project>",
                "arn:aws:s3:::projet-<my_project>/*"
            ]
        }
    ]
}
```

-   In a terminal, generate the service account with the following command:

```bash
mc admin accesskey create s3 $AWS_ACCESS_KEY_ID --access-key="<access-key>" --secret-key="<secret-access-key>" --policy="policy.json"
```

replacing `<access-key>` and `<secret-key>` with names of your choice. Ideally, give a simple name for the access key (e.g., `sa-project-projectname`) but a complex key for the secret access key, which can be generated, for example, with the `gpg` client:

```bash
gpg --gen-random --armor 1 16
```

-   You can now use the access key and secret access key to authenticate the services/applications to the specified bucket.

</details>

Warning: Note that the generated authentication information appears only once. They can then be stored in a password manager, a secret storage service like Vault, or via the Onyxia project settings feature, which allows importing the service account directly into services at the time of their configuration.
