import Image from "next/image";
import Chitato from "../../../public/landing-page/header/chipschapa.png"
import Studio from "../../../public/landing-page/header/shooting.png"
import Bin from "../../../public/landing-page/body/binary.png"

export default function Featurise() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 px-7 py-14 bg-neutral-900">
            <div className="w-full flex flex-col lg:gap-30 gap-15">
                <div className="w-full flex flex-col gap-14">
                    <h3 className="lg:w-[32%] lg:pb-2 pb-4 text-4xl text-neutral-100 font-medium font-sans border-b-2 border-neutral-500">01/ DIGITAL STRATEGY.</h3>
                    <div className="flex lg:flex-row lg:justify-between flex-col justify-left gap-4">
                        <Image
                            src={Chitato}
                            alt="snack packaging design"
                            className="w-full lg:w-1/3 lg:relative lg:top-15 lg:mt-15"
                        />
                        <Image
                            src={Bin}
                            alt="binary data illustration"
                            className="w-full lg:w-1/3 lg:scale-[70%]"
                        />
                        <Image
                            src={Studio}
                            alt="studio photography"
                            className="w-full lg:w-1/3 lg:relative lg:top-15 lg:mt-4"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col lg:gap-9 gap-10">
                    <div className="lg:pl-230"><h3 className="text-4xl text-neutral-100 font-medium font-sans">02/ BRANDING.</h3></div>
                    <h3 className="text-4xl text-neutral-100 font-medium font-sans">03/ WEB DEVELOPMENT.</h3>
                    <div className="lg:pl-200"><h3 className="text-4xl text-neutral-100 font-medium font-sans">04/ APP DEVELOPMENT.</h3></div>
                </div>
            </div>
        </div>
    )
}