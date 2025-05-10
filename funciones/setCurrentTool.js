function setCurrentTool(tool) {
  currentTool = tool;
  if (tool === 'select') {
    svg.style.cursor = 'default';
  } else if (tool === 'erase') {
    svg.style.cursor = 'crosshair';
  } else {
    svg.style.cursor = 'crosshair';
  }
  
  // Clear selection if we're switching tools
  if (tool !== 'select') {
    deselectShape();
  }
}