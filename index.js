// index.js (Actualizado)
const core = require('@actions/core');

try {
  const inputTag = core.getInput('input_tag');

  // Control de valores vacíos e inválidos
  if (!inputTag || inputTag.trim() === '') {
    throw new Error('Robustez fallida: El input_tag proporcionado está vacío o es inválido.');
  }

  const normalizedTag = inputTag.trim().toUpperCase();
  core.setOutput('normalized_tag', normalizedTag);

} catch (error) {
  // Manejo de errores controlados (falla la pipeline limpiamente)
  core.setFailed(error.message);
}
