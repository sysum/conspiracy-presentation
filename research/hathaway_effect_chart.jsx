import { useState } from "react";

const data = [
  { event: "Rachel Getting Married", date: "Oct 3, 2008", type: "Film Release", change: 0.44, price: 119000 },
  { event: "Bride Wars", date: "Jan 5, 2009", type: "Film Release", change: 2.61, price: 96600 },
  { event: "Valentine's Day", date: "Feb 8, 2010", type: "Film Release", change: 1.01, price: 119800 },
  { event: "Alice in Wonderland", date: "Mar 5, 2010", type: "Film Release", change: 0.74, price: 121750 },
  { event: "Love & Other Drugs", date: "Nov 24, 2010", type: "Film Release", change: 1.62, price: 124200 },
  { event: "Oscar Co-Host Announced", date: "Nov 29, 2010", type: "Career Event", change: 0.25, price: 124500 },
  { event: "Pre-Oscar Friday", date: "Feb 25, 2011", type: "Career Event", change: 2.02, price: 127560 },
  { event: "Post-Oscar Monday", date: "Feb 28, 2011", type: "Career Event", change: 2.94, price: 131310 },
  { event: "One Day", date: "Aug 19, 2011", type: "Film Release", change: 0.89, price: 107500 },
  { event: "Dark Knight Rises", date: "Jul 20, 2012", type: "Film Release", change: 1.15, price: 128300 },
  { event: "Les Misérables", date: "Dec 25, 2012", type: "Film Release", change: 0.68, price: 134060 },
  { event: "Oscar Win (Best Supporting)", date: "Feb 25, 2013", type: "Career Event", change: 1.84, price: 149990 },
];

const maxChange = Math.max(...data.map(d => d.change));

