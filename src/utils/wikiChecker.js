export const wikiChecker = (page)=> {

    const checkWiki= JSON.parse(localStorage.getItem(page))
    localStorage.removeItem("wiki-realizProc");
    if (checkWiki){
        return true
    }

}