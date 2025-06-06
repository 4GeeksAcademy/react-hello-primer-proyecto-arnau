import React from 'react';

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">¡Bienvenido a mi Landing Page!</h1>
      <p className="lead">Este es un ejemplo usando React y Bootstrap.</p>
      <hr className="my-4" />
      <p>¡Empieza a crear tus propios componentes reutilizables!</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Saber más</a>
    </div>
  );
}
