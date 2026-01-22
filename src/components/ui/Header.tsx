import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/ui/sign-up" className="logo-link">
          <Image src="/next.svg" alt="logo" width={100} height={20} />
        </Link>
      </div>
      <div className="header-right">
        <div className="ctas">
          <Link href="/" className="primary">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
