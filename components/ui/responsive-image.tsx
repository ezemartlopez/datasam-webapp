"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ResponsiveImage = () => {
  const [imageSrc, setImageSrc] = useState('/images/main_home_page_desktop.png'); // Valor inicial

  useEffect(() => {
    // Función que cambia la imagen según el tamaño de la ventana
    const updateImageSource = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setImageSrc('/images/main_home_page_mobile.png');
      } else if (width <= 1024) {
        setImageSrc('/images/main_home_page_tablet.png');
      } else {
        setImageSrc('/images/main_home_page_desktop.png');
      }
    };

    // Ejecutar la función para inicializar el estado
    updateImageSource();

    // Actualizar la imagen cada vez que el tamaño de la ventana cambie
    window.addEventListener('resize', updateImageSource);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateImageSource);
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <Image
      src={imageSrc} // Imagen que cambia dependiendo del ancho de la ventana
      alt="photo_datasam_main"
      layout="fill" // Ajuste de la imagen para que se redimensione correctamente
      objectFit="cover" // Asegura que la imagen se recorte si es necesario
      quality={100} // La mejor calidad
    />
  );
};

export default ResponsiveImage;
