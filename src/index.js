const url = 'https://api.github.com/users/';
const get = (id) => document.getElementById(`${id}`);
const searchBar = get('search-bar');
const search = get('search');
const avatar = get('avatar');
const nickname = get('nickname');
const username = get('username');
const avatarContainer = get('avatar-container');
const type = get('type');
const bio = get('bio');
const followers = get('followers');
const followersLink = get('followers-link');
const following = get('following');
const followingLink = get('following-link');
const repoValue = get('repo-value');
const repoText = get('repo-text');
const repoLink = get('repo-link');
const creationDate = get('creation-date');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const userLocation = get('location');
const website = get('website');
const email = get('email');
const twitter = get('twitter');
const favicon = get('favicon');
const themeStylesheetLink = get('themeStylesheetLink');
const theme = localStorage.getItem('data-theme');
const themeSelector = get('theme-selector');
const themeLabel = get('theme-label');
const themeIcon = get('theme-icon');
const themeIconDarkPath = '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9982 1.98884C12.1241 1.86297 12.2832 1.77556 12.457 1.73682C12.6308 1.69808 12.812 1.70962 12.9794 1.77009C14.3634 2.27195 15.5983 3.11487 16.57 4.22081C17.5416 5.32676 18.2185 6.65997 18.538 8.09703C18.8575 9.53408 18.8092 11.0285 18.3977 12.442C17.9862 13.8554 17.2247 15.1422 16.1837 16.1831C15.1428 17.2241 13.856 17.9856 12.4425 18.3971C11.0291 18.8087 9.53465 18.8569 8.09759 18.5374C6.66054 18.2179 5.32732 17.541 4.22138 16.5694C3.11543 15.5978 2.27251 14.3628 1.77066 12.9788C1.7101 12.8113 1.69854 12.6299 1.73735 12.456C1.77616 12.2821 1.86372 12.1229 1.98978 11.9969C2.11583 11.871 2.27517 11.7836 2.44911 11.745C2.62305 11.7064 2.8044 11.7181 2.97191 11.7788C4.201 12.2247 5.53175 12.3109 6.80809 12.0273C8.08443 11.7436 9.25341 11.1019 10.1779 10.1774C11.1025 9.25285 11.7442 8.08386 12.0278 6.80753C12.3115 5.53119 12.2253 4.20043 11.7794 2.97134C11.7187 2.80373 11.707 2.62227 11.7457 2.44825C11.7845 2.27423 11.872 2.11486 11.9982 1.98884V1.98884ZM14.0182 4.42009C14.1508 5.71314 13.9938 7.01951 13.5584 8.24426C13.123 9.469 12.4202 10.5814 11.5011 11.5005C10.5819 12.4196 9.46957 13.1224 8.24482 13.5578C7.02007 13.9932 5.71371 14.1503 4.42066 14.0176C5.00312 14.8254 5.75413 15.497 6.62171 15.9859C7.4893 16.4748 8.45275 16.7695 9.44541 16.8494C10.4381 16.9293 11.4362 16.7926 12.3709 16.4487C13.3055 16.1049 14.1543 15.5621 14.8585 14.8579C15.5627 14.1537 16.1054 13.3049 16.4493 12.3703C16.7932 11.4357 16.9298 10.4375 16.8499 9.44485C16.77 8.45218 16.4754 7.48873 15.9865 6.62115C15.4975 5.75356 14.8259 5.00256 14.0182 4.42009V4.42009Z" fill="white" />';
const themeIconLightPath = '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125ZM10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15V15ZM10 0C10.2486 0 10.4871 0.098772 10.6629 0.274587C10.8387 0.450403 10.9375 0.68886 10.9375 0.9375V2.8125C10.9375 3.06114 10.8387 3.2996 10.6629 3.47541C10.4871 3.65123 10.2486 3.75 10 3.75C9.75136 3.75 9.5129 3.65123 9.33709 3.47541C9.16127 3.2996 9.0625 3.06114 9.0625 2.8125V0.9375C9.0625 0.68886 9.16127 0.450403 9.33709 0.274587C9.5129 0.098772 9.75136 0 10 0V0ZM10 16.25C10.2486 16.25 10.4871 16.3488 10.6629 16.5246C10.8387 16.7004 10.9375 16.9389 10.9375 17.1875V19.0625C10.9375 19.3111 10.8387 19.5496 10.6629 19.7254C10.4871 19.9012 10.2486 20 10 20C9.75136 20 9.5129 19.9012 9.33709 19.7254C9.16127 19.5496 9.0625 19.3111 9.0625 19.0625V17.1875C9.0625 16.9389 9.16127 16.7004 9.33709 16.5246C9.5129 16.3488 9.75136 16.25 10 16.25ZM2.92875 2.92875C3.01581 2.84163 3.11919 2.77252 3.23297 2.72537C3.34675 2.67822 3.46871 2.65395 3.59188 2.65395C3.71504 2.65395 3.837 2.67822 3.95078 2.72537C4.06456 2.77252 4.16794 2.84163 4.255 2.92875L5.58 4.255C5.7456 4.43272 5.83575 4.66778 5.83147 4.91065C5.82718 5.15353 5.72879 5.38526 5.55703 5.55703C5.38526 5.72879 5.15353 5.82718 4.91065 5.83147C4.66778 5.83575 4.43272 5.7456 4.255 5.58L2.93 4.255C2.75444 4.07922 2.65583 3.84094 2.65583 3.5925C2.65583 3.34406 2.75444 3.10578 2.93 2.93L2.92875 2.92875ZM14.42 14.42C14.5958 14.2444 14.8341 14.1458 15.0825 14.1458C15.3309 14.1458 15.5692 14.2444 15.745 14.42L17.0712 15.745C17.2421 15.9217 17.3367 16.1585 17.3347 16.4043C17.3327 16.6501 17.2342 16.8853 17.0605 17.0592C16.8867 17.2331 16.6516 17.3318 16.4058 17.3341C16.16 17.3363 15.9231 17.2419 15.7463 17.0712L14.42 15.7463C14.3329 15.6592 14.2638 15.5558 14.2166 15.442C14.1695 15.3282 14.1452 15.2063 14.1452 15.0831C14.1452 14.96 14.1695 14.838 14.2166 14.7242C14.2638 14.6104 14.3329 14.5071 14.42 14.42V14.42ZM20 10C20 10.2486 19.9012 10.4871 19.7254 10.6629C19.5496 10.8387 19.3111 10.9375 19.0625 10.9375H17.1875C16.9389 10.9375 16.7004 10.8387 16.5246 10.6629C16.3488 10.4871 16.25 10.2486 16.25 10C16.25 9.75136 16.3488 9.5129 16.5246 9.33709C16.7004 9.16127 16.9389 9.0625 17.1875 9.0625H19.0625C19.3111 9.0625 19.5496 9.16127 19.7254 9.33709C19.9012 9.5129 20 9.75136 20 10ZM3.75 10C3.75 10.2486 3.65123 10.4871 3.47541 10.6629C3.2996 10.8387 3.06114 10.9375 2.8125 10.9375H0.9375C0.68886 10.9375 0.450403 10.8387 0.274587 10.6629C0.098772 10.4871 0 10.2486 0 10C0 9.75136 0.098772 9.5129 0.274587 9.33709C0.450403 9.16127 0.68886 9.0625 0.9375 9.0625H2.8125C3.06114 9.0625 3.2996 9.16127 3.47541 9.33709C3.65123 9.5129 3.75 9.75136 3.75 10ZM17.0712 2.92875C17.1584 3.01581 17.2275 3.11919 17.2746 3.23297C17.3218 3.34675 17.346 3.46871 17.346 3.59188C17.346 3.71504 17.3218 3.837 17.2746 3.95078C17.2275 4.06456 17.1584 4.16794 17.0712 4.255L15.745 5.58C15.6592 5.67211 15.5557 5.74599 15.4407 5.79723C15.3257 5.84847 15.2015 5.87602 15.0757 5.87824C14.9498 5.88046 14.8247 5.8573 14.708 5.81015C14.5913 5.763 14.4852 5.69282 14.3962 5.6038C14.3072 5.51477 14.237 5.40873 14.1898 5.292C14.1427 5.17526 14.1195 5.05023 14.1218 4.92435C14.124 4.79847 14.1515 4.67433 14.2028 4.55933C14.254 4.44433 14.3279 4.34083 14.42 4.255L15.745 2.93C15.9208 2.75444 16.1591 2.65583 16.4075 2.65583C16.6559 2.65583 16.8942 2.75444 17.07 2.93L17.0712 2.92875ZM5.58 14.42C5.75556 14.5958 5.85418 14.8341 5.85418 15.0825C5.85418 15.3309 5.75556 15.5692 5.58 15.745L4.255 17.0712C4.16856 17.1608 4.06515 17.2323 3.95079 17.2815C3.83644 17.3307 3.71343 17.3566 3.58895 17.3577C3.46447 17.3589 3.34101 17.3352 3.22577 17.2881C3.11054 17.241 3.00583 17.1715 2.91776 17.0835C2.8297 16.9955 2.76004 16.8909 2.71284 16.7757C2.66565 16.6605 2.64187 16.5371 2.6429 16.4126C2.64392 16.2881 2.66972 16.1651 2.7188 16.0507C2.76788 15.9363 2.83925 15.8328 2.92875 15.7463L4.25375 14.42C4.34081 14.3329 4.44419 14.2638 4.55797 14.2166C4.67175 14.1695 4.79371 14.1452 4.91688 14.1452C5.04004 14.1452 5.162 14.1695 5.27578 14.2166C5.38956 14.2638 5.49294 14.3329 5.58 14.42V14.42Z" fill="#000" fill-opacity=".87"/>';
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

