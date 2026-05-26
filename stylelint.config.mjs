/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // Regla para evitar animaciones no declaradas
    "no-unknown-animations": true,
    // Regla para evitar media queries no declaradas
    "no-unknown-custom-media": true,
    // Regla para evitar propiedades o variables no declaradas
    "no-unknown-custom-properties": true,
    // Regla para agregar una lista de propiedades requeridas para una regla
    "at-rule-property-required-list": {"font-face": ["font-display", "font-family", "font-style"]},
    // Regla para evitar nombres de colores
    "color-named": "never",
    // Regla para evitar declaraciones !important
    "declaration-no-important": true,
    // Desactivar regla para evitar saltos de linea en los comentarios
    "comment-empty-line-before": null,
    // Regla para evitar saltos de linea en las propiedades
    "custom-property-empty-line-before": "never",
    // Regla para evitar saltos de linea en las reglas especiales
    "at-rule-empty-line-before": "never",
    // Regla para evitar saltos de linea en las reglas clásicas
    "rule-empty-line-before": "never",
    // Regla para agregar comillas en los nombres de las fuentes
    "font-family-name-quotes": "always-unless-keyword",
    // Desactivar regla para agregar patron a los nombres de las clases
    "selector-class-pattern": null
  }
};
