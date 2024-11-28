export default function AvatarQuote() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <div>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
    </div>
  );
}
