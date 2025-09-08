import type { EducationalResource } from "./-index";
import utilitr_png_url from "./-assets/utilitr.png";

export const documentation_utilitr: EducationalResource = {
    name: "Documentation UtilitR",
    abstract:
        "Une documentation collaborative et open source sur R, destinée en premier lieu aux agents de l’Insee.",
    authors: ["UtilitR"],
    tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
    imageUrl: utilitr_png_url,
    articleUrl: "https://www.book.utilitr.org/",
    deploymentUrl:
        "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=utilitr&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.9.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
};
