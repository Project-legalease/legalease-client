import Link from "next/link";

const contents: { text: string; link: string }[] = [
  { text: "Terms of Services", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Cookie Policy", link: "#" },
  { text: "User Agreement", link: "#" },
];

export default function PoliciesFooter(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap text-xs sm:text-base p-5">
      {contents.map((content, index) => (
        <Link
          key={index}
          href={content.link}
          className="underline text-primary-dark32"
        >
          {content.text}
        </Link>
      ))}
    </div>
  );
}
