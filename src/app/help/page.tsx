import Hero from "./components/Hero"
import Section from "@/src/components/Section"
import Faq from "./components/Faq"

const page = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Hero />
      <Section className="mb-15 flex gap-4 max-[720px]:flex-col min-[720px]:items-start">
        <Faq />
      </Section>
    </div>
  )
}

export default page