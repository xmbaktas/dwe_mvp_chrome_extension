const errorColor = "red";
const infoColor  = "blue";
const warnColor  = "yellow";


function colorizeWords(){
    const words = ["error", "info", "warn"];
    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
    const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    let node;
    while(node = textNodes.nextNode()){
        if (node.parentElement && node.parentElement.tagName !== 'SCRIPT' && regex.test(node.textContent)) { // Metin nodelarını kontrol etme
            const span = document.createElement("span"); // Yeni bir <span> elementi oluşturma
            span.innerHTML = node.textContent.replace(regex, match => { // Renklendirme işlemini gerçekleştirme
              if (match.toLowerCase() === 'error') {
                return `<span style="color: ${errorColor};">${match}</span>`; // "error" kelimesini kırmızı renkte renklendirme
              } else if (match.toLowerCase() === 'info') {
                return `<span style="color: ${infoColor};">${match}</span>`; // "info" kelimesini mavi renkte renklendirme
              } else if (match.toLowerCase() === 'warn') {
                return `<span style="color: ${warnColor};">${match}</span>`; // "warn" kelimesini turuncu renkte renklendirme
              }
            });
            node.parentElement.replaceChild(span, node); // Orijinal metin nodunu yeni renklendirilmiş <span> elementi ile değiştirme
        }
    }

}

