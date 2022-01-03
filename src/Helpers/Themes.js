const root = document.getElementById('root');

export const setDarkMode = () => {
    
    const input = document.querySelector('#input-searcher');
    const header = document.querySelector('#header');
    const headerTitle = document.querySelector('#title');
    const labels = document.getElementsByClassName("lbl");

    root.classList.replace("white-root", "dark-root");
    header.classList.replace("white-header", "dark-header"); 
    input.classList.replace("white-searcher", "dark-searcher");
    headerTitle.classList.replace("white-h1", "dark-h1");

    Object.values(labels).map(element => (
        element.classList.replace("white-lbl", "dark-lbl")
    ));
}

export const setWhiteMode = () => {

    const input = document.querySelector('#input-searcher');
    const header = document.querySelector('#header');
    const headerTitle = document.querySelector('#title');
    const labels = document.getElementsByClassName("lbl");
    
    root.classList.replace("dark-root", "white-root");
    input.classList.replace("dark-searcher", "white-searcher");
    header.classList.replace("dark-header", "white-header");
    headerTitle.classList.replace("dark-h1", "white-h1");

    Object.values(labels).map(element => (
        element.classList.replace("dark-lbl", "white-lbl" )
    ));
}