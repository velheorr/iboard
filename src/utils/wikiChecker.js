export const wikiChecker = (page)=> {

    const checkWiki= JSON.parse(localStorage.getItem(page))
    if (checkWiki){
        return true
    }

}