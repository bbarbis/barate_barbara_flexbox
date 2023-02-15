/* Azok az utasítások amelyek használják a HTML oldalon lévő elemeket 
*Csak akkor szabad lefutniuk,
*ha már betöltődött az oldal
 */
window.addEventListener("load",init);
function init() {
    /**kattintás esemény hozzáadása az egyes elemekhez */
    /* onclick="udvozles()" */
    document.querySelector("header").addEventListener("click", udvozles);
}
 
function udvozles() {
    console.log("Üdvözöllek!");
    alert("hahó");
}