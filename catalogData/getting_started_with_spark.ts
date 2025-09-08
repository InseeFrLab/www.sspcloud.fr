import type { EducationalResource } from "./__index";
import spark_png_url from "./__assets/spark.png";
import python_jpg_url from "./__assets/python.jpg";
import vault_svg_url from "./__assets/vault.svg";
import kub_png_url from "./__assets/kub.png";
import hive_svg_url from "./__assets/hive.svg";
import redash_svg_url from "./__assets/redash.svg";

export const getting_started_with_spark: EducationalResource.Collection = {
    name: {
        fr: "Initiation à Spark",
        en: "Getting Started with Spark",
    },
    abstract: {
        fr: "Parcours de formation au calcul distribué avec Spark pour du traitement de données à grande échelle.",
        en: "Training course on distributed computing with Spark for large-scale data processing.",
    },
    imageUrl: spark_png_url,
    parts: [
        {
            name: {
                fr: "1. Introduction à Spark",
                en: "1. Introduction to Spark",
            },
            abstract: {
                fr: "Bases d'architecture et premiers exemples",
                en: "Architecture basics and first examples",
            },
            authors: ["Inseefrlab"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«1-introduction%201-introduction.ipynb»&name=1_Intro_spark",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«1-introduction%201-introduction-en.ipynb»&name=1_Intro_spark",
            },
        },
        {
            name: {
                fr: "2. Datalake S3",
                en: "2. S3 Datalake",
            },
            abstract: {
                fr: "Faire du spark avec comme source et destination un système de fichier hadoop compatible : S3",
                en: "Using Spark with an S3-Compatible Hadoop File System as Source and Destination",
            },
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2-datalake%202-datalake.ipynb»&name=2_Datalake",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2-datalake%202-datalake-en.ipynb»&name=2_Datalake",
            },
        },
        {
            name: {
                fr: "2.2 Données chiffrées sur S3",
                en: "2.2 Encrypted Data on S3",
            },
            abstract: {
                fr: "Utiliser une donnée chiffrée sur S3, définir vos propres clés de chiffrement avec les clés de chiffrement fournies par Vault (SSE-C).",
                en: "Using Encrypted Data on S3: Define Your Own Encryption Keys with Keys Provided by Vault (SSE-C)",
            },
            authors: ["Inseefrlab"],
            tags: ["deepen", "Notebook", "Python", "Data Science Training"],
            imageUrl: vault_svg_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2b-vault-s3-sseC%202b-vault-s3-sseC.ipynb»&vault.secret=«diffusion/spark-lab/2b-vault-s3-sseC»&vault.directory=«tm8enk»&name=2b_vault-s3-sseC",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2b-vault-s3-sseC%202b-vault-s3-sseC-en.ipynb»&vault.secret=«diffusion/spark-lab/2b-vault-s3-sseC»&vault.directory=«tm8enk»&name=2b_vault-s3-sseC",
            },
        },
        {
            name: {
                fr: "3. Spark et Kubernetes",
                en: "3. Spark and Kubernetes",
            },
            abstract: {
                fr: "Faire du Spark dans un cluster Kubernetes",
                en: "Running Spark in a Kubernetes Cluster",
            },
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: kub_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3-spark-kubernetes%203-spark-kubernetes.ipynb»&name=3_Spark_Kubernetes",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3-spark-kubernetes%203-spark-kubernetes-en.ipynb»&name=3_Spark_Kubernetes",
            },
        },
        {
            name: {
                fr: "3.2 Bases de spark",
                en: "3.2 Basics of Spark",
            },
            abstract: {
                fr: "Lazy evaluation, actions, transformations et cache",
                en: "Lazy evaluation, actions, transformations et cache",
            },
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: kub_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3b-bases-spark%203b-bases-spark.ipynb»&name=3_Spark_bases",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3b-bases-spark%203b-bases-spark-en.ipynb»&name=3_Spark_basics",
            },
        },
        {
            name: {
                fr: "4. Le format de données parquet",
                en: "4. The Parquet Data Format",
            },
            abstract: {
                fr: "Notion de partitions et format parquet",
                en: "Concept of Partitions and Parquet Format",
            },
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«4-format-parquet%204-format-parquet.ipynb»&name=4_parquet",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«4-format-parquet%204-format-parquet-en.ipynb»&name=4_parquet",
            },
        },
        {
            name: {
                fr: "5. Hive-metastore et metadonnées",
                en: "5. Hive-metastore and metadata",
            },
            abstract: {
                fr: "Metadonnées des tables d'un datalake",
                en: "Table Metadata in a Data Lake",
            },
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: hive_svg_url,
            timeRequiredInMinutes: 60,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«5-hive-metastore%205-hive-metastore.ipynb»&name=5_Metastore",
                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«5-hive-metastore%205-hive-metastore-en.ipynb»&name=5_Metastore",
            },
        },
        {
            name: "6. Spark-thrift et redash",
            abstract:
                "Et si on faisait simplement du SQL en externalisant le driver spark et un outil de visualisation : redash",
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: redash_svg_url,
            timeRequiredInMinutes: 60,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/6-spark-thrift-server»&vault.directory=«tm8enk»&name=6_spark_thrift_server",
        },
        {
            name: "7. Spark streaming",
            abstract:
                "Analyse de tweets. Notions de batch, micro-batch, streaming tout dépend de la vélocité recherchée.",
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/7-spark-streaming»&vault.directory=«tm8enk»&name=7_spark_streaming",
        },
        {
            name: "8. Spark Graphx",
            abstract: "Analyse de tweets avec l'utilisation de graph Spark",
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/8-spark-graphx»&vault.directory=«tm8enk»&name=8_spark_graphx",
        },
        {
            name: "9. Spark GPU",
            abstract: "A la découverte des GPUs avec spark",
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark-gpu?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/9-spark-gpu»&vault.directory=«tm8enk»&name=9_spark_gpu",
        },
        {
            name: "10. SparkR",
            abstract: "R pour de gros volumes",
            authors: ["Inseefrlab"],
            tags: ["consolidate", "Tutorial", "R", "Data Science Training"],
            imageUrl: spark_png_url,
            timeRequiredInMinutes: 60,
            articleUrl: "https://minio.lab.sspcloud.fr/projet-spark-lab/SparkR.html",
        },
        {
            name: "Virtualisation des données sur Onyxia",
            abstract: "Pré-requis : avoir lancé hive-metastore",
            authors: ["Inseefrlab", "Frédéric Comte"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Fopenlab%2F-%2Fraw%2Fmain%2Finit-notebook.sh%C2%BB&name=openlab",
        },
    ],
};