document.addEventListener('DOMContentLoaded', () => {
    if (userPrefersDark && !theme) {
        setTheme('dark');
        favicon.src = '../assets/favions/dark.svg';
    } else if (userPrefersLight && !theme) {
        setTheme('light');
        favicon.src = '../assets/favions/light.svg';
    } else if (theme === 'dark') {
        setTheme('dark');
    } else if (theme === 'light') {
        setTheme('light');
    }
    generateUserData(url, "okudev");
});

themeSelector.addEventListener('click', () => {
    if (themeLabel.innerText === 'Light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeLabel.innerText = 'Dark';
        themeIcon.innerHTML = themeIconDarkPath;
        localStorage.setItem('data-theme', theme);
    } else {
        themeLabel.innerText = 'Light';
        themeIcon.innerHTML = themeIconLightPath;
        localStorage.setItem('data-theme', theme);
    }
};

search.addEventListener('keydown', (e) => {
    const pattern = new RegExp('[a-zA-Z0-9-_]+'); // Can only contain lowercase letters, capital letters, numbers 0-9, hyphens and underscores

    if (e.key === "Enter") {
        if (search.value !== "" && search.value.match(pattern)) {
            generateUserData(url, search.value);
            search.value = "";
        } else {
            console.log("Invalid input");
            search.value = "";
        }
    }
}, false);

const fetchGithubUser = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

const generateUserData = async (url, value) => {
    const data = await fetchGithubUser(url + value);
    if (data.message === "Not Found") {
        console.log('404');
    }

    if (data.name === null) {
        data.name = data.login;
    }

    renderUserData(data);
};

const checkType = (data, element) => {
    if (data === "Organization") {
        element.style.borderRadius = "4px";
    } else {
        element.style.borderRadius = "50%";
    }
};

const checkRepoAmount = (data) => {
    if (data === 1) {
        return `repository`;
    } else {
        return "repositories";
    }
};

const setDate = (data) => {
    const date = new Date(data);
    const [day, month, year] = [date.getDate(), months[date.getMonth()], date.getFullYear()];

    return `Created ${[day, month, year].join(" ")}`;
};

const checkNull = (data, element) => {
    if (data === "" || data === null) {
        element.classList.remove('link');
        element.removeAttribute('href');
        element.style.opacity = 0.7;
        element.previousElementSibling.style.opacity = 0.7;
        return "Not avaliable";
    } else if (element !== userLocation) {
        element.classList.add('link');
    }

    if (element === twitter) {
        element.style.opacity = 1;
        element.previousElementSibling.style.opacity = 1;
        return `@${data}`;
    }

    element.style.opacity = 1;
    element.previousElementSibling.style.opacity = 1;
    return data;
};

const validURL = (string, element) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (pattern.test(string)) {
        element.classList.add('link');
        element.style.opacity = 1;
        element.previousElementSibling.style.opacity = 1;

        return string;
    } else {
        element.classList.remove('link');
        element.removeAttribute('href');
        element.style.opacity = 0.7;
        element.previousElementSibling.style.opacity = 0.7;

        return "Not avaliable";
    }
};

const renderUserData = (data) => {
    checkType(data.type, avatarContainer);
    avatar.src = data.avatar_url;
    nickname.innerText = data.name;
    type.innerText = data.type;
    username.innerText = `@${data.login}`;
    username.href = data.html_url;
    bio.innerText = (data.bio === null) ? "This profile has no bio" : `${data.bio}`;
    followersLink.href = `https://github.com/${data.login}?tab=followers`;
    followers.innerText = data.followers;
    followingLink.href = `https://github.com/${data.login}?tab=following`;
    following.innerText = data.following;
    repoValue.innerText = data.public_repos;
    repoLink.href = `https://github.com/${data.login}?tab=repositories`;
    repoText.innerText = checkRepoAmount(data.public_repos, repoText);
    creationDate.innerText = setDate(data.created_at);
    userLocation.innerText = checkNull(data.location, userLocation);
    twitter.href = `https://twitter.com/${data.twitter_username}`;
    twitter.innerText = checkNull(data.twitter_username, twitter);
    website.href = validURL(data.blog, website);
    website.innerText = validURL(data.blog, website);
    email.href = `mailto:${data.email}`;
    email.innerText = checkNull(data.email, email);
};