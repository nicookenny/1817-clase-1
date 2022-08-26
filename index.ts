import { PORT, server, xserver } from './api';

/* CLASE 1 - Introducción al backend */

// ¿Qué es el desarrollo de backend?

const BACKEND = `Hace referencia a todo el desarrollo de software que no es visible para el usuario. Como vimos anteriormente, nosotros desde el frontend (lado del usuario, lo visible) podemos solicitar o enviar información al servidor (backend), el cual procesará dicha información, realizará cambios en bases de datos, etc. y posteriormente devolverá al usuario algún valor. La programación backend está relacionada directamente con lo que es diseño y desarrollo de arquitectura de software ya que, por lo general, el desarrollador backend se encarga de diseñar la solución desde el diseño de bases de datos hasta la implementación de lógica de negocio para que todo funcione correctamente.`;

const MERN = ['MongoDB', 'Express', 'ReactJS', 'NodeJS'];

// Conocimientos del desarrollador backend

const KNOWLEDGE = [
  'deployment',
  'files',
  'database',
  'data processing',
  'architecture',
  'infrastructure',
  'software engineering',
  'database design',
  'database development',
];

// Lenguajes de programación en backend, diferencias con el frontend

const TECHNOLOGIES = ['Javascript', 'Java', '.NET', 'Python', 'Rust', 'GO', 'y muchos más'];
const FRONTEND_TECHNOLOGIES = ['ReactJS', 'Vue', 'Angular', 'Svelte'];

// Servidor
xserver.listen(+PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
