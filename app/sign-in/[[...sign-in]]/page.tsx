import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20cybersecurity%20digital%20fortress%20with%20neon%20blue%20and%20purple%20glowing%20elements%2C%20high-tech%20security%20interface%2C%20futuristic%20password%20vault%20visualization%2C%20minimalist%20dark%20background%20with%20subtle%20geometric%20patterns%2C%20professional%20security%20technology%20aesthetic%2C%20clean%20and%20modern%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gray-900/35 backdrop-blur-sm -z-10" />

      {/* Centered Sign-In */}
      <main className="flex-1 flex justify-center items-center">
        <div>
          <SignIn afterSignOutUrl="/" />
        </div>
      </main>
    </div>
  );
}
