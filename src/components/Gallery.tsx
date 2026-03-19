const Gallery = () => {
  const images = [
    { src: "/images/Foto5.JPG", alt: "Trabajo de manicura profesional" },
    { src: "/images/Foto4.JPG", alt: "Práctica durante el curso" },
    { src: "/images/Foto6.JPG", alt: "Resultado de alumna" },
    { src: "/images/Foto3.JPG", alt: "Detalle de técnica" },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
