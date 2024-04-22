import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-200 via-orange-300 to-teal-200 mb-8 ">
      <div className="md:mx-auto  md:px-8 py-12 flex flex-col gap-2 lg:flex-row  items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 m-4">
            Furry Freinds
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            @ Paws&Play Web Store a Utopia for great pets and companions, there is
            never too much pets{" "}
          </p>
          <p className="text-2xl md:text-5xl font-bold text-gray-900 ">
            Get Access to Our {""}
            <span className="text-md md:text-lg  mb-2">
              Vet Insurance for your pets
            </span>
          </p>
        </div>

        <div className=" lg:w-1/3 w-full relative aspect-video">
          <Image
            src="/pet-shop-banner-design-template-cartoon-illustration-of-cats-dogs-house-food-vector.jpg"
            alt="PetBanner"
            width={300}
            height={300}
            layout="responsive"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
