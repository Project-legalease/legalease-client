import Image from "next/image";
import Link from "next/link";

export default function NotFound({
  text,
  link,
}: {
  text: string;
  link: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col items-center py-10 px-6 font-inria">
      <Image
        src="/images/404.svg"
        width={600}
        height={400}
        alt="Page not found"
      />
      <h3 className="font-lilita text-xl text-primary-blue48 text-center mt-1 w-full max-w-lg">
        We can&#39;t seem to find the page you&#39;re looking for
      </h3>

      <Link
        href={link}
        className="block w-fit px-10 py-2 my-5 mx-auto bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-full duration-300"
      >
        {`Back to ${text}`}
      </Link>
    </div>
  );
}
