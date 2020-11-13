import Link from 'next/link';
import { AnimalIcon, GenderIcon, Icon } from '../';

const Card = ({ age, gender, id, img, likes, name, link, type, onLike }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/4 m-1 rounded overflow-hidden shadow-lg">
    <Link href={link} as={link}>
      <img className="w-full h-64 cursor-pointer" src={img} alt="Sunset in the mountains" />
    </Link>
    <div className="px-6 py-4">
      <div className="font-bold text-4xl mb-2">{name}</div>
      <div className="text-gray-700 text-base">
        <span className="font-bold text-lg">Age:</span> {age}
      </div>
      <div className="text-gray-700 text-base font-bold">
        <span className="font-bold text-lg">Gender:</span> <GenderIcon gender={gender} />
      </div>
      <div className="text-gray-700 text-base font-bold">
        <span className="font-bold text-lg">Type:</span> <AnimalIcon animal={type} />
      </div>
    </div>
    <div className="px-6 pt-4 pb-2 font-bold hover:text-blue-700 flex justify-between">
      <div className="w-3/4 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-gray-400 text-center" onClick={onLike}>
        <Icon classes="text-blue-700" icon="fas fa-thumbs-up" /> Like
      </div>
      <div className="w-1/4 text-center">
        {likes}
      </div>
    </div>
  </div>
)

export default Card;