function editText(evt) {
    const textElement = evt.target;
    if (textElement.tagName.toLowerCase() !== 'text') return;
    
    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    const textArea = document.createElement("textarea");
    
    // Obtener la posición y dimensiones
    const bbox = textElement.getBBox();
    
    // Configurar foreignObject
    foreignObject.setAttribute('x', bbox.x);
    foreignObject.setAttribute('y', bbox.y);
    foreignObject.setAttribute('width', Math.max(200, bbox.width + 50));
    foreignObject.setAttribute('height', Math.max(50, bbox.height + 20));
    
    // Configurar textarea
    textArea.value = textElement.textContent || '';
    textArea.style.width = '100%';
    textArea.style.height = '100%';
    textArea.style.margin = '0';
    textArea.style.padding = '2px';
    textArea.style.border = '1px solid #ccc';
    textArea.style.background = 'white';
    textArea.style.fontFamily = window.getComputedStyle(textElement).fontFamily;
    textArea.style.fontSize = window.getComputedStyle(textElement).fontSize;
    textArea.style.resize = 'none';
    
    foreignObject.appendChild(textArea);
    svg.appendChild(foreignObject);
    textElement.style.display = 'none';
    
    // Enfocar y comenzar a escribir
    textArea.focus();
    
    const finishEditing = () => {
        if (textArea.value.trim() !== '') {
            if (textElement.querySelector('textPath')) {
                textElement.querySelector('textPath').textContent = textArea.value;
            } else {
                textElement.textContent = textArea.value;
            }
        }
        textElement.style.display = '';
        foreignObject.remove();
    };
    
    // Eventos para finalizar la edición
    textArea.addEventListener('blur', finishEditing);
    textArea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            finishEditing();
        }
    });
}

// Agregar eventos
svg.addEventListener('dblclick', editText);

// Activar edición inmediata al crear texto
document.addEventListener('keydown', function(e) {
    if (currentTool === 'text' && currentElement) {
        editText({ target: currentElement });
    }
});