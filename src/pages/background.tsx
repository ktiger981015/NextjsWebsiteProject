import Image from 'next/image';
import Link from 'next/link';

const Background = () => {
  return (
    <>
      <div className="bgWrap">
        <Image
          alt="Mountains"
          src="/mountains.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="bgHeader">
        <div className="bgLogo">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="bgSign">
          <div className="bgSigninup">
            <div className="bgSignin">
              <button className="bgSignbtn">
                <Link href="/signin">Sign In</Link>
              </button>
            </div>
            <div className="bgSignup">
              <button className="bgSignbtn">
                <Link href="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bgText">
        <p>SnapShot your</p>
        <p>imagination</p>
      </div>
    </>
  );
};

export { Background };
