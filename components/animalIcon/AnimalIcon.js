import { Icon } from "..";

const AnimalIcon = ({ animal }) => (
  <Icon icon={animal && animal.toLowerCase() === 'dog' ? 'fa-dog' : 'fa-cat'} />
);

export default AnimalIcon;