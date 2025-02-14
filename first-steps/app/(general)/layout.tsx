import { Navbar } from "@/components";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </>
  );
}

export default GeneralLayout;