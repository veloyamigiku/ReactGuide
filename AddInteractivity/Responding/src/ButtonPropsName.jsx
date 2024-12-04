export default function ButtonPropsName({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}