export default function HathawayEffect() {
  const [hovered, setHovered] = useState(null);
  const [view, setView] = useState("bars");

  const typeColors = {
    "Film Release": "#C9A84C",
    "Career Event": "#8B0000",
  };

  const cumulativeGain = data.reduce((sum, d) => sum + d.change, 0).toFixed(2);

  return (
    <div style={{
      background: "#0D0D0D",
      minHeight: "100vh",
      color: "#F5F0E1",
      fontFamily: "Georgia, serif",
      padding: "32px 24px",
    }}>
      {/* Header */}
      <div style={{ borderTop: "3px solid #C9A84C", paddingTop: 24, marginBottom: 8 }}>
        <div style={{ fontFamily: "'Courier New', monospace", color: "#C9A84C", fontSize: 12, fontWeight: "bold", letterSpacing: 2 }}>
          EXHIBIT D — SUPPLEMENTAL EVIDENCE
        </div>
        <h1 style={{ color: "#C9A84C", fontSize: 32, margin: "8px 0 4px", letterSpacing: 3, fontWeight: "bold" }}>
          THE HATHAWAY EFFECT
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: 14, margin: 0, fontFamily: "'Courier New', monospace" }}>
          BRK.A Price Movement on Days Anne Hathaway Makes Headlines
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 24, margin: "24px 0 20px", flexWrap: "wrap" }}>
        {[
          { label: "EVENTS TRACKED", value: data.length },
          { label: "POSITIVE DAYS", value: `${data.length}/${data.length}` },
          { label: "CUMULATIVE GAIN", value: `+${cumulativeGain}%` },
          { label: "AVG GAIN PER EVENT", value: `+${(cumulativeGain / data.length).toFixed(2)}%` },
        ].map((stat, i) => (
          <div key={i} style={{
            background: "#111122",
            border: "1px solid #222233",
            padding: "14px 20px",
            flex: "1 1 140px",
            minWidth: 140,
          }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "#8A8A8A", letterSpacing: 1, marginBottom: 4 }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 26, color: "#C9A84C", fontWeight: "bold" }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* View toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["bars", "timeline"].map(v => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              background: view === v ? "#C9A84C" : "#111122",
              color: view === v ? "#0D0D0D" : "#8A8A8A",
              border: "1px solid #333344",
              padding: "6px 16px",
              fontFamily: "'Courier New', monospace",
              fontSize: 11,
              cursor: "pointer",
              fontWeight: view === v ? "bold" : "normal",
              letterSpacing: 1,
            }}
          >
            {v === "bars" ? "BAR CHART" : "TIMELINE"}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 24, marginBottom: 16, fontSize: 11, fontFamily: "'Courier New', monospace" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, background: "#C9A84C" }} />
          <span style={{ color: "#8A8A8A" }}>Film Release</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, background: "#8B0000" }} />
          <span style={{ color: "#8A8A8A" }}>Career Event</span>
        </div>
      </div>

      {view === "bars" ? (
        /* ============ BAR CHART VIEW ============ */
        <div style={{ background: "#111122", border: "1px solid #222233", padding: "24px 20px 16px" }}>
          {/* Y-axis labels and bars */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 0, height: 320, paddingBottom: 80 }}>
            {/* Y axis */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 240, marginRight: 8, paddingBottom: 0 }}>
              {[3, 2, 1, 0].map(v => (
                <div key={v} style={{ fontSize: 10, color: "#8A8A8A", fontFamily: "'Courier New', monospace", textAlign: "right", width: 30 }}>
                  {v}%
                </div>
              ))}
            </div>

            {/* Bars */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, flex: 1, height: 240, position: "relative" }}>
              {/* Grid lines */}
              {[0, 1, 2, 3].map(v => (
                <div key={v} style={{
                  position: "absolute",
                  bottom: `${(v / 3) * 100}%`,
                  left: 0,
                  right: 0,
                  borderBottom: "1px solid #1a1a33",
                  zIndex: 0,
                }} />
              ))}

              {data.map((d, i) => {
                const barHeight = (d.change / 3.5) * 240;
                const isHovered = hovered === i;
                return (
                  <div
                    key={i}
                    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, position: "relative" }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Value label */}
                    <div style={{
                      fontSize: 10,
                      fontFamily: "'Courier New', monospace",
                      color: isHovered ? "#FFFFFF" : "#C9A84C",
                      marginBottom: 4,
                      fontWeight: "bold",
                      transition: "color 0.2s",
                    }}>
                      +{d.change}%
                    </div>
                    {/* Bar */}
                    <div style={{
                      width: "70%",
                      height: barHeight,
                      background: isHovered
                        ? `linear-gradient(to top, ${typeColors[d.type]}, ${d.type === "Film Release" ? "#E8D48B" : "#CC3333"})`
                        : typeColors[d.type],
                      transition: "all 0.2s",
                      cursor: "pointer",
                      opacity: isHovered ? 1 : 0.85,
                      boxShadow: isHovered ? `0 0 20px ${typeColors[d.type]}44` : "none",
                    }} />
                    {/* Label */}
                    <div style={{
                      fontSize: 8,
                      color: isHovered ? "#F5F0E1" : "#8A8A8A",
                      fontFamily: "'Courier New', monospace",
                      textAlign: "center",
                      marginTop: 6,
                      lineHeight: 1.3,
                      height: 60,
                      transition: "color 0.2s",
                      width: "100%",
                      overflow: "hidden",
                    }}>
                      {d.event.length > 18 ? d.event.slice(0, 16) + "…" : d.event}
                      <br />
                      <span style={{ fontSize: 7, opacity: 0.7 }}>{d.date.split(",")[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hover detail card */}
          {hovered !== null && (
            <div style={{
              background: "#0D0D0D",
              border: "1px solid #C9A84C",
              padding: "12px 16px",
              marginTop: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}>
              <div>
                <div style={{ color: "#C9A84C", fontSize: 14, fontWeight: "bold" }}>{data[hovered].event}</div>
                <div style={{ color: "#8A8A8A", fontSize: 11, fontFamily: "'Courier New', monospace" }}>{data[hovered].date} — {data[hovered].type}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#C9A84C", fontSize: 24, fontWeight: "bold" }}>+{data[hovered].change}%</div>
                <div style={{ color: "#8A8A8A", fontSize: 10, fontFamily: "'Courier New', monospace" }}>BRK.A ~${data[hovered].price.toLocaleString()}</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ============ TIMELINE VIEW ============ */
        <div style={{ background: "#111122", border: "1px solid #222233", padding: "24px 20px" }}>
          {data.map((d, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "stretch",
                marginBottom: 0,
                cursor: "pointer",
                background: hovered === i ? "#1a1a33" : "transparent",
                transition: "background 0.2s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Date column */}
              <div style={{
                width: 100,
                flexShrink: 0,
                paddingRight: 16,
                paddingTop: 12,
                paddingBottom: 12,
                textAlign: "right",
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                color: "#8A8A8A",
                borderRight: "2px solid #C9A84C",
              }}>
                {d.date}
              </div>

              {/* Dot */}
              <div style={{ position: "relative", width: 20, flexShrink: 0 }}>
                <div style={{
                  position: "absolute",
                  top: 14,
                  left: 6,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: typeColors[d.type],
                  border: hovered === i ? "2px solid #F5F0E1" : "2px solid #111122",
                  transition: "border 0.2s",
                }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: "10px 12px", borderBottom: "1px solid #1a1a33" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontSize: 13, color: "#F5F0E1", fontWeight: "bold" }}>{d.event}</div>
                  <div style={{ fontSize: 18, color: "#C9A84C", fontWeight: "bold", fontFamily: "'Courier New', monospace" }}>
                    +{d.change}%
                  </div>
                </div>
                <div style={{ fontSize: 10, color: "#8A8A8A", fontFamily: "'Courier New', monospace", marginTop: 2 }}>
                  {d.type} — BRK.A ~${d.price.toLocaleString()}
                </div>
                {/* Mini bar */}
                <div style={{ marginTop: 6, height: 4, background: "#0D0D0D", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${(d.change / maxChange) * 100}%`,
                    background: typeColors[d.type],
                    borderRadius: 2,
                    transition: "width 0.3s",
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer analysis */}
      <div style={{
        marginTop: 24,
        background: "#111122",
        borderLeft: "4px solid #C9A84C",
        padding: "16px 20px",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "#C9A84C", fontWeight: "bold", letterSpacing: 1, marginBottom: 8 }}>
          ANALYST NOTE
        </div>
        <p style={{ fontSize: 13, color: "#F5F0E1", lineHeight: 1.7, margin: 0 }}>
          Automated trading algorithms scanning internet sentiment <strong style={{ color: "#C9A84C" }}>cannot distinguish</strong> between
          "Anne Hathaway the actress" and "Hathaway the company." Positive headlines about the actress trigger buy signals
          for Berkshire Hathaway stock. A University of Kansas finance class confirmed that Anne Hathaway news correlates
          with <strong style={{ color: "#C9A84C" }}>higher trading volume</strong> in BRK.A.
        </p>
        <p style={{ fontSize: 11, color: "#8A8A8A", fontFamily: "'Courier New', monospace", marginTop: 8, marginBottom: 0 }}>
          Source: Dan Mirvish / HuffPost (2011) • CNBC • University of Kansas, Dept. of Finance
        </p>
      </div>

      {/* Classification footer */}
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <div style={{
          display: "inline-block",
          background: "#8B0000",
          color: "white",
          padding: "6px 20px",
          fontFamily: "'Courier New', monospace",
          fontSize: 10,
          fontWeight: "bold",
          letterSpacing: 1,
        }}>
          THE BARD'S WIFE IS MOVING MARKETS
        </div>
      </div>
    </div>
  );
}
