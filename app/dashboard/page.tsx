import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";


export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#005A9E", // 🔵 same as login/signup
    padding: "12px 24px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  }}
>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'white',
            borderRadius: '8px',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
  src="/pharmed-logo.png"
  alt="PharMed"
  width={40}
  height={40}
  priority
  style={{
    transform: "scale(2)", // 🔍 zoom level
  }}
/>



          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: 'white' }}>
              Improsyn AI
            </h1>
            <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
              Pharmaceutical Voice Agent
            </p>
          </div>
        </div>
        
        <UserButton 
          afterSignOutUrl="/sign-in"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9",
            }
          }}
        />
      </header>

      {/* Full-Screen Bot */}
      <main style={{
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <iframe
          src="https://pharmedbot-2vryvh.sandbox.livekit.io/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          allow="camera; microphone; display-capture; autoplay"
          title="Improsyn AI"
        />
      </main>
    </div>
  );
}