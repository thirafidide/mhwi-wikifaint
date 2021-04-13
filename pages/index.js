import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>モンスターハンターワールドアイスボーンFaint%</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        モンスターハンターワールドアイスボーンFaint%
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Faint% Solo TA Rules</h1>

        <p className={styles.description}>
          Submit your run through{' '}
          <a href="https://discord.gg/NbUDTyucYy">
            SH3MYS's SPARTA Discord Server
          </a>{' '}
          and mention @Art3mis
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Game versions </h3>
            <p>
              The latest version of the Monster Hunter World Iceborne on PC,
              PS4, and Xbox one at the time of the post.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Quests </h3>
            <p>Mastar ranked Hunt/Slay quests only.</p>
          </div>

          <div className={styles.card}>
            <h3>Number of hunters </h3>
            <p>Solo (no palico) all the way through.</p>
          </div>

          <div className={styles.card}>
            <h3>Runs accepted </h3>
            <p>
              This site shows top 3 runs for each weapon per quest. Runs that
              does not make the top 3 will not be accepted.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Items</h3>
            <p>The use of the following items are prohibited.</p>
            <ul>
              <li>All Bombs</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Skills</h3>
            <p>
              The following skills are prohibited(even if they do not come into
              effect.)
            </p>
            <ul>
              <li>Dragonvein Awakening</li>
              <li>True Dragonvein Awakening</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Equipments</h3>
            <p>
              Any equipment with the prohibited skills above is prohibited. No
              mantles/boosters
            </p>
          </div>

          <div className={styles.card}>
            <h3>Environmental traps and etc</h3>
            <p>
              Any damage from environmental traps, flora, and insects are
              prohibited.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
