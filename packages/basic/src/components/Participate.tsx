import { useMemo } from "react";
import { useProjectInfo } from "../hook";
import HeadTitle from "./public/HeadTitle";

function Participate() {
  const { status, userInfo } = useProjectInfo();

  const ParticipatingContainer = useMemo(() => {
    switch (status?.currentStep) {
      case "snapshot":
        return <>gogo</>;
      case "whitelist":
        return (
          <>
            {" "}
            <button
              style={{
                border: "1px solid black",
                borderRadius: 6,
                marginLeft: 10,
              }}
            >
              add whitelist
            </button>
          </>
        );
      case "round1":
        return (
          <>
            {" "}
            <input style={{ borderRadius: 10 }}></input>
            <button
              style={{
                border: "1px solid black",
                borderRadius: 6,
                marginLeft: 10,
              }}
            >
              claim
            </button>
          </>
        );
      case "round2":
        return (
          <>
            {" "}
            <input style={{ borderRadius: 10 }}></input>
            <button
              style={{
                border: "1px solid black",
                borderRadius: 6,
                marginLeft: 10,
              }}
            >
              claim
            </button>
          </>
        );
      case "claim":
        return (
          <>
            {" "}
            <input style={{ borderRadius: 10 }}></input>
            <button
              style={{
                border: "1px solid black",
                borderRadius: 6,
                marginLeft: 10,
              }}
            >
              claim
            </button>
          </>
        );
      default:
        return <>-</>;
    }
  }, [status?.currentStep]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeadTitle title="Participate"></HeadTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          columnGap: "25px",
          alignItems: "center",
        }}
      >
        <article style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>{ParticipatingContainer}</div>
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
          >
            <div>
              <span>your TON : </span>
            </div>
            <div>
              <span>Puchased : </span>
            </div>
            <div>
              <span>Available to Claim : </span>
            </div>
            <div>
              <span>Remained Amount : </span>
            </div>
          </div>
        </article>
        <section
          style={{
            fontSize: 13,
            height: "100%",
            display: "flex",
            marginTop: "25px",
          }}
        >
          <article style={{ display: "flex", flexDirection: "column" }}>
            <span>TIER 1 (10,000 sTOS) : 2,000,000 TKB</span>
            <span>TIER 2 (5,000 sTOS) : 1,000,000 TKB</span>
            <span>TIER 3 (3,000 sTOS) : 1,000,000 TKB</span>
            <span>TIER 4 (1,000 sTOS) : 1,000,000 TKB</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "12px",
                fontSize: 15,
              }}
            >
              <span>Your sTOS: 5,000</span>
              <span style={{ color: "#0070ED", fontWeight: "bold" }}>
                Your tier:
              </span>
            </div>
          </article>
          <div
            style={{
              borderLeft: "1px solid black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></div>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Round 1 - 5,000,000 TKB </span>
            <span> 2024.01.01 17:00:00 ~ 2024.01.07 16:59:59 </span>
            <span>Round 2 - 5,000,000</span>
            <span>2024.01.01 17:00:00 ~ 2024.01.07 16:59:59</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                fontSize: 15,
              }}
            >
              <span style={{ color: "#0070ED", fontWeight: "bold" }}>
                Current status : {status?.currentStep ?? "not setup yet"}
              </span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Participate;
