function saveSVG() {
    // Eliminar cualquier selección activa
    deselectShape();
    
    // Obtener el contenido SVG
    const svgData = svg.outerHTML;
    
    // Crear un Blob con el contenido SVG
    const blob = new Blob([svgData], {type: 'image/svg+xml'});
    
    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dibujo.svg';
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    
    // Limpiar
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}