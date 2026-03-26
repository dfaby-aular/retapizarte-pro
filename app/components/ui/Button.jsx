export default function Button({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-green-500 text-white px-6 py-3 rounded-full font-bold"
    >
      {children}
    </a>
  );
}