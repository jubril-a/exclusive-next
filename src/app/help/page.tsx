import Hero from "./components/Hero"
import Section from "@/src/components/Section"
import Sidebar from "./components/Sidebar"
import DetailsBox from "./components/DetailsBox"

const page = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Hero />
      <Section className="mb-15 flex gap-4 items-start">
        <Sidebar />
        <DetailsBox />
      </Section>
    </div>
  )
}

export default page