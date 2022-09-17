import Image from "next/image";

const AboutPhoto = () => {
  return (
    <Image
      src={"/me.jpeg"}
      alt="samuel"
      layout="responsive"
      width="767px"
      height="767px"
      quality={100}
    />
  );
};

export default AboutPhoto;
