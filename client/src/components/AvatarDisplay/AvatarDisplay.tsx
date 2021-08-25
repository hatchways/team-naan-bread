import Avatar from '@material-ui/core/Avatar';
import { User } from '../../interface/User';

interface Props {
  loggedIn: boolean;
  user: User;
}

const AvatarDisplay = ({ user }: Props): JSX.Element => {
  return <Avatar src={`${user.profile_photo_url}`} />;
};

export default AvatarDisplay;
