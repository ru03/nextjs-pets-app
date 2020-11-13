import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { Card } from '../components';
import { useMutation } from 'react-query';
import { useState } from 'react';


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
      console.log('holas')
    }
  }

  return (
    // <div className="container mx-auto">
      <div className="w-full flex flex-wrap justify-center animate-fadeIn">
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
      </div>
    // </div>
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