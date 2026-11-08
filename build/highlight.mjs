/* HIGHLIGHT: resaltado de sintaxis en la compilación (Java y SQL). Recibe código ya escapado en HTML. */
const JAVA = new Set("abstract boolean break byte case catch char class continue default do double else enum extends final finally float for if implements import instanceof int interface long new null package private protected public return short static super switch synchronized this throw throws try void while var true false".split(" "));
const SQL = new Set("SELECT FROM WHERE CREATE TABLE PRIMARY KEY NOT NULL VARCHAR INT INSERT INTO VALUES UPDATE SET DELETE AND OR LIKE ORDER BY JOIN INNER LEFT RIGHT ON ALTER DROP ADD COLUMN MODIFY TRUNCATE GRANT REVOKE TO VIEW AS TRIGGER PROCEDURE BEGIN END FOR EACH ROW BEFORE AFTER DELIMITER CALL IN OUT DEFAULT UNIQUE FOREIGN REFERENCES CASCADE DATABASE USE DISTINCT BETWEEN EXISTS ANY ALL UNION GROUP HAVING IS COUNT SUM AVG MIN MAX DATE DECIMAL INDEX".split(" "));
const RX = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|--[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(@\w+)|\b([A-Za-z_]\w*)\b|\b(\d+(?:\.\d+)?)\b/g;
export function highlight(code) {
  const lang = /^\s*(?:--[^\n]*\n\s*)*(SELECT|CREATE|INSERT|UPDATE|DELETE|ALTER|DROP|GRANT|REVOKE|TRUNCATE|DELIMITER)\b/.test(code) ? "SQL" : "Java", kw = lang === "SQL" ? SQL : JAVA;
  const html = code.replace(RX, (m, c, s, a, w, n) => c ? `<span class="c">${c}</span>` : s ? `<span class="s">${s}</span>` : a ? `<span class="t">${a}</span>`
    : w ? (kw.has(w) ? `<span class="k">${w}</span>` : lang === "Java" && /^[A-Z]/.test(w) ? `<span class="t">${w}</span>` : w) : n ? `<span class="n">${n}</span>` : m);
  return { lang, html };
}
