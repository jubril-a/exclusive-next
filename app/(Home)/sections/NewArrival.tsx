import Section from "@/components/Section"
import SectionHeading from "@/components/SectionHeading"

const NewArrival = () => {
  return (
    <Section>
        <SectionHeading heading="New Arrival" subheading="Featured" showBtns={false} />
        <div className="grid gap-4 min-[760px]:grid-cols-2 text-white">
            <div className="relative bg-[#0B0B0B] pt-8 grid content-end">
                <img src="/ps5.png" alt="" />
                <div className="absolute bottom-8 left-8 max-w-xs">
                    <h3 className="text-2xl font-semibold">PlayStation 5</h3>
                    <p className="my-1">Black and White version of the PS5 coming out on sale.</p>
                    <a className="border-b border-white" href="/product/fe78ba91-6c43-4409-9b63-bed72ea2468a">Shop Now</a>
                </div>
            </div>
            <div>
                <div className="relative bg-[#0B0B0B] pt-8 pl-8 mb-4 max-[480px]:min-h-70 grid content-end justify-end">
                    <img src="/ladies.png" alt="" />
                    <div className="absolute bottom-8 left-8 max-w-[280px]">
                        <h3 className="text-2xl font-semibold">Women&apos;s Collections</h3>
                        <p className="my-1">Featured woman collections that give you another vibe.</p>
                        <a className="border-b border-white" href="/product/cb50c43d-e600-402c-bad5-89ae94ccd840">Shop Now</a>
                    </div>
                </div>
                <div className="grid min-[480px]:grid-cols-2 gap-4 ">
                    <div className="relative bg-[#0B0B0B] p-8">
                        <img src="/speakers.png" alt="" />
                        <div className="absolute bottom-8 left-8 max-w-xs">
                            <h3 className="text-2xl font-semibold">Speakers</h3>
                            <p className="my-1">Amazon wireless speakers</p>
                            <a className="border-b border-white" href="/product/624a70c3-da56-45fa-9f76-ddef86edc56b">Shop Now</a>
                        </div>
                    </div>
                    <div className="relative bg-[#0B0B0B] p-8">
                        <img src="/perfume.png" alt="" />
                        <div className="absolute bottom-8 left-8 max-w-xs">
                            <h3 className="text-2xl font-semibold">Perfume</h3>
                            <p className="my-1">Gucci Intense OUD EDP</p>
                            <a className="border-b border-white" href="/product/bd87794e-0f58-455f-8600-f4ee263b00d4">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default NewArrival