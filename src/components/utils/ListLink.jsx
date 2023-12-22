export default function ListLink({src, title, text}) {
  return (
    <li>
      <a
        href={src}
        target="_blank"
      >
        <h3>{title}</h3>
        <p>{text}</p>
      </a>
    </li>
  );
}
