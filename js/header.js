const header = {
    about: {
        pOne: "Timothy M. McGowen is a writer of the fantastic. Although generally, this falls within the fantasy genre, he doesn't feel constrained to stay within those boundaries. Like all great writers, Timothy loves to read, but more than that, he loves a good story.",
        pTwo: "Timothy presently lives in Arizona with his wife and two daughters. He has written stories his entire life but marks 2017 as a defining moment when he became a writer. What followed was two years of consistent writing, leading up to his first self-published novel on 06/05/2020. "
    },
    upcomingReleases: [
        {
            title: "Last Born of Ki'dath - Reborn",
            releaseData: "08-05-2020"
        },
        {
            title: "Last Born of Ki'dath - Death's Bargain",
            releaseData: "10-05-2020"
        },
        {
            title: "Last Born of Ki'dath - Rebirth",
            releaseData: "12-05-2020"
        }
    ]
}

// Loops through the release data
const releases = title => {
    return `
<div class="book-info">
    <p>${title.title}</p>
    <p>${title.releaseData}</p>
</div>`;

}

// Inserts the About me Data
document.getElementById("about-me").innerHTML = `
    <h3>About Me</h3>
    <p>${header.about.pOne}<br><br>
    ${header.about.pTwo}</p>
`;

document.getElementById("upcoming-releases").innerHTML = `${header.upcomingReleases.map(releases).join('')}`;
