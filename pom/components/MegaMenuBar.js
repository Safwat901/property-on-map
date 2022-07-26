import styles from "../styles/MegaMenuBar.module.css";
import MegaButton from "./MegaButton";
import Login_button from "./Login_button";
import Link from "next/link";

const MegaMenuBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {/* HAMBURGER MENU............ */}

        {/* HAMBURGER MENU............ end*/}
        <div className={styles.megaMenu}>
          <a href="/" className={styles.toggleBtn}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </a>
          <ul>
            {/* .........................logo................. */}
            <div className={styles.logo}>
              <img
                style={{ marginLeft: "-90px" }}
                src="/logo.png"
                width="60px"
                height="50px "
                alt="logo"
                margin="200px"
              ></img>
              <Link href="/">
                <a
                  style={{
                    color: "#00154f",
                    fontFamily: "Alumni Sans Inline One",
                    fontSize: "30px",
                    margin: "1px",
                    padding: "10px",
                    textDecoration: "none",

                    bottom: "50px",
                  }}
                >
                  Property On Map
                </a>
              </Link>
            </div>

            {/* .........................logo end................. */}
            <div className={styles.navMenu}>
              <li>
                <Link href="/ForRent">
                  <a>Buy</a>
                </Link>
                <div className={styles.subMenu}>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>plot for sale</p>

                      {/* <button>Click Me</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>building for sale</p>

                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                      {/* <button>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/ForRent">
                  <a>Rent</a>
                </Link>
                <div className={styles.subMenu}>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>plot for sale</p>

                      {/* <button>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>building for sale</p>

                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                      {/* <button>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px", borderRadius: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                      {/* <button style={{ marginTop: "-20px" }}>sdkls</button> */}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/Add_property">
                  <a>Add Property</a>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/New_projects">
                  <a>new projects</a>
                </Link>
              </li>
              <li>
                <Link href="/Services">
                  <a>services</a>
                </Link>
              </li>
            </div>
            <Login_button title="Log in" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MegaMenuBar;
