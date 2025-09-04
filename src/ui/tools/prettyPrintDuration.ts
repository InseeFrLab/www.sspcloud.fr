export function formatDuration(timeDuration: number): string {

    const minutes = Math.floor(timeDuration / (60 * 1_000));

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let result = "";

    if (hours > 0) {
        result += `${hours}h`;
    }
    if (remainingMinutes > 0) {
        result +=
            remainingMinutes === minutes
                ? `${remainingMinutes} minutes`
                : `${remainingMinutes}`;
    }

    return result;
}
