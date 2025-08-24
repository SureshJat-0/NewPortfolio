export function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

export function keepTheme() {
    if(localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') == 'theme-light') {
            setTheme('theme-light');
        } else if(localStorage.getItem('theme') == 'theme-dark') {
            setTheme('theme-dark');
        }
    } else {
        setTheme('theme-light')
    }
}