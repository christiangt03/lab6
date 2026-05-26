// index.js
const core = require('@actions/core');

try {
  // Leer input del workflow
  // CAMBIAR: El nombre del input si se modifica en el action.yml
  const inputTag = core.getInput('input_tag');

  // Procesar información: quitar espacios y pasar a mayúsculas
  const normalizedTag = inputTag.trim().toUpperCase();

  // Devolver resultados estructurados
  core.setOutput('normalized_tag', normalizedTag);
  console.log(`Tag procesado con éxito: ${normalizedTag}`);

} catch (error) {
  core.setFailed(error.message);
}
