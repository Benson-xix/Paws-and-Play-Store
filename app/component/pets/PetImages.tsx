import Image from 'next/image';
import React from 'react';


interface PetImagseProps {
    petImages: string[];
}

const PetImages : React.FC<PetImagseProps> = ({ petImages }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {petImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Pet Image ${index + 1}`}
          width={500}
          height={500}
          className="object-cover"
        />
      ))}
    </div>
  );
};

export default PetImages;
