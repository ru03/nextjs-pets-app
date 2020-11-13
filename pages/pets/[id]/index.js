import { motion } from 'framer-motion';
import { DetailCard } from "../../../components";

let easing = [0.175, 0.85, 0.42, 0.96];

const enterVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const PetDetail = ({ pet }) => (
  <motion.div initial="exit" animate="enter" exit="exit" variants={enterVariants}>
      <DetailCard
        age={pet.age}
        description={pet.description}
        gender={pet.gender}
        hasGoBack
        height={pet.height}
        img={pet.image}
        likes={pet.likes}
        name={pet.name}
        type={pet.type}
        weight={pet.weight}
      />
  </motion.div>
);

export default PetDetail;

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pets/${id}`);
  const pet = await res.json();
  return {
    props: {
      pet,
    }
  }
}