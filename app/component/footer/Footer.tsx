import Link from "next/link";
import Contain from "../Contain";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-200 text-sm mt-16 ">
      <Contain>
      <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
      <FooterList>
          <h3 className="text-base font-bold mb-2 ">
            Paws&Play Store Categories
          </h3>
          <Link href="#">Dogs</Link>
          <Link href="#">Cats</Link>
          <Link href="#">Birds</Link>
          <Link href="#">Horses</Link>
          <Link href="#">Pet Toys</Link>
        </FooterList>

        <FooterList>
          <h3 className="text-base font-bold mb-2 ">
            Paws&Play Store Categories
          </h3>
          <Link href="#">Contact us</Link>
          <Link href="#">Paws&Play Store policy</Link>
          <Link href="#">Discount and Sells</Link>
          <Link href="#">Vet Insurance (certfied drugs and feed)</Link>
        </FooterList>

        <div className=" w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2 ">About Us</h3>
          <p className="mb-2  ">
            Welcome to Paws&Play, your ultimate destination for all things
            pet-related! We understand the unique bond you share with your furry
            friends, and our mission is to make their lives as joyful and
            comfortable as possible. From nutritious food to interactive toys,
            cozy beds to stylish accessories, we offer a wide range of products
            to cater to every need of your beloved pets. With our commitment to
            quality and customer satisfaction, we strive to provide you and your
            pets with the best shopping experience. Step into our store and
            discover a world of happiness for your pets!
          </p>
          <p>&copy; {new Date().getFullYear()} Relax. All rights reserved</p>
        </div>

        <FooterList>
                <h3 className='text-base font-bold mb-2 '>Follow Us</h3>
                <div className=' flex gap-2'>
                <Link href='#'>
                    <MdFacebook size={24}/>
                </Link>

                <Link href='#'>
                <AiFillTwitterCircle size={24}/>
                </Link>

                <Link href='#'>
                <AiFillInstagram size={24}/>
                </Link>

                <Link href='#'>
                <AiFillYoutube size={24}/>
                </Link>
                </div>
                </FooterList>
      </div>
      </Contain>
    </div>
  );
};

export default Footer;
