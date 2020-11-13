import fetch from 'node-fetch';
import { motion } from 'framer-motion';
import { Card } from '../components';
import { useMutation } from 'react-query';
import { useState } from 'react';


const fadeInVariant = {
  exit: { opacity: 0, transition: { duration: 0.5 } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 1.5 }
  }
};

export default function Home({ data }) {
  const [pets, setPets] = useState(data);

  const [mutate] = useMutation((id) => fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pets/like/${id}`, { method: 'PATCH' }));

  const likeHandler = async (id) => {
    console.log(id)
    try {
      const res = await mutate(id);
      if (!res.ok) {
        console.log('ERROR');
        return;
      }
      setPets({ ...pets, [id]: { ...pets[id], likes: pets[id].likes += 1 } });
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    // <div className="container mx-auto">
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div className="w-full flex flex-col sm:flex-col md:flex-row content-center sm:content-center flex-wrap justify-center" variants={fadeInVariant}>
        {
          Object.keys(pets)
            .map(key => <Card
              key={key}
              id={key}
              age={pets[key].age}
              gender={pets[key].gender}
              name={pets[key].name}
              likes={pets[key].likes}
              img={pets[key].image}
              type={pets[key].type}
              link={`/pets/${key}`}
              onLike={() => likeHandler(key)}
            />
            )
        }
      </motion.div>
    </motion.div>
  );
}

export async function getServerSideProps(_) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pets`);
  const data = await res.json();
  return {
    props: {
      data,
    }
  }
}