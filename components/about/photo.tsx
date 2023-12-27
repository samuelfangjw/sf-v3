import Image from "next/image";

const AboutPhoto = () => {
  return (
    <Image
      src={"/me.jpeg"}
      alt="samuel"
      width={767}
      height={767}
      quality={100}
      sizes="100vw"
    />
  );
};

export default AboutPhoto;
