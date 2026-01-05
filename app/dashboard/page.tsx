import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#005A9E",
          padding: "0 24px",
          flexShrink: 0,
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* LOGO */}
          <div
            style={{
              width: 44,
              height: 44,
              background: "#ffffff",
              borderRadius: 10,
              padding: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src="/pharmed-logo.png"
              alt="PharMed"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* 🔥 SPACE BETWEEN LOGO & TEXT */}
          <div style={{ marginLeft: 16 }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "1.2",
              }}
            >
              Improsyn AI
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 12,
                lineHeight: "1.2",
              }}
            >
              Pharmaceutical Voice Agent
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <UserButton afterSignOutUrl="/sign-in" />
      </header>

      {/* MAIN */}
      <div style={{ flex: 1 }}>
        <iframe
          src="https://pharmedbot-2vryvh.sandbox.livekit.io/"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          allow="camera; microphone; autoplay"
        />
      </div>
    </div>
  );
}
