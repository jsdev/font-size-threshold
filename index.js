const getTextNodes = (container=document.body) => {
    let textNodes = [];
    let walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node.parentElement);
    }
    return textNodes;
};
 
const getFontSize = el => 
  parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));

const isBetween = (num, min, max) =>
    num > min && num < max;

const elementsLessThanThreshold = (nodes, threshold=14) =>
  nodes.filter(o => isBetween(fontSize(o), 0, threshold ));

const highlightNodes = (nodes, style={ background: 'lime' }) => nodes.forEach(el => el.style.background = style.background)
