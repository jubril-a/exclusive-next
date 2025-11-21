import Constraint from "@/src/components/Constraint"
import InfoBox from "./components/InfoBox"
import FormBox from "./components/FormBox"

const page = () => {
  return (
    <Constraint>
        <main className="flex max-[920px]:flex-col gap-8 py-12">
            <InfoBox />
            <FormBox />
        </main>
    </Constraint>
  )
}

export default page