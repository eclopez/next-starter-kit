interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <header>
      <h1 className="text-3xl">{text}</h1>
    </header>
  );
}
