import Avatar from '@material-ui/core/Avatar';

interface Props {
  loggedIn: boolean;
  photo: string | undefined;
}

const AvatarDisplay = ({ photo }: Props): JSX.Element => {
  return <Avatar src={`${photo}`} />;
};

export default AvatarDisplay;
