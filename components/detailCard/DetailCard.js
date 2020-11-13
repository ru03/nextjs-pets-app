import { AnimalIcon, GenderIcon, Icon, ProfileImg } from "../";
import { useRouter } from 'next/router'

const DetailCard = ({ age, description, gender, height, img, likes, name, type, weight, hasGoBack = false }) => {
  const router = useRouter();

  return (
    <div className="mt-5 flex flex-col items-center md:flex-row md:items-start border-dotted border-4 border-indigo-600">
      <div className="w-1/4 p-6 justify-center items-start">
        <ProfileImg
          alt={name}
          src={img}
        />
      </div>
      <div className="w-3/4 p-6">
        <h1 className="text-5xl">{name}</h1>
        <p className="pt-2">{description}</p>
        <ul className="list-disc pl-6 pt-2">
          <li className="font-bold">Age: <span className="font-normal">{age}</span></li>
          <li className="font-bold">Gender: <GenderIcon gender={gender} /></li>
          <li className="font-bold">Type: <AnimalIcon animal={type} /></li>
          <li className="font-bold">Height: <span className="font-normal">{height} kg</span></li>
          <li className="font-bold">Weight: <span className="font-normal">{weight} cm</span></li>
          <li className="font-bold"><Icon icon="fas fa-thumbs-up" /> Likes: <span className="font-normal">{likes}</span></li>
        </ul>
        {
          hasGoBack && (
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={() => router.push('/')}
              >
                Go Home
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default DetailCard;