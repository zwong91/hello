import Link from 'next/link';

import styles from '@/styles/app.module.css';

export const Cards = () => {
  return (
    <div className={styles.grid}>
      <Link
        href="https://docs.xxx.org/build/web3-apps/quickstart"
        className={styles.card}
        target='_blank'
        rel="noopener noreferrer"
      >
        <h2>
          Utnet Docs Reference <span>-&gt;</span>
        </h2>
        <p>Learn how this application works, and what you can build on Utility.</p>
      </Link>

      <Link
        href="/hello"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2>
          Utility Net Integration <span>-&gt;</span>
        </h2>
        <p>Discover how simple it is to interact with a Utility smart contract.</p>

        <h2>
          Utility Net Faucet, Replace receiverId funds account <span>-&gt;</span>
        </h2>
        <p>curl -X POST -H "Content-Type: application/json" -d '{"amount":"10000000000000000000000000", "receiverId":"67c7616cb8472180c19975f04e9b320d6f07d197d65b137dcffc40e7d25df6de", "contractId":"4e0375672ec30f2efe3a6c5a14ff81d37f1271c439501eac2fb445df262b2c32"}' https://unc-faucet.xyz666.org/api/faucet/tokens </p>
      </Link>
    </div>
  );
};