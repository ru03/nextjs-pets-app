import { Icon } from "../";

const GenderIcon = ({ gender }) => (
  <Icon icon={gender && gender === 'M' ? 'fa-venus' : 'fa-mars'} />
);

export default GenderIcon;