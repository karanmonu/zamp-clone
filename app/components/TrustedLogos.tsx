import "./TrustedLogos.css";
import Image from "next/image";

export default function TrustedLogos() {
  return (
    <section className="trusted-logos">
      <div className="trusted-container">
        <p className="trusted-text">Trusted by companies that move fast.</p>
        <div className="logos">
          <Image
            src="/assets/sequoia.png"
            alt="Sequoia"
            width={100}
            height={30}
          />
          <Image src="/assets/noon.png" alt="Noon" width={80} height={30} />
          <Image
            src="/assets/doordash.png"
            alt="DoorDash"
            width={100}
            height={30}
          />
          <Image src="/assets/tabby.png" alt="Tabby" width={80} height={30} />
        </div>
      </div>
    </section>
  );
}
